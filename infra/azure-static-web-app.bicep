@description('Name of the Static Web App resource')
param staticWebAppName string = 'zimax-web'

@description('Location for all resources')
param location string = resourceGroup().location

@description('SKU for the Static Web App')
param sku string = 'Free' // Options: Free, Standard

@description('GitHub repository URL (optional)')
param repositoryUrl string = ''

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

// Custom domain configuration (zimax.net)
resource customDomain 'Microsoft.Web/staticSites/customDomains@2022-03-01' = {
  parent: staticWebApp
  name: 'zimax.net'
  properties: {
    validationMethod: 'dns-txt-token'
  }
}

// Outputs
output staticWebAppName string = staticWebApp.name
output defaultHostname string = staticWebApp.properties.defaultHostname
output apiKey string = staticWebApp.listSecrets().properties.apiKey
output appInsightsInstrumentationKey string = appInsights.properties.InstrumentationKey
