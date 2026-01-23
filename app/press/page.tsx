import Link from 'next/link';

export const metadata = {
  title: 'Press Kit | Zimax Networks LC',
  description: 'Press resources, brand assets, and media inquiries for Zimax Networks.',
};

export default function PressPage() {
  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Press Kit
            </h1>
            <p className="text-xl text-gray-600">
              Resources for media, analysts, and partners
            </p>
          </div>
        </div>
      </section>

      {/* Boilerplate */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Boilerplate</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                <strong>Zimax Networks LC</strong> provides transparent governance and safe runtime controls for enterprise agent ecosystems. Our portfolio includes SecAI Radar, a security authority offering verified MCP trust scoring and governance registry; ctxeco, a managed MCP gateway with policy enforcement; and openContextGraph, an open-source Graph Knowledge engine (MIT licensed) that powers explainability features across our products. We help enterprises adopt MCP (Model Context Protocol) securely through evidence-based risk assessment, policy enforcement, and transparent explainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/press/brand-kit"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Brand Kit</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Logos, screenshots, and brand guidelines
                </p>
                <span className="text-primary text-sm font-medium">View assets →</span>
              </Link>
              <Link
                href="/press/media-inquiries"
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Media Inquiries</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Contact information for press and analyst inquiries
                </p>
                <span className="text-primary text-sm font-medium">Contact us →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Founded</h3>
                <p className="text-gray-600">2026</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Headquarters</h3>
                <p className="text-gray-600">United States</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Products</h3>
                <p className="text-gray-600">SecAI Radar, ctxeco, openContextGraph</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Focus</h3>
                <p className="text-gray-600">Enterprise agent governance, MCP security, explainability</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
