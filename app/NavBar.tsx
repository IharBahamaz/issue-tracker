import Link from 'next/link';
import React from 'react';
import { LiaBugSolid } from 'react-icons/lia';

const NavBar = () => {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'issues', href: '/issues' },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <LiaBugSolid />
      </Link>

      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
