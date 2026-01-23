import Link from 'next/link';

export const metadata = {
  title: 'Resources | Zimax Networks LC',
  description: 'Blog, reports, and resources from Zimax Networks.',
};

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Resources
            </h1>
            <p className="text-xl text-gray-600">
              Insights, updates, and resources for enterprise agent governance
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog</h2>
              <p className="text-gray-600 mb-6">
                Stay informed with our latest insights on enterprise agent governance, MCP security, and explainability.
              </p>
              <Link
                href="/resources/blog"
                className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
              >
                View Blog →
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Reports</h2>
              <p className="text-gray-600">
                Industry reports and analysis will be available here. Check back soon for our "State of MCP Security" report.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Press</h2>
              <p className="text-gray-600">
                Press mentions and news coverage will be available here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
