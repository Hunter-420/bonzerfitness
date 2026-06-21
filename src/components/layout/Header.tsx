"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Facilities", href: "/facilities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Membership", href: "/membership" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-brand-charcoal/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/506353114_10061237303957034_1546917943265785298_n.jpg?stp=dst-jpg_tt6&cstp=mx800x566&ctp=s800x566&_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=5XBE_2wlGxMQ7kNvwGv7SVg&_nc_oc=Adq3B4k9frsmOWTTR94VgG5fn9PBJMDsUuUWyyXWscb3kUqg3gyBp_WMgDdyXP1jI9teNuIPxxwFJpj2_FmY94NY&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=Ue_-tCoGwYbrWar0HS63Og&_nc_ss=7b2a8&oh=00_Af_abgXYn8Ve3mLtm3kvIFjPzs5Cyq4E3Kqs2pCnms6ydQ&oe=6A3E21D8"
                alt="Bonzer Fitness & Health Club Logo"
                referrerPolicy="no-referrer"
                className="h-12 w-auto object-contain bg-white rounded-xl p-1 shadow-sm"
              />
              <span className="text-xl font-black text-brand-charcoal dark:text-white hidden sm:block">
                BONZER <span className="text-brand-teal">FITNESS</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center lg:pr-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-brand-teal dark:hover:text-brand-teal font-medium transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
            <Button href="/membership" size="sm" className="ml-2">
              Join Now
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-brand-teal focus:outline-none p-2"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-brand-charcoal border-b border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-brand-teal hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-4">
              <Button href="/membership" className="w-full">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
