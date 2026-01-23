import Link from 'next/link';

interface ProductCardProps {
  title: string;
  description: string;
  learnMoreHref: string;
  goToProductHref: string;
  goToProductLabel?: string;
  external?: boolean;
}

export default function ProductCard({
  title,
  description,
  learnMoreHref,
  goToProductHref,
  goToProductLabel,
  external = false,
}: ProductCardProps) {
  const LinkComponent = external ? 'a' : Link;
  const linkProps = external
    ? { href: goToProductHref, target: '_blank', rel: 'noopener noreferrer' }
    : { href: goToProductHref };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href={learnMoreHref}
          className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
        >
          Learn more →
        </Link>
        <LinkComponent
          {...linkProps}
          className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
        >
          {goToProductLabel || 'Go to product'} →
        </LinkComponent>
      </div>
    </div>
  );
}
