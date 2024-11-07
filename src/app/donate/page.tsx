'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GitHubStars from '../components/GitHubStars';
import CookieModal from '../components/CookieModal';
import StyledLogo from '../components/StyledLogo';
import CopyButton from '../components/CopyButton';

const EtherAddress = "0x880C5a968C9f8F7F6993Fd8f298A69dC18297806"
const BitcoinAddress = "bc1q7jeec2wtj8vqajl0d3k3tuxqxhczpd0m0wq6tq"
const SolanaAddress = "6b7xQGtpsNVeSWe6sqt2fpyMTk2PRjqtWaAiDSHnaLhT"
const RippleAddress = "rM5TZbcQ1itN9yZM9cMVZbzNw3M2J21k2L"


const DonatePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSidebar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[#f5f7f5]">
      <CookieModal />
      {/* Header */}
      <header className="bg-white shadow-sm bg-[#f4feeb]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src="/images/gorunn_logo_nobg.png"
                alt="Gorunn Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </Link>
            <Link href="/">
            <StyledLogo />
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            className="block md:hidden z-50"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center">
              <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
              <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
              <span className="block w-6 h-1 bg-gray-800"></span>
            </div>
          </button>

          {/* Mobile Sidebar */}
          <div
            ref={sidebarRef}
            className={`
              fixed md:hidden right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
              ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            <div className="flex flex-col space-y-4 p-6 pt-20">
              <GitHubStars />
              <Link
                href="/docs"
                className="text-[#1a3a1a] hover:text-[#2d5a2d]"
              >
                Docs
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <GitHubStars />
            <Link
              href="/docs"
              className="text-[#1a3a1a] hover:text-[#2d5a2d]"
            >
              Docs
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <p className="mt-6 text-xl font-bold italic text-gray-900">
            Keep the code coming. Every donation feeds the dream!
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-[#1a3a1a]">Ethereum (ETH)</h2>
            <p className="text-xs text-gray-600 break-words">{EtherAddress}</p>
            <CopyButton text={EtherAddress} />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-[#1a3a1a]">Bitcoin (BTC)</h2>
            <p className="text-xs text-gray-600 break-words">{BitcoinAddress}</p>
            <CopyButton text={BitcoinAddress} />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-[#1a3a1a]">Solana (SOL)</h2>
            <p className="text-xs text-gray-600 break-words">{SolanaAddress}</p>
            <CopyButton text={SolanaAddress} />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-[#1a3a1a]">Ripple (XRP)</h2>
            <p className="text-xs text-gray-600 break-words">{RippleAddress}</p>
            <CopyButton text={RippleAddress} />
          </div>
      </div>

      </main>

      {/* Footer */}
      <footer className="bg-white mt-24">
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; {new Date().getFullYear()}{' '}
              <a href="https://github.com/donparapidos" className="hover:underline text-gray-900">
                Parapidcom by Donparapidos
              </a>{' '}
              All rights reserved.
            </p>
          </div>
      </footer>
    </div>
  );
};

export default DonatePage;
