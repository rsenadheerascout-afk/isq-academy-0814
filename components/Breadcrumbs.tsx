'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathNames = pathname.split('/').filter((path) => path);

  return (
    <div className="max-w-7xl mx-auto">
    <nav aria-label="breadcrumb" className="py-4 px-4 md:px-6 bg-gray-50">
      <ol className="flex items-center space-x-2 text-sm text-gray-500 font-montserrat">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathNames.length - 1;
          
          const title = link
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

          return (
            <li key={index} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="text-gray-900 font-medium">{title}</span>
              ) : (
                <Link href={href} className="hover:text-primary transition-colors">
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
    </div>
  );
}