export const metadata = {
  title: 'About | Zimax Networks LC',
  description: 'Our mission, values, and approach to enterprise agent governance.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Zimax Networks</h1>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p>
                  To enable safe, transparent, and governable adoption of agent ecosystems and MCP integrations in enterprise environments. We believe that security and governance should be built into the foundation, not bolted on as an afterthought.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Transparency:</strong> We believe in open communication, evidence-based assessment, and clear explanations of how systems work.</li>
                  <li><strong>Security First:</strong> Security and governance are not optional—they're fundamental to everything we build.</li>
                  <li><strong>Open Source Foundation:</strong> We contribute to the open-source community and build commercial value on top of open foundations.</li>
                  <li><strong>Enterprise Ready:</strong> Our products are designed for real-world enterprise requirements, not just demos.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h2>
                <p>
                  We combine three complementary approaches:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li><strong>Evidence-Based Assessment:</strong> Trust scores and security posture evaluation based on verifiable evidence, not assumptions.</li>
                  <li><strong>Policy Enforcement:</strong> Runtime controls and guardrails that enforce security policies at the point of integration.</li>
                  <li><strong>Explainability:</strong> Graph-based knowledge structures that make it possible to understand how decisions are made and what evidence supports them.</li>
                </ol>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
