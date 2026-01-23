import Link from 'next/link';

export const metadata = {
  title: 'Solutions | Zimax Networks LC',
  description: 'Enterprise solutions for agent governance and secure MCP adoption.',
};

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions
            </h1>
            <p className="text-xl text-gray-600">
              Enterprise solutions for agent governance and secure MCP adoption
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 text-center">
              Our solutions are currently under development. Check back soon for detailed information about enterprise agent governance and secure MCP adoption pathways.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Agent Governance</h2>
                <p className="text-gray-600 text-sm mb-4">
                  Inventory, approvals, policy thresholds, and audit packs for governing agent ecosystems.
                </p>
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Secure MCP Adoption</h2>
                <p className="text-gray-600 text-sm mb-4">
                  Posture scoring, drift tracking, and runtime enforcement for secure MCP integration.
                </p>
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
              >
                Contact Us to Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
