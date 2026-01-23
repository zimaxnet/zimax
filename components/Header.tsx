import Link from 'next/link';

export default function Header() {
  const navItems = [
    { href: '/products', label: 'Products' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/resources', label: 'Resources' },
    { href: '/security', label: 'Security' },
    { href: '/company', label: 'Company' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/brand/logos/zimax-logo-simple.svg" 
              alt="Zimax Networks" 
              className="h-8 w-8"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-tight">Zimax</span>
              <span className="text-xs text-gray-600 leading-tight">Networks</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-primary"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
