import Link from 'next/link';

export const metadata = {
  title: 'Legal | Zimax Networks LC',
  description: 'Legal information, terms of service, privacy policy, and acceptable use policy for Zimax Networks.',
};

export default function LegalPage() {
  const legalPages = [
    {
      href: '/legal/terms',
      title: 'Terms of Service',
      description: 'Terms and conditions governing the use of Zimax Networks products and services.',
    },
    {
      href: '/legal/privacy',
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your personal information.',
    },
    {
      href: '/legal/acceptable-use',
      title: 'Acceptable Use Policy',
      description: 'Guidelines for acceptable use of our products and services.',
    },
    {
      href: '/legal/open-source',
      title: 'Open Source',
      description: 'MIT license statement, attribution policy, and open-source information.',
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Legal
            </h1>
            <p className="text-xl text-gray-600">
              Legal information and policies for Zimax Networks products and services
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {legalPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="block p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{page.title}</h2>
                  <p className="text-gray-600 text-sm">{page.description}</p>
                  <span className="inline-flex items-center mt-4 text-primary text-sm font-medium">
                    Read more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
