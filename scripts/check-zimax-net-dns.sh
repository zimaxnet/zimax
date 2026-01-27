#!/bin/bash

# Check DNS status for zimax.net apex domain with Azure Static Web Apps
# This script helps diagnose DNS issues for the apex domain setup

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo "=========================================="
echo "zimax.net DNS Status Check"
echo "=========================================="
echo ""

# Configuration
SWA_NAME="zimax-web"
RESOURCE_GROUP="zimax-rg"
DNS_ZONE="zimax.net"
DNS_RG="dns-rg"
DOMAIN="zimax.net"

# Check if Static Web App exists
echo "1. Checking Static Web App..."
if az staticwebapp show --name "$SWA_NAME" --resource-group "$RESOURCE_GROUP" &>/dev/null; then
    echo -e "${GREEN}✅ Static Web App '$SWA_NAME' exists${NC}"
    
    # Get default hostname
    DEFAULT_HOSTNAME=$(az staticwebapp show \
        --name "$SWA_NAME" \
        --resource-group "$RESOURCE_GROUP" \
        --query "defaultHostname" -o tsv)
    echo "   Default hostname: $DEFAULT_HOSTNAME"
    
    # Check custom domains
    echo ""
    echo "2. Checking Custom Domains..."
    CUSTOM_DOMAINS=$(az staticwebapp hostname list \
        --name "$SWA_NAME" \
        --resource-group "$RESOURCE_GROUP" \
        --output json 2>/dev/null || echo "[]")
    
    if echo "$CUSTOM_DOMAINS" | jq -e 'length > 0' &>/dev/null; then
        echo -e "${GREEN}✅ Custom domains configured:${NC}"
        echo "$CUSTOM_DOMAINS" | jq -r '.[] | "   - \(.hostname): \(.validationState) (\(.status))"'
        
        # Check if zimax.net is configured
        if echo "$CUSTOM_DOMAINS" | jq -e ".[] | select(.hostname == \"$DOMAIN\")" &>/dev/null; then
            DOMAIN_INFO=$(echo "$CUSTOM_DOMAINS" | jq ".[] | select(.hostname == \"$DOMAIN\")")
            STATUS=$(echo "$DOMAIN_INFO" | jq -r '.status // "Unknown"')
            VALIDATION=$(echo "$DOMAIN_INFO" | jq -r '.validationState // "Unknown"')
            
            echo ""
            echo "   zimax.net Status:"
            case "$STATUS" in
                "Ready")
                    echo -e "   ${GREEN}✅ Status: Ready${NC}"
                    ;;
                "Validating")
                    echo -e "   ${YELLOW}⏳ Status: Validating${NC}"
                    ;;
                "Failed")
                    echo -e "   ${RED}❌ Status: Failed${NC}"
                    ;;
                *)
                    echo -e "   ${BLUE}ℹ️  Status: $STATUS${NC}"
                    ;;
            esac
            
            case "$VALIDATION" in
                "Valid"|"Approved")
                    echo -e "   ${GREEN}✅ Validation: $VALIDATION${NC}"
                    ;;
                "Pending"|"Validating")
                    echo -e "   ${YELLOW}⏳ Validation: $VALIDATION${NC}"
                    ;;
                "Invalid"|"Failed")
                    echo -e "   ${RED}❌ Validation: $VALIDATION${NC}"
                    ;;
                *)
                    echo -e "   ${BLUE}ℹ️  Validation: $VALIDATION${NC}"
                    ;;
            esac
        else
            echo -e "${YELLOW}⚠️  zimax.net not found in custom domains${NC}"
        fi
    else
        echo -e "${YELLOW}⚠️  No custom domains configured${NC}"
    fi
else
    echo -e "${RED}❌ Static Web App '$SWA_NAME' not found${NC}"
    echo "   Create it with:"
    echo "   az staticwebapp create --name $SWA_NAME --resource-group $RESOURCE_GROUP --location eastus2 --sku Standard"
fi

echo ""
echo "3. Checking DNS Zone..."
if az network dns zone show --resource-group "$DNS_RG" --name "$DNS_ZONE" &>/dev/null; then
    echo -e "${GREEN}✅ DNS Zone '$DNS_ZONE' exists${NC}"
    
    # Get nameservers
    NAMESERVERS=$(az network dns zone show \
        --resource-group "$DNS_RG" \
        --name "$DNS_ZONE" \
        --query "nameServers" -o tsv)
    echo "   Name servers:"
    echo "$NAMESERVERS" | while read ns; do
        echo "     - $ns"
    done
