import Link from 'next/link';

export const metadata = {
  title: 'Security | Zimax Networks LC',
  description: 'Security philosophy, data handling, and responsible disclosure for Zimax Networks products.',
};

export default function SecurityPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Security
            </h1>
            <p className="text-xl text-gray-600">
              Our commitment to security, transparency, and responsible disclosure
            </p>
          </div>
        </div>
      </section>

      {/* Security Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Security Philosophy</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                At Zimax Networks, security is not an afterthought—it's foundational to everything we build. Our approach is guided by three core principles:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Least Privilege</h3>
                  <p className="text-gray-600">
                    We design systems with minimal required permissions. Every access request is evaluated, and unnecessary privileges are eliminated.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Auditability</h3>
                  <p className="text-gray-600">
                    All security-relevant actions are logged and traceable. We provide comprehensive audit trails for compliance and forensic analysis.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
                  <p className="text-gray-600">
                    We believe in open communication about security practices, vulnerabilities, and remediation. Transparency builds trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Handling */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Handling Overview</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Public vs Private Boundaries</h3>
                <p className="text-gray-600 mb-4">
                  <strong>SecAI Radar Public Trust Hub:</strong> Trust scores, evidence confidence levels, and basic server metadata are publicly visible to promote transparency and help the community make informed decisions.
                </p>
                <p className="text-gray-600">
                  <strong>Private Registry:</strong> Enterprise inventory, approval workflows, policy configurations, and internal evidence packs are private by default and only accessible to authorized users within your organization.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidence Packs</h3>
                <p className="text-gray-600">
                  Evidence submitted by providers or collected through discovery is private by default. Public trust scores are computed from evidence but do not expose sensitive details. Evidence packs in the private registry are only accessible to authorized enterprise users.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">ctxeco Runtime Data</h3>
                <p className="text-gray-600">
                  All MCP request/response data, logs, and policy decisions are stored securely and are only accessible to your organization. We do not share runtime data with third parties or use it for purposes other than providing the service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Disclosure */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Responsible Disclosure</h2>
            <p className="text-lg text-gray-600 mb-6">
              We take security vulnerabilities seriously and appreciate the security research community's efforts to help keep our products and services secure.
            </p>
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded">
              <p className="text-gray-700 mb-4">
                If you discover a security vulnerability, please follow our responsible disclosure process outlined in our{' '}
                <Link href="/security/disclosure" className="text-primary hover:underline font-medium">
                  Vulnerability Disclosure Policy
                </Link>
                .
              </p>
              <p className="text-gray-700">
                We commit to acknowledging reports promptly, providing regular updates on remediation progress, and publicly crediting researchers (with permission) for responsible disclosures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Security Contact</h2>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-600 mb-4">
                For security-related inquiries, vulnerability reports, or questions about our security practices:
              </p>
              <p className="text-lg">
                <strong>Email:</strong>{' '}
                <a href="mailto:security@zimax.net" className="text-primary hover:underline">
                  security@zimax.net
                </a>
              </p>
              <p className="text-gray-600 mt-4 text-sm">
                For general inquiries, please use our{' '}
                <Link href="/contact" className="text-primary hover:underline">
                  contact form
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Trust FAQ</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do you ensure data privacy?
                </h3>
                <p className="text-gray-600">
                  We follow strict data minimization principles. We only collect data necessary for providing our services. Private data (evidence packs, enterprise inventory) is encrypted at rest and in transit, and access is controlled through role-based access control (RBAC).
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Where is data stored?
                </h3>
                <p className="text-gray-600">
                  Data is stored in secure cloud infrastructure with geographic redundancy. We can provide specific data residency information upon request for enterprise customers.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you undergo security audits?
                </h3>
                <p className="text-gray-600">
                  Yes. We conduct regular security assessments, penetration testing, and compliance reviews. Enterprise customers can request audit reports and compliance documentation as part of their procurement process.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do you handle security incidents?
                </h3>
                <p className="text-gray-600">
                  We have an incident response plan that includes immediate containment, investigation, remediation, and notification procedures. Affected customers are notified promptly in accordance with our service level agreements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
