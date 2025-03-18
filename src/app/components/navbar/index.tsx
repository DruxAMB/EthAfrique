"use client";

import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "../../../../public/images/logo.png";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Ticket } from 'lucide-react';
import { cn } from '../../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Array of navigation links
  const navLinks = [
    { href: '/a-propos', label: 'À Propos' },
    { href: '/programme', label: 'Programme' },
    { href: '/partenaires', label: 'Partenaires' },
    { href: '/inscriptions-et-billetterie', label: 'Inscriptions et Billetterie' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full md:w-[80%] md:left-1/2 md:-translate-x-1/2 z-50 transition-all duration-300',
        'bg-[#0D3DA3] backdrop-blur-sm md:rounded-lg md:my-10 p-2',
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4',
        hasScrolled ? 'shadow-lg' : ''
      )}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link
              href="/"
              className={cn(
                'text-white font-semibold text-xl',
                'transition-all duration-300 hover:text-blue-300'
              )}
            >
              <Image src={Logo} alt="EthAfrique" width={100} height={100} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-white font-extralight transition-all duration-300',
                      'hover:font-bold hover:scale-105',
                      'relative after:absolute after:bottom-0 after:left-0',
                      'after:h-0.5 after:w-0 after:bg-blue-300',
                      'after:transition-all after:duration-300',
                      'hover:after:w-full'
                    )}
                  >
                    {link.label}
                  </Link>
            ))}
          </div>

          {/* Desktop Reserve Button */}
          <div className="hidden md:block">
            <Button
              className={cn(
                'bg-[#2BF7D5] text-black px-4 py-2 rounded',
                'hover:bg-teal-600 transition-all duration-300 flex items-center'
              )}
            >
              Réserver mon billet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn('text-gray-300 hover:text-white', 'transition-colors duration-300')}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden bg-blue-900',
          'transition-all duration-300 ease-in-out',
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none h-2'
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-gray-300 hover:text-white block px-3 py-2',
                'transition-all duration-300',
                'hover:bg-blue-700/10 rounded-md'
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="space-y-2 pt-4">
            <Button
              className={cn(
                'w-full bg-[#2BF7D5] text-black',
                'hover:bg-teal-600 transition-all duration-300 flex items-center justify-center'
              )}
              onClick={() => setIsOpen(false)}
            >
              Réserver mon billet
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;