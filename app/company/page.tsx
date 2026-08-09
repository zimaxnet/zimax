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
              An inferencing company in Phoenix, Arizona — built with partners who asked
              us to prove it
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
                Zimax Networks LC is an inferencing company incorporated in Phoenix,
                Arizona. We operate managed, private AI inference on Microsoft Azure —
                tiered model routing, a truth-value retrieval layer, and tenant
                isolation enforced by policy on every request — for organizations whose
                prompts and documents are competitive assets.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We are built with the support of friends and partners who committed
                time, talent, and treasure — and who held us to one standard:
                prove it. That standard shaped the company. Our platform classifies
                every document by how much it deserves to be trusted, and we publish
                our own operational evidence the same way: measured restore times,
                adversarially-verified immutable backups, and test suites run against
                both live regions. Our products — ctxEco, SecAI Radar, and
                openContextGraph — all ride on that foundation.
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
