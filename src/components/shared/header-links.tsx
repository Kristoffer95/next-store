'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function HeaderLinks({ link }: { link: { name: string; href: string } }) {
  const pathname = usePathname();

  const active = pathname.replace('/', '') === link.name.toLowerCase();

  return (
    <Link
      className={`uppercase tracking-wide font-normal
        transition-all duration-200
        ${active ? 'text-black' : 'text-black/50'}
      `}
      href={link.href}>
      {link.name}
    </Link>
  );
}

export default HeaderLinks;
