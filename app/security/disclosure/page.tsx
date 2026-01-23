export const metadata = {
  title: 'Vulnerability Disclosure Policy | Zimax Networks LC',
  description: 'How to report security vulnerabilities in Zimax Networks products and services.',
};

export default function DisclosurePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vulnerability Disclosure Policy
            </h1>
            <p className="text-xl text-gray-600">
              How to report security vulnerabilities responsibly
            </p>
          </div>
        </div>
      </section>

      {/* Reporting Channels */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Reporting Channels</h2>
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded mb-8">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Primary Channel:</strong> Email security vulnerabilities to{' '}
                <a href="mailto:security@zimax.net" className="text-primary hover:underline font-medium">
                  security@zimax.net
                </a>
              </p>
              <p className="text-gray-700">
                Please include as much detail as possible about the vulnerability, including steps to reproduce, potential impact, and any proof-of-concept code (if applicable).
              </p>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                We prefer encrypted email when possible. You can use our PGP key (available upon request) for sensitive reports.
              </p>
              <p>
                For urgent issues that require immediate attention, please mark your email as "URGENT" in the subject line and include a brief summary of the severity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Scope</h2>
            <p className="text-lg text-gray-600 mb-6">
              This disclosure policy applies to the following Zimax Networks products and services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li><strong>zimax.net</strong> - Corporate website and infrastructure</li>
              <li><strong>secairadar.cloud</strong> - Public trust hub and dashboards</li>
              <li><strong>app.secairadar.cloud</strong> - Trust Registry application</li>
              <li><strong>ctxeco.com</strong> - Managed MCP gateway platform</li>
              <li><strong>api.ctxeco.com</strong> - Runtime API endpoints</li>
              <li><strong>openContextGraph</strong> - Open-source GitHub repository (report via GitHub Security Advisories or email)</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
              <p className="text-gray-700">
                <strong>Out of Scope:</strong> Social engineering attacks, physical security, denial of service (DoS) attacks that don't reveal a vulnerability, and issues in third-party services we integrate with (please report those directly to the third party).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safe Harbor */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Safe Harbor Statement</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <p className="text-lg text-gray-700 mb-4">
                We provide safe harbor for security researchers who:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Act in good faith and follow responsible disclosure practices</li>
                <li>Do not access or modify data that does not belong to them</li>
                <li>Do not disrupt our services or impact other users</li>
                <li>Do not violate any laws or breach any agreements</li>
                <li>Give us reasonable time to address the vulnerability before public disclosure</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We will not pursue legal action against researchers who comply with these guidelines. We appreciate your help in keeping our products and users safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Timelines */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Response Timelines</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Initial Response</h3>
                <p className="text-gray-600">
                  We aim to acknowledge receipt of your report within <strong>48 hours</strong> (business days). For urgent issues, we will respond within <strong>24 hours</strong>.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Status Updates</h3>
                <p className="text-gray-600">
                  We will provide regular status updates at least <strong>every 7 days</strong> until the vulnerability is resolved or determined to be out of scope.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Remediation</h3>
                <p className="text-gray-600">
                  Remediation timelines depend on severity:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-600">
                  <li><strong>Critical:</strong> Target resolution within 7 days</li>
                  <li><strong>High:</strong> Target resolution within 30 days</li>
                  <li><strong>Medium:</strong> Target resolution within 90 days</li>
                  <li><strong>Low:</strong> Addressed in next regular release cycle</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Public Disclosure</h3>
                <p className="text-gray-600">
                  We prefer to coordinate public disclosure with researchers. We will work with you to determine an appropriate disclosure timeline that allows for remediation while giving you credit for your work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Recognition</h2>
            <p className="text-lg text-gray-600 mb-6">
              With your permission, we would like to recognize security researchers who help improve our security posture. Recognition may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Listing your name (or handle) in our security acknowledgments page</li>
              <li>Mentioning your contribution in security advisories (if applicable)</li>
              <li>Providing a letter of recognition for your records</li>
            </ul>
            <p className="text-gray-600 mt-6">
              If you prefer to remain anonymous, we will respect that choice.
            </p>
          </div>
        </div>
      </section>

      {/* Bug Bounty */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bug Bounty Program</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are currently evaluating a formal bug bounty program. For now, we focus on recognition and coordination rather than monetary rewards.
            </p>
            <p className="text-gray-600">
              If you're interested in participating in a future bug bounty program, please let us know in your vulnerability report, and we'll keep you informed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
