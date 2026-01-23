import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'ctxeco | Zimax Networks LC',
  description: 'Managed MCP gateway + policy enforcement. Runtime controls and guardrails for secure MCP integration.',
};

export default function CtxecoPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ctxeco
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Managed MCP gateway + policy enforcement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ctxeco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
              >
                View ctxeco Platform
              </a>
              <a
                href="https://api.ctxeco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-base font-medium rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                API Documentation
              </a>
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
              ctxeco is a managed MCP (Model Context Protocol) gateway and context services platform. It provides runtime controls, policy enforcement, logging, and guardrails for enterprises adopting MCP in production environments.
            </p>
            <p className="text-lg text-gray-600">
              The platform acts as a secure intermediary between your applications and MCP servers, enabling policy-based routing, access control, audit logging, and compliance monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Why enterprises use it */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Enterprises Use It
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Policy Gates</h3>
                <p className="text-gray-600">
                  Enforce security policies at runtime. Block or allow MCP requests based on trust scores, server approval status, and custom rules.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Logging</h3>
                <p className="text-gray-600">
                  Full audit trail of all MCP interactions: requests, responses, policy decisions, and errors. Export logs for compliance and security analysis.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Guardrails</h3>
                <p className="text-gray-600">
                  Built-in protections: rate limiting, request validation, data sanitization, and automatic blocking of high-risk operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it relates to SecAI Radar */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Relates to SecAI Radar</h2>
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded">
              <p className="text-lg text-gray-700 mb-4">
                <strong>SecAI Radar informs posture; ctxeco enforces policy.</strong>
              </p>
              <p className="text-gray-700 mb-4">
                SecAI Radar provides evidence-based trust scoring and governance tools to help you understand which MCP servers are safe to use. ctxeco takes those insights and applies them at runtime.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Use SecAI Radar scores to set policy thresholds in ctxeco</li>
                <li>Automatically block servers that fall below your trust score requirements</li>
                <li>Require approval workflow for new servers based on registry status</li>
                <li>Generate audit logs that reference evidence from SecAI Radar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Managed MCP Endpoint</h3>
                <p className="text-gray-600 text-sm">
                  Single, secure endpoint for all MCP operations with automatic routing and load balancing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Policy Engine</h3>
                <p className="text-gray-600 text-sm">
                  Flexible policy rules based on trust scores, server metadata, tool permissions, and custom conditions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Integration APIs</h3>
                <p className="text-gray-600 text-sm">
                  RESTful APIs for policy management, monitoring, and integration with existing security tools.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">SLA & Support</h3>
                <p className="text-gray-600 text-sm">
                  Enterprise-grade availability, performance guarantees, and dedicated support for production deployments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to secure your MCP integration?"
        description="Explore the ctxeco platform or request an enterprise plan consultation."
        primaryAction={{
          label: 'View Platform',
          href: 'https://ctxeco.com',
        }}
        secondaryAction={{
          label: 'Request Enterprise Plan',
          href: '/contact',
        }}
      />
    </div>
  );
}
