export const metadata = {
  title: 'Acceptable Use Policy | Zimax Networks LC',
  description: 'Guidelines for acceptable use of Zimax Networks products and services.',
};

export default function AcceptableUsePage() {
  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Acceptable Use Policy</h1>
            <p className="text-gray-600">Last updated: January 23, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p>
                  This Acceptable Use Policy ("AUP") outlines the rules and guidelines for using Zimax Networks LC ("Zimax", "we", "us", or "our") products and services. By using our services, you agree to comply with this AUP.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Prohibited Activities</h2>
                <p>You may not use our services to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Transmit, store, or process malicious code, viruses, or harmful software</li>
                  <li>Engage in any form of unauthorized access, hacking, or security testing without explicit permission</li>
                  <li>Interfere with or disrupt the integrity or performance of our services</li>
                  <li>Attempt to gain unauthorized access to any systems, accounts, or data</li>
                  <li>Use our services to spam, phish, or engage in fraudulent activities</li>
                  <li>Impersonate others or provide false information</li>
                  <li>Collect or harvest information about other users without consent</li>
                  <li>Use automated systems (bots, scrapers) to access our services without permission</li>
                  <li>Reverse engineer, decompile, or disassemble our proprietary software (except as permitted by open-source licenses)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. SecAI Radar Specific</h2>
                <p>When using SecAI Radar, you agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Submit false, misleading, or fraudulent evidence</li>
                  <li>Manipulate or attempt to game trust scores</li>
                  <li>Use scores as the sole basis for security decisions without proper risk assessment</li>
                  <li>Reproduce or redistribute scores for commercial purposes without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. ctxeco Specific</h2>
                <p>When using ctxeco, you agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Bypass or circumvent policy enforcement mechanisms</li>
                  <li>Use the service to process illegal or unauthorized content</li>
                  <li>Exceed rate limits or attempt to overload the system</li>
                  <li>Share API credentials or access tokens with unauthorized parties</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Content Standards</h2>
                <p>
                  Any content you submit, upload, or transmit through our services must:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Be accurate and truthful</li>
                  <li>Not infringe on intellectual property rights</li>
                  <li>Not contain defamatory, harassing, or offensive material</li>
                  <li>Comply with applicable data protection and privacy laws</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Security Research</h2>
                <p>
                  Security research and vulnerability testing are welcome, but must be conducted in accordance with our{' '}
                  <a href="/security/disclosure" className="text-primary hover:underline">Vulnerability Disclosure Policy</a>.
                  Unauthorized security testing may result in immediate termination of access.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Enforcement</h2>
                <p>
                  Violation of this AUP may result in:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Immediate suspension or termination of your account</li>
                  <li>Removal of content or data</li>
                  <li>Legal action if violations involve illegal activities</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to investigate any suspected violations and take appropriate action.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Reporting Violations</h2>
                <p>
                  If you become aware of any violation of this AUP, please report it to us at{' '}
                  <a href="mailto:abuse@zimax.net" className="text-primary hover:underline">abuse@zimax.net</a> or through our{' '}
                  <a href="/contact" className="text-primary hover:underline">contact form</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
                <p>
                  We may update this AUP from time to time. Continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact</h2>
                <p>
                  Questions about this AUP? Contact us at{' '}
                  <a href="mailto:legal@zimax.net" className="text-primary hover:underline">legal@zimax.net</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
