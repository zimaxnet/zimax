import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import Badge from '@/components/Badge';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Home | Zimax Networks LC',
  description: 'Transparent governance and safe runtime controls for enterprise agent ecosystems.',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transparent governance and safe runtime controls for enterprise agent ecosystems.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Security posture scoring, evidence-based verification, and managed MCP integration—built for the real world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-base font-medium rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Contact / Partnerships
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="bg-gray-50 py-8 border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-700">
            <Badge variant="primary">Evidence-first</Badge>
            <span className="hidden sm:inline">•</span>
            <Badge variant="primary">Daily drift visibility</Badge>
            <span className="hidden sm:inline">•</span>
            <Badge variant="primary">NIST AI RMF-aligned risk thinking</Badge>
            <span className="hidden sm:inline">•</span>
            <Badge variant="primary">MIT OSS core</Badge>
          </div>
        </div>
      </section>

      {/* Product Triad */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProductCard
                title="SecAI Radar"
                description="Verified MCP trust scoring + governance registry"
                learnMoreHref="/products/secai-radar"
                goToProductHref="https://secairadar.cloud"
                goToProductLabel="Visit SecAI Radar"
                external
              />
              <ProductCard
                title="ctxeco"
                description="Managed MCP gateway + policy enforcement"
                learnMoreHref="/products/ctxeco"
                goToProductHref="https://ctxeco.com"
                goToProductLabel="Visit ctxeco"
                external
              />
              <ProductCard
                title="openContextGraph"
                description="Graph Knowledge primitives (MIT)"
                learnMoreHref="/products/opencontextgraph"
                goToProductHref="https://github.com/derekbmoore/openContextGraph"
                goToProductLabel="View on GitHub"
                external
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Outcomes */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Enterprise Outcomes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Governance-ready adoption path</h3>
                <p className="text-gray-600">
                  Clear policies, approvals, and audit trails for enterprise compliance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent explainability</h3>
                <p className="text-gray-600">
                  Look behind the veil with evidence-based trust scoring and drift tracking.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Safer integrations + policy gates</h3>
                <p className="text-gray-600">
                  Runtime enforcement and guardrails for secure MCP adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Teaser */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Updates</h2>
            <p className="text-gray-600 mb-8">
              Stay informed with our latest insights on enterprise agent governance and security.
            </p>
            <Link
              href="/resources/blog"
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
            >
              Read updates →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection
        title="Talk to us about enterprise adoption"
        description="Ready to implement transparent governance for your agent ecosystem? Let's discuss your needs."
        primaryAction={{
          label: 'Contact Us',
          href: '/contact',
        }}
      />
    </>
  );
}
