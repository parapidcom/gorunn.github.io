import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import './../fonts.css';
import GitHubStars from './../components/GitHubStars';
import CookieModal from './../components/CookieModal';



const DonatePage = () => {
  return (
    <div className="min-h-screen bg-[#f5f7f5]">
      <CookieModal />
      {/* Header */}
      <header className="bg-white shadow-sm bg-[#f4feeb]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/images/parapidcom_logo.png"
              alt="Parapidcom Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </Link>
          <Link href="/">
            <span className="ethnocentric-bold">Gorunn</span>
          </Link>
          <span className="text-xl font-bold text-[#1a3a1a]">
            <a href="mailto:goran@parapid.com" className="text-xl font-bold text-[#1a3a1a] hover:text-blue-900">
              by Parapidcom
             </a>
          </span>
        </div>
          <div className="flex space-x-6">
          <GitHubStars />
            <Link
              href="/docs"
              className="text-[#1a3a1a] hover:text-[#2d5a2d]"
            >
              Documentation
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
            <p className="text-xs text-gray-600 break-words">0x880C5a968C9f8F7F6993Fd8f298A69dC18297806</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-[#1a3a1a]">Bitcoin (BTC)</h2>
            <p className="text-xs text-gray-600 break-words">bc1q7jeec2wtj8vqajl0d3k3tuxqxhczpd0m0wq6tq</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-[#1a3a1a]">Solana (SOL)</h2>
            <p className="text-xs text-gray-600 break-words">6b7xQGtpsNVeSWe6sqt2fpyMTk2PRjqtWaAiDSHnaLhT</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-[#1a3a1a]">Ripple (XRP)</h2>
            <p className="text-xs text-gray-600 break-words">rM5TZbcQ1itN9yZM9cMVZbzNw3M2J21k2L</p>
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
