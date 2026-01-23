import Link from 'next/link';

export const metadata = {
  title: 'Open Source | Zimax Networks LC',
  description: 'MIT license statement, attribution policy, and open-source information for Zimax Networks.',
};

export default function OpenSourcePage() {
  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Open Source</h1>
            <p className="text-gray-600">MIT License, Attribution, and Open Source Policy</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">MIT License Statement</h2>
                <p>
                  The <strong>openContextGraph</strong> project is released under the MIT License, making it freely available for use in both open-source and commercial projects.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">MIT License</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Copyright (c) 2026 Zimax Networks LC
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                  </p>
                  <p className="text-sm text-gray-600">
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                  </p>
                </div>
                <p className="mt-6">
                  The full license text and source code are available at:{' '}
                  <a href="https://github.com/derekbmoore/openContextGraph" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://github.com/derekbmoore/openContextGraph
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Attribution Policy</h2>
                <p>
                  While the MIT License does not require attribution, we appreciate when users acknowledge openContextGraph in their projects. Attribution helps others discover the project and contributes to the open-source ecosystem.
                </p>
                <p className="mt-4">
                  If you use openContextGraph in your project, consider including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>A mention in your README or documentation</li>
                  <li>Inclusion in your project's acknowledgments or credits</li>
                  <li>A link back to the GitHub repository</li>
                </ul>
                <p className="mt-4">
                  Attribution is optional but appreciated!
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Trademarks and Branding</h2>
                <p>
                  The names "Zimax Networks", "SecAI Radar", "ctxeco", and "openContextGraph" are trademarks of Zimax Networks LC. The MIT License does not grant permission to use these trademarks.
                </p>
                <p className="mt-4">
                  You may:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use openContextGraph code in your projects</li>
                  <li>Modify and distribute the code</li>
                  <li>Use it in commercial products</li>
                </ul>
                <p className="mt-4">
                  You may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use our trademarks to endorse or promote your products without permission</li>
                  <li>Claim that your product is "official" or "endorsed by Zimax Networks"</li>
                  <li>Use our logos or branding without explicit permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Commercial Services vs. Open Source</h2>
                <div className="bg-blue-50 border-l-4 border-primary p-6 rounded">
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>Commercial services are separate from the OSS license.</strong>
                  </p>
                  <p className="text-gray-700 mb-4">
                    The openContextGraph library is open-source and free to use. However, our commercial products built on top of it are separate:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>SecAI Radar:</strong> Commercial product with hosted services, enterprise features, and support</li>
                    <li><strong>ctxeco:</strong> Commercial managed MCP gateway platform with SLA and enterprise support</li>
                    <li><strong>openContextGraph:</strong> Free, open-source MIT-licensed library</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    You can use openContextGraph to build your own products, including commercial ones, without any obligation to use our commercial services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contributing</h2>
                <p>
                  We welcome contributions to openContextGraph! Please see the{' '}
                  <a href="https://github.com/derekbmoore/openContextGraph" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    GitHub repository
                  </a>{' '}
                  for contribution guidelines, code of conduct, and how to submit pull requests.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Dependencies</h2>
                <p>
                  openContextGraph may include third-party open-source dependencies. Each dependency maintains its own license, which we respect and comply with. See the repository for a complete list of dependencies and their licenses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions</h2>
                <p>
                  If you have questions about our open-source policy, licensing, or attribution, please contact us at{' '}
                  <a href="mailto:opensource@zimax.net" className="text-primary hover:underline">opensource@zimax.net</a> or through our{' '}
                  <Link href="/contact" className="text-primary hover:underline">contact form</Link>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
