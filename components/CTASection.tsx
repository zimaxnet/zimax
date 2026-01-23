import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  variant?: 'default' | 'dark';
}

export default function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'default',
}: CTASectionProps) {
  const bgClass = variant === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50';
  const textClass = variant === 'dark' ? 'text-white' : 'text-gray-900';

  return (
    <section className={`${bgClass} py-16`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl font-bold ${textClass} mb-4`}>{title}</h2>
          {description && (
            <p className={`text-lg ${variant === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryAction.href}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
            >
              {primaryAction.label}
            </Link>
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className={`inline-flex items-center justify-center px-6 py-3 border-2 ${
                  variant === 'dark'
                    ? 'border-white text-white hover:bg-white/10'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                } text-base font-medium rounded-md transition-colors`}
              >
                {secondaryAction.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
