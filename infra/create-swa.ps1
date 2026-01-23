# PowerShell script to create Azure Static Web App
# Run this from Azure Cloud Shell or local PowerShell with Azure CLI

$subscriptionId = "23f4e2c5-0667-4514-8e2e-f02ca7880c95"
$resourceGroup = "zimax-rg"
$staticWebAppName = "zimax-web"
$location = "eastus2"
$sku = "Standard"

Write-Host "🚀 Creating Azure Static Web App..." -ForegroundColor Green

# Set subscription
Write-Host "Setting subscription..." -ForegroundColor Yellow
az account set --subscription $subscriptionId

# Create Static Web App
Write-Host "Creating Static Web App..." -ForegroundColor Yellow
az staticwebapp create `
  --name $staticWebAppName `
  --resource-group $resourceGroup `
  --location $location `
  --sku $sku

# Get deployment token
Write-Host "Getting deployment token..." -ForegroundColor Yellow
$deploymentToken = az staticwebapp secrets list `
  --name $staticWebAppName `
  --resource-group $resourceGroup `
  --query "properties.apiKey" `
  -o tsv

Write-Host ""
Write-Host "✅ Static Web App created successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. Add this token to GitHub Secrets as AZURE_STATIC_WEB_APPS_API_TOKEN:"
Write-Host "   $deploymentToken" -ForegroundColor White
Write-Host ""
Write-Host "2. Configure environment variables in Azure Portal:"
Write-Host "   https://portal.azure.com/#@zimax.net/resource/subscriptions/$subscriptionId/resourceGroups/$resourceGroup/providers/Microsoft.Web/staticSites/$staticWebAppName" -ForegroundColor Blue
Write-Host ""
Write-Host "3. Add custom domain 'zimax.net' in Azure Portal"
Write-Host ""
