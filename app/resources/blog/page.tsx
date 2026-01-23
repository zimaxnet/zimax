export const metadata = {
  title: 'Blog | Zimax Networks LC',
  description: 'Latest insights and updates from Zimax Networks.',
};

export default function BlogPage() {
  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600">
              Insights on enterprise agent governance and MCP security
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-12 rounded-lg border border-gray-200 text-center">
              <p className="text-gray-600 mb-4">
                Blog posts will be available here soon. Check back for updates on enterprise agent governance, MCP security best practices, and explainability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
