#!/bin/bash

# Generate favicon files from SVG
# Requires ImageMagick or similar tool

echo "Generating favicon files..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is not installed. Installing..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        brew install imagemagick
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        sudo apt-get install imagemagick
    fi
fi

# Generate ICO file from SVG
convert -background none -resize 32x32 public/favicon.svg public/favicon.ico

# Generate PNG sizes for different devices
sizes=(16 32 48 64 128 256 512)

for size in "${sizes[@]}"; do
    convert -background none -resize ${size}x${size} public/favicon.svg public/favicon-${size}x${size}.png
done

echo "✅ Favicon files generated!"
echo "Files created:"
echo "  - public/favicon.ico"
for size in "${sizes[@]}"; do
    echo "  - public/favicon-${size}x${size}.png"
done
