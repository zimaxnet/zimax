export const metadata = {
  title: 'Brand Kit | Zimax Networks LC',
  description: 'Logos, brand assets, and guidelines for Zimax Networks.',
};

export default function BrandKitPage() {
  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Brand Kit</h1>
            <p className="text-gray-600">Logos, screenshots, and brand guidelines</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Logos */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Logos</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Primary Logo</h3>
                  <div className="flex flex-wrap gap-6 items-center">
                    <div>
                      <img src="/brand/logos/zimax-logo.svg" alt="Zimax Networks Logo" className="h-16" />
                      <p className="text-sm text-gray-600 mt-2">Full Logo (SVG)</p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded">
                      <img src="/brand/logos/zimax-logo-dark.svg" alt="Zimax Networks Logo Dark" className="h-16" />
                      <p className="text-sm text-gray-300 mt-2">Dark Background Variant</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a href="/brand/logos/zimax-logo.svg" download className="text-primary hover:underline text-sm">
                      Download SVG →
                    </a>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Icon/Simple Logo</h3>
                  <div className="flex items-center gap-4">
                    <img src="/brand/logos/zimax-logo-simple.svg" alt="Zimax Networks Icon" className="h-16 w-16" />
                    <div>
                      <p className="text-sm text-gray-600">Square icon variant for favicons and app icons</p>
                      <a href="/brand/logos/zimax-logo-simple.svg" download className="text-primary hover:underline text-sm">
                        Download SVG →
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Formats available:</strong> SVG (vector), PNG variants available on request
                  </p>
                </div>
              </div>
            </section>

            {/* Product Screenshots */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Screenshots</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">SecAI Radar</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Screenshots of the Verified MCP Trust Hub and Trust Registry will be available here.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">ctxeco</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Platform screenshots and dashboard images will be available here.
                  </p>
                </div>
              </div>
            </section>

            {/* Diagrams */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Diagrams</h2>
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <p className="text-gray-600 mb-4">
                  Architecture diagrams, portfolio overview, and product relationship diagrams will be available here.
                </p>
                <p className="text-sm text-gray-500">
                  Formats: PNG, SVG, PDF
                </p>
              </div>
            </section>

            {/* Brand Guidelines */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Brand Guidelines</h2>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Color Palette</h3>
                  <p className="text-gray-600 text-sm">
                    Primary brand colors and usage guidelines will be documented here.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Typography</h3>
                  <p className="text-gray-600 text-sm">
                    Font families and typography guidelines will be available here.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Usage Rights</h3>
                  <p className="text-gray-600 text-sm">
                    Brand assets are provided for editorial and news coverage purposes. Commercial use requires permission. Please contact us for licensing inquiries.
                  </p>
                </div>
              </div>
            </section>

            {/* Request Access */}
            <section className="bg-blue-50 border-l-4 border-primary p-6 rounded">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Immediate Access?</h3>
              <p className="text-gray-700 mb-4">
                If you need brand assets immediately for a story or publication, please contact us at{' '}
                <a href="mailto:press@zimax.net" className="text-primary hover:underline">press@zimax.net</a>.
              </p>
              <a
                href="/press/media-inquiries"
                className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
              >
                Media Inquiries →
              </a>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
