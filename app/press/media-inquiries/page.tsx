import Link from 'next/link';

export const metadata = {
  title: 'Media Inquiries | Zimax Networks LC',
  description: 'Contact information for press and analyst inquiries.',
};

export default function MediaInquiriesPage() {
  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Media Inquiries
            </h1>
            <p className="text-xl text-gray-600">
              We're here to help with your story
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Press & Media</h3>
                  <p className="text-gray-600">
                    Email:{' '}
                    <a href="mailto:press@zimax.net" className="text-primary hover:underline">
                      press@zimax.net
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Analyst Inquiries</h3>
                  <p className="text-gray-600">
                    Email:{' '}
                    <a href="mailto:analysts@zimax.net" className="text-primary hover:underline">
                      analysts@zimax.net
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">General Inquiries</h3>
                  <p className="text-gray-600">
                    Use our{' '}
                    <Link href="/contact" className="text-primary hover:underline">
                      contact form
                    </Link>
                    {' '}or email{' '}
                    <a href="mailto:info@zimax.net" className="text-primary hover:underline">
                      info@zimax.net
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Can Help With</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Product information and demos</li>
                <li>Executive interviews and quotes</li>
                <li>Technical background and architecture details</li>
                <li>Market insights and industry trends</li>
                <li>Brand assets and screenshots</li>
                <li>Case studies and customer references (with permission)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Response Times</h2>
              <p className="text-gray-600 mb-4">
                We aim to respond to media inquiries within 24-48 hours. For urgent requests, please mark your email as "URGENT" in the subject line.
              </p>
              <p className="text-gray-600">
                For embargoed stories or exclusive interviews, please contact us at least one week in advance when possible.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview Requests</h3>
              <p className="text-gray-700">
                We're happy to arrange interviews with our leadership team. Please include in your inquiry:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3 ml-4">
                <li>Your publication and audience</li>
                <li>Topic and angle</li>
                <li>Preferred format (phone, video, email)</li>
                <li>Deadline</li>
                <li>Any specific questions or areas of focus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