else
    echo -e "${RED}❌ DNS Zone '$DNS_ZONE' not found${NC}"
fi

echo ""
echo "4. Checking DNS Records..."
echo "   A Records:"
A_RECORDS=$(az network dns record-set a list \
    --resource-group "$DNS_RG" \
    --zone-name "$DNS_ZONE" \
    --query "[?name=='@'].arecords[].ipv4Address" -o tsv 2>/dev/null || echo "")
if [ -n "$A_RECORDS" ]; then
    echo "$A_RECORDS" | while read ip; do
        echo "     - $ip"
    done
else
    echo -e "     ${YELLOW}⚠️  No A records found for apex domain${NC}"
fi

echo "   TXT Records:"
TXT_RECORDS=$(az network dns record-set txt list \
    --resource-group "$DNS_RG" \
    --zone-name "$DNS_ZONE" \
    --query "[?name=='@'].txtRecords[].value[]" -o tsv 2>/dev/null || echo "")
if [ -n "$TXT_RECORDS" ]; then
    echo "$TXT_RECORDS" | while read txt; do
        if [[ "$txt" =~ ^_ ]]; then
            echo -e "     - ${BLUE}$txt${NC} (likely validation token)"
        else
            echo "     - $txt"
        fi
    done
else
    echo -e "     ${YELLOW}⚠️  No TXT records found for apex domain${NC}"
fi

echo ""
echo "5. Checking External DNS Resolution..."
echo "   A Record:"
EXTERNAL_A=$(dig +short "$DOMAIN" A 2>/dev/null || echo "")
if [ -n "$EXTERNAL_A" ]; then
    echo "$EXTERNAL_A" | while read ip; do
        echo "     - $ip"
    done
else
    echo -e "     ${YELLOW}⚠️  No A record found externally${NC}"
fi

echo "   TXT Records:"
EXTERNAL_TXT=$(dig +short "$DOMAIN" TXT 2>/dev/null || echo "")
if [ -n "$EXTERNAL_TXT" ]; then
    echo "$EXTERNAL_TXT" | sed 's/"//g' | while read txt; do
        if [[ "$txt" =~ ^_ ]]; then
            echo -e "     - ${BLUE}$txt${NC} (likely validation token)"
        else
            echo "     - $txt"
        fi
    done
else
    echo -e "     ${YELLOW}⚠️  No TXT records found externally${NC}"
fi

echo ""
echo "6. ALIAS Record Status..."
echo "   Note: ALIAS records are Azure-managed and may not appear in CLI queries"
echo "   They are automatically created when using 'Custom domain on Azure DNS'"
echo "   Check Azure Portal → DNS Zone → Record sets for ALIAS type"

echo ""
echo "=========================================="
echo "Summary & Recommendations"
echo "=========================================="
echo ""

# Provide recommendations
if ! az staticwebapp show --name "$SWA_NAME" --resource-group "$RESOURCE_GROUP" &>/dev/null; then
    echo -e "${YELLOW}⚠️  Static Web App doesn't exist${NC}"
    echo "   → Create it first, then add custom domain via Portal"
elif ! echo "$CUSTOM_DOMAINS" | jq -e ".[] | select(.hostname == \"$DOMAIN\")" &>/dev/null; then
    echo -e "${YELLOW}⚠️  zimax.net not configured as custom domain${NC}"
    echo "   → Add via Azure Portal: Static Web Apps → zimax-web → Custom domains"
    echo "   → Use 'Custom domain on Azure DNS' option (NOT 'Other custom domain')"
    echo "   → Select zimax.net DNS zone"
elif echo "$CUSTOM_DOMAINS" | jq -e ".[] | select(.hostname == \"$DOMAIN\" and .status != \"Ready\")" &>/dev/null; then
    echo -e "${YELLOW}⏳ Domain is validating${NC}"
    echo "   → Wait 5-15 minutes for validation"
    echo "   → Check status in Azure Portal"
    echo "   → If stuck >30 minutes, remove and re-add domain"
else
    echo -e "${GREEN}✅ Configuration looks good${NC}"
    echo "   → Domain should be working"
    echo "   → SSL certificate may take 24-48 hours to provision"
fi

echo ""
echo "For detailed setup instructions, see:"
echo "  ./DNS-APEX-DOMAIN-SETUP.md"
