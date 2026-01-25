#!/bin/bash

# Azure Static Web App Deployment Script
# This script helps deploy the Static Web App using Azure CLI

set -e

# Configuration
RESOURCE_GROUP="zimax-rg"
STATIC_WEB_APP_NAME="zimax-web"
LOCATION="eastus2" # SWA supported: westus2, centralus, eastus2, westeurope, eastasia (not eastus)
SKU="Free"         # Free supports 2 custom domains + auto SSL; use Standard for more

echo "🚀 Deploying Azure Static Web App..."

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo "❌ Azure CLI is not installed. Please install it first: https://docs.microsoft.com/cli/azure/install-azure-cli"
    exit 1
fi

# Login check
echo "Checking Azure login..."
az account show &> /dev/null || {
    echo "Please login to Azure..."
    az login
}

# Set subscription
SUBSCRIPTION_ID="23f4e2c5-0667-4514-8e2e-f02ca7880c95"
echo "Setting subscription to $SUBSCRIPTION_ID..."
az account set --subscription $SUBSCRIPTION_ID

# Deploy using Bicep
echo "Deploying infrastructure with Bicep..."
az deployment group create \
  --resource-group $RESOURCE_GROUP \
  --template-file infra/azure-static-web-app.bicep \
  --parameters \
    staticWebAppName=$STATIC_WEB_APP_NAME \
    location=$LOCATION \
    sku=$SKU \
    repositoryUrl=https://github.com/zimaxnet/zimax

# Get deployment token
echo "Getting deployment token..."
DEPLOYMENT_TOKEN=$(az staticwebapp secrets list \
  --name $STATIC_WEB_APP_NAME \
  --resource-group $RESOURCE_GROUP \
  --query "properties.apiKey" \
  -o tsv)

DEFAULT_URL=$(az staticwebapp show --name $STATIC_WEB_APP_NAME --resource-group $RESOURCE_GROUP --query "defaultHostname" -o tsv)
echo ""
echo "✅ Deployment complete! (Free tier)"
echo ""
echo "📋 Next steps:"
echo "1. Add this token to GitHub repo secrets as AZURE_STATIC_WEB_APPS_API_TOKEN:"
echo "   $DEPLOYMENT_TOKEN"
echo ""
echo "2. Bind zimax.net as default (use Azure DNS so the free cert binds):"
echo "   • Open: https://portal.azure.com → Static Web App '$STATIC_WEB_APP_NAME' → Custom domains"
echo "   • Add → choose \"Custom domain on Azure DNS\""
echo "   • Select DNS zone: zimax.net (resource group dns-rg)"
echo "   • Add → wait for validation (TXT/ALIAS are created automatically)"
echo "   • After validation: Custom domains → ⋮ next to zimax.net → \"Set as default\""
echo "   See infra/CUSTOM-DOMAIN-FREE.md for details."
echo ""
echo "3. Push to main to deploy: default URL https://${DEFAULT_URL}"
echo ""
