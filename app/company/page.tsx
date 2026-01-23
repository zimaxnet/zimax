import Link from 'next/link';

export const metadata = {
  title: 'Company | Zimax Networks LC',
  description: 'About Zimax Networks, our mission, and leadership.',
};

export default function CompanyPage() {
  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Company
            </h1>
            <p className="text-xl text-gray-600">
              Building transparent governance for enterprise agent ecosystems
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
              <p className="text-lg text-gray-600 mb-4">
                Zimax Networks LC is focused on solving the security and governance challenges that enterprises face when adopting agent ecosystems and MCP (Model Context Protocol) integrations.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We believe that transparency, evidence-based assessment, and clear policy enforcement are essential for safe adoption of these powerful technologies. Our products—SecAI Radar, ctxeco, and openContextGraph—work together to provide a complete governance and runtime control solution.
              </p>
              <p className="text-lg text-gray-600">
                Learn more about our{' '}
                <Link href="/company/about" className="text-primary hover:underline">
                  mission and values
                </Link>
                {' '}or explore our{' '}
                <Link href="/products" className="text-primary hover:underline">
                  products
                </Link>
                .
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/company/about"
                className="block p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">About</h3>
                <p className="text-gray-600 text-sm">
                  Our mission, values, and approach to enterprise security
                </p>
              </Link>
              <Link
                href="/company/leadership"
                className="block p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Leadership</h3>
                <p className="text-gray-600 text-sm">
                  Meet the team behind Zimax Networks
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
