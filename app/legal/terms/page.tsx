export const metadata = {
  title: 'Terms of Service | Zimax Networks LC',
  description: 'Terms and conditions governing the use of Zimax Networks products and services.',
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: January 23, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using any Zimax Networks LC ("Zimax", "we", "us", or "our") products, services, or websites, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
                <p>
                  Zimax Networks provides:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>SecAI Radar:</strong> Security posture assessment and governance tools for MCP servers</li>
                  <li><strong>ctxeco:</strong> Managed MCP gateway and policy enforcement platform</li>
                  <li><strong>openContextGraph:</strong> Open-source Graph Knowledge primitives (MIT licensed)</li>
                  <li>Corporate website and related services at zimax.net</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Services</h2>
                <p>You agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use our services only for lawful purposes</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Account Registration</h2>
                <p>
                  Some services may require account registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                <p>
                  All content, features, and functionality of our services are owned by Zimax Networks or its licensors and are protected by copyright, trademark, and other intellectual property laws. The openContextGraph project is licensed under the MIT License (see our Open Source page for details).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimers</h2>
                <p>
                  <strong>SecAI Radar Trust Scores:</strong> Trust scores represent risk posture assessment, not a certification or guarantee of security. Scores are evidence-based indicators that should be used as part of a comprehensive security governance program.
                </p>
                <p className="mt-4">
                  Our services are provided "as is" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Zimax Networks shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
                <p>
                  We reserve the right to suspend or terminate your access to our services at any time, with or without cause or notice, for any reason including violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
                <p>
                  We may modify these Terms at any time. We will notify users of material changes via email or through our services. Continued use of our services after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Zimax Networks LC is organized, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact</h2>
                <p>
                  If you have questions about these Terms, please contact us at{' '}
                  <a href="mailto:legal@zimax.net" className="text-primary hover:underline">legal@zimax.net</a> or through our{' '}
                  <a href="/contact" className="text-primary hover:underline">contact form</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
