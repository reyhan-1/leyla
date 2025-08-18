'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);
  }, [isOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '/egitim', label: 'EĞİTİM' },
    { href: '/seans', label: 'SEANSLAR' },
    { href: '/mentorluk', label: 'MENTÖRLÜK' },
    { href: '/hakkimizda', label: 'HAKKIMIZDA' },
    { href: '/medya', label: 'MEDYA'},
    { href: '/iletisim', label: 'İLETİŞİM' },
    { href: '/sanat', label: 'SANAT' },
  ];

  return (
    <>
      <nav className="w-full fixed top-0 z-50 bg-main-blue text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center font-quicksand font-light relative">
          
          {/* Logo */}
          <Link href="/" className="mb-3">
            <Image
              src="/logo.jpg"
              alt="Leyla Fidanay Logo"
              width={120}
              height={60}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6 text-sm tracking-wide">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`pb-[2px] transition-all duration-300 m-2 hover:text-light-blue p-4`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden absolute top-4 right-4"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-dark-gray bg-opacity-90 text-white md:hidden z-50"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="flex flex-col justify-center p-8 space-y-8 h-full relative z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="absolute top-4 right-4"
              >
                <XMarkIcon className="w-10 h-10 hover:text-light-blue transition-colors" />
              </button>

              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-lg text-center font-quicksand tracking-wide hover:text-light-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 md:inline-flex items-center justify-center rounded-full bg-transparent border border-gray text-dark-gray p-3 shadow-lg hover:bg-beige transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
