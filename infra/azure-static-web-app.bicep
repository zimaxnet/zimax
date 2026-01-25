@description('Name of the Static Web App resource')
param staticWebAppName string = 'zimax-web'

@description('Location for all resources')
param location string = resourceGroup().location

@description('SKU for the Static Web App')
param sku string = 'Free' // Options: Free, Standard

@description('GitHub repository URL (required by ARM for SWA)')
param repositoryUrl string = 'https://github.com/zimaxnet/zimax'

@description('GitHub branch name')
param branch string = 'main'

@description('GitHub token (optional, for CI/CD)')
@secure()
param githubToken string = ''

var appServicePlanName = '${staticWebAppName}-plan'
var appInsightsName = '${staticWebAppName}-insights'

// Application Insights for monitoring
resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: appInsightsName
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
    Request_Source: 'rest'
  }
}

// Static Web App
resource staticWebApp 'Microsoft.Web/staticSites@2022-03-01' = {
  name: staticWebAppName
  location: location
  sku: {
    name: sku
    tier: sku
  }
  properties: {
    repositoryUrl: !empty(repositoryUrl) ? repositoryUrl : null
    branch: branch
    buildProperties: {
      appLocation: '/'
      apiLocation: ''
      outputLocation: 'out'
    }
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
  }
}

// Custom domain (zimax.net) is added after deploy via Portal:
// Custom domains → Add → "Custom domain on Azure DNS" → select zone zimax.net.
// That creates TXT/ALIAS in Azure DNS and provisions the free SSL automatically.

// Outputs
output staticWebAppName string = staticWebApp.name
output defaultHostname string = staticWebApp.properties.defaultHostname
output apiKey string = staticWebApp.listSecrets().properties.apiKey
output appInsightsInstrumentationKey string = appInsights.properties.InstrumentationKey
