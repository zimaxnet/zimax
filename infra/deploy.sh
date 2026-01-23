#!/bin/bash

# Azure Static Web App Deployment Script
# This script helps deploy the Static Web App using Azure CLI

set -e

# Configuration
RESOURCE_GROUP="zimax-rg"
STATIC_WEB_APP_NAME="zimax-web"
LOCATION="eastus"  # Adjust to your preferred location
SKU="Standard"     # Options: Free, Standard

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
    sku=$SKU

# Get deployment token
echo "Getting deployment token..."
DEPLOYMENT_TOKEN=$(az staticwebapp secrets list \
  --name $STATIC_WEB_APP_NAME \
  --resource-group $RESOURCE_GROUP \
  --query "properties.apiKey" \
  -o tsv)

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Add this to your GitHub repository secrets as AZURE_STATIC_WEB_APPS_API_TOKEN:"
echo "   $DEPLOYMENT_TOKEN"
echo ""
echo "2. Configure custom domain in Azure Portal:"
echo "   https://portal.azure.com/#@zimax.net/resource/subscriptions/$SUBSCRIPTION_ID/resourceGroups/$RESOURCE_GROUP/providers/Microsoft.Web/staticSites/$STATIC_WEB_APP_NAME"
echo ""
echo "3. Update DNS records as shown in Azure Portal"
echo ""
