import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'Products | Zimax Networks LC',
  description: 'Explore our portfolio: SecAI Radar, ctxeco, and openContextGraph.',
};

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Above the fold */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Three complementary solutions for enterprise agent governance, secure MCP adoption, and transparent explainability.
            </p>
          </div>

          {/* Which one selector */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Which one do you need?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/products/secai-radar"
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  I need governance + security posture
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Trust scoring, evidence verification, and governance registry
                </p>
                <span className="text-primary text-sm font-medium">SecAI Radar →</span>
              </Link>
              <Link
                href="/products/ctxeco"
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  I need managed runtime / integration
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Managed MCP gateway with policy enforcement and guardrails
                </p>
                <span className="text-primary text-sm font-medium">ctxeco →</span>
              </Link>
              <Link
                href="/products/opencontextgraph"
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  I need OSS primitives
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Graph Knowledge engine for explainability and trust graphs
                </p>
                <span className="text-primary text-sm font-medium">openContextGraph →</span>
              </Link>
            </div>
          </div>

          {/* Expanded Cards */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Product Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProductCard
                title="SecAI Radar"
                description="Verified MCP trust scoring + governance registry. Public trust hub with daily briefs, evidence-based scoring, and enterprise registry for inventory and approvals."
                learnMoreHref="/products/secai-radar"
                goToProductHref="https://secairadar.cloud"
                goToProductLabel="Visit SecAI Radar"
                external
              />
              <ProductCard
                title="ctxeco"
                description="Managed MCP gateway + policy enforcement. Runtime controls, logging, guardrails, and policy gates for secure MCP integration in enterprise environments."
                learnMoreHref="/products/ctxeco"
                goToProductHref="https://ctxeco.com"
                goToProductLabel="Visit ctxeco"
                external
              />
              <ProductCard
                title="openContextGraph"
                description="Graph Knowledge primitives (MIT). Open-source foundation for explainability, lineage tracking, and trust graphs. Powers our commercial products."
                learnMoreHref="/products/opencontextgraph"
                goToProductHref="https://github.com/derekbmoore/openContextGraph"
                goToProductLabel="View on GitHub"
                external
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">SecAI Radar</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <a href="https://secairadar.cloud/mcp" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      Verified MCP Trust Hub →
                    </a>
                  </li>
                  <li>
                    <a href="https://secairadar.cloud" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      Trust Registry →
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">ctxeco</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <a href="https://ctxeco.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      Managed MCP Endpoint →
                    </a>
                  </li>
                  <li>
                    <a href="https://api.ctxeco.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      API Documentation →
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">openContextGraph</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <a href="https://github.com/derekbmoore/openContextGraph" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      GitHub Repository →
                    </a>
                  </li>
                  <li>
                    <Link href="/legal/open-source" className="hover:text-primary">
                      License Statement →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
