import Link from 'next/link';
import Badge from '@/components/Badge';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'SecAI Radar | Zimax Networks LC',
  description: 'Verified MCP trust scoring + governance registry. Security posture assessment and evidence-based verification.',
};

export default function SecAIRadarPage() {
  const faqs = [
    {
      question: 'How are scores produced?',
      answer: 'Trust scores are computed using evidence-based assessment across six domains: authentication, hosting, tool agency, logging, data handling, and documentation. Scores range from 0-100 and are updated daily based on available evidence and drift detection.',
    },
    {
      question: 'How do providers submit evidence?',
      answer: 'Providers can submit evidence through our verification portal. We accept documentation, security attestations, audit reports, and other artifacts that demonstrate security posture. Evidence is reviewed and incorporated into the scoring model.',
    },
    {
      question: 'How do enterprises govern adoption?',
      answer: 'Enterprises use the Trust Registry to set policy thresholds, approve servers for use, track inventory, and generate audit packs. The registry integrates with procurement workflows and provides evidence-based decision support.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SecAI Radar
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Verified MCP trust scoring + governance registry
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Badge variant="primary">Evidence-first</Badge>
              <Badge variant="primary">Daily drift visibility</Badge>
              <Badge variant="primary">NIST AI RMF-aligned</Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://secairadar.cloud/mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
              >
                Visit Verified MCP Trust Hub
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-base font-medium rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Request Access / Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What it is</h2>
            <p className="text-lg text-gray-600 mb-6">
              SecAI Radar is a security authority and governance product that provides evidence-based trust scoring for MCP (Model Context Protocol) servers. It combines public transparency with enterprise governance tools.
            </p>
            <p className="text-lg text-gray-600">
              <strong>Important:</strong> Trust scores represent risk posture assessment, not a certification. They provide evidence-based insights to help enterprises make informed decisions about MCP adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Public Trust Hub Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Public Trust Hub Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust Score</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive scoring (0-100) across six security domains, updated daily with drift detection.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Authentication & authorization</li>
                  <li>Hosting & infrastructure</li>
                  <li>Tool agency & permissions</li>
                  <li>Logging & auditability</li>
                  <li>Data handling & privacy</li>
                  <li>Documentation & transparency</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Evidence Confidence</h3>
                <p className="text-gray-600 mb-4">
                  Confidence levels (0-3) indicating the strength of evidence available for scoring.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Level 3: Verified evidence + attestations</li>
                  <li>Level 2: Public documentation + artifacts</li>
                  <li>Level 1: Basic signals from discovery</li>
                  <li>Level 0: Limited or no evidence</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Drift Tracking</h3>
                <p className="text-gray-600">
                  Daily monitoring of changes: new tools, scope modifications, endpoint updates, certificate changes, and documentation updates. Alerts for significant changes that may affect security posture.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">GK Explainability</h3>
                <p className="text-gray-600">
                  Powered by openContextGraph, provides visual trust graphs showing relationships between servers, tools, permissions, data domains, and evidence. Click any node to see supporting evidence and verification dates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Registry Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Private Registry Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Inventory</h3>
                <p className="text-gray-600 text-sm">
                  Track all MCP servers in use across your organization with centralized visibility.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Policies</h3>
                <p className="text-gray-600 text-sm">
                  Set trust score thresholds, approval workflows, and governance rules.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Approvals</h3>
                <p className="text-gray-600 text-sm">
                  Request and manage approvals for new server adoption with evidence review.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Evidence Packs</h3>
                <p className="text-gray-600 text-sm">
                  Generate comprehensive evidence packs for audit and compliance purposes.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Audit Exports</h3>
                <p className="text-gray-600 text-sm">
                  Export inventory, approvals, and evidence in JSON or PDF formats for external audits.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Drift Alerts</h3>
                <p className="text-gray-600 text-sm">
                  Receive notifications when servers in your inventory experience significant changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise-safe language */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Enterprise-Safe Language
              </h3>
              <p className="text-gray-700">
                SecAI Radar provides <strong>risk posture assessment</strong>, not a certification. Scores are evidence-based indicators that help enterprises make informed decisions. They should be used as part of a comprehensive security governance program, not as the sole basis for adoption decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to explore SecAI Radar?"
        description="Visit the Verified MCP Trust Hub or request a demo to see how it can help your organization."
        primaryAction={{
          label: 'Visit Trust Hub',
          href: 'https://secairadar.cloud/mcp',
        }}
        secondaryAction={{
          label: 'Request Demo',
          href: '/contact',
        }}
      />
    </div>
  );
}
