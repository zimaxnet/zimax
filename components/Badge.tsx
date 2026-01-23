interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-primary/10 text-primary',
    success: 'bg-green-100 text-green-800',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
