import Link from 'next/link';
import Badge from '@/components/Badge';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'openContextGraph | Zimax Networks LC',
  description: 'Graph Knowledge primitives (MIT). Open-source foundation for explainability, lineage tracking, and trust graphs.',
};

export default function OpenContextGraphPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              openContextGraph
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Graph Knowledge primitives (MIT)
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Badge variant="success">MIT Licensed</Badge>
              <Badge variant="primary">Open Source</Badge>
            </div>
            <a
              href="https://github.com/derekbmoore/openContextGraph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
            >
              GitHub Repository →
            </a>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What it is</h2>
            <p className="text-lg text-gray-600 mb-6">
              openContextGraph is an open-source Graph Knowledge (GK) engine that provides primitives for building explainable, traceable, and verifiable systems. It's the foundation that powers explainability features in SecAI Radar and ctxeco.
            </p>
            <p className="text-lg text-gray-600">
              The project is released under the MIT License, making it freely available for use in both open-source and commercial projects. It provides graph-based data structures and algorithms for representing relationships, lineage, and trust networks.
            </p>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Explainability</h3>
                <p className="text-gray-600">
                  Build visual graphs that show how decisions are made, what evidence supports conclusions, and how different components relate to each other. Perfect for AI/ML systems that need to explain their reasoning.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lineage Tracking</h3>
                <p className="text-gray-600">
                  Track the provenance of data, models, and decisions through complex pipelines. Understand where information comes from and how it's transformed at each step.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust Graphs</h3>
                <p className="text-gray-600">
                  Model trust relationships between entities, evidence, and claims. Build systems that can reason about trustworthiness based on graph structures and evidence chains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clear separation */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Open Source vs Commercial</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <p className="text-lg text-gray-700 mb-4">
                <strong>OSS core is MIT; hosted features are commercial.</strong>
              </p>
              <p className="text-gray-700 mb-4">
                The openContextGraph library itself is fully open-source under the MIT License. You can use it in any project, commercial or otherwise, without restrictions.
              </p>
              <p className="text-gray-700">
                However, the hosted services, managed infrastructure, and enterprise features we build on top of openContextGraph (like SecAI Radar's trust hub and ctxeco's gateway) are commercial products. This separation ensures the core technology remains open while allowing us to build sustainable business models around managed services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it powers our products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How It Powers Our Products
            </h2>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">SecAI Radar</h3>
                  <p className="text-gray-600">
                    Uses openContextGraph to build trust graphs showing relationships between MCP servers, tools, permissions, data domains, hosting infrastructure, and evidence. The Trust Graph Explorer visualizes these relationships and enables interactive exploration.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">ctxeco</h3>
                  <p className="text-gray-600">
                    Leverages graph structures to track request lineage, understand policy dependencies, and generate explainable audit logs. Every policy decision can be traced back through the graph to supporting evidence.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Future Applications</h3>
                  <p className="text-gray-600">
                    The graph primitives enable new capabilities like automated risk propagation, evidence chain validation, and cross-product trust relationships. As we add features, the open-source core benefits the entire community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Explore openContextGraph"
        description="Check out the GitHub repository, contribute, or learn how it can power your own explainability needs."
        primaryAction={{
          label: 'View on GitHub',
          href: 'https://github.com/derekbmoore/openContextGraph',
        }}
        secondaryAction={{
          label: 'Open Source License',
          href: '/legal/open-source',
        }}
      />
    </div>
  );
}
