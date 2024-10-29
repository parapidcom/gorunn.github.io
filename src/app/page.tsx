'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './fonts.css';
import GitHubStars from './components/GitHubStars';
import CookieModal from './components/CookieModal';

const GorunnPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle click outside
  React.useEffect(() => {
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
                Documentation
              </Link>
              <Link
                href="/donate"
                className="text-[#1a3a1a] hover:text-[#2d5a2d]"
              >
                Donate
              </Link>
              <a
                href="mailto:goran@parapid.com"
                className="text-[#1a3a1a] hover:text-[#2d5a2d]"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <GitHubStars />
            <Link
              href="/docs"
              className="text-[#1a3a1a] hover:text-[#2d5a2d]"
            >
              Documentation
            </Link>
            <Link
              href="/donate"
              className="text-[#1a3a1a] hover:text-[#2d5a2d]"
            >
              Donate
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            <span className="ethnocentric">GORUNN</span>
          </h1>
          <h1 className="text-2xl font-bold italic text-gray-800 sm:text-2xl">
            Local Develop Environment Manager
          </h1>
          <p className="mt-6 text-xl text-gray-500 flex items-center justify-center gap-2">
            set up and manage dockerized local environment with all your projects in single stack.
          </p>

          {/* Installation Command */}
          <div className="mt-8 inline-block">
            <div className="bg-gray-800 rounded-lg p-4">
              <code className="text-white font-mono text-sm sm:text-base">
                pip install gorunn
              </code>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Paste that in a macOS Terminal or Linux shell prompt.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#1a3a1a]">Supported Services</h3>
            <p className="mt-2 text-gray-600">
              <span className="ethnocentric font-bold">gorunn</span> supports MySQL, PostgreSQL, Opensearch, Chroma and Redis databases. From the language side, Python, PHP and NextJS (node) are supported.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#1a3a1a]">Collaboration</h3>
            <p className="mt-2 text-gray-600">
              <span className="ethnocentric font-bold">gorunn</span> provides easy way to implement it organisation-wide and share project stack and secrets with other team members.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#1a3a1a]">AI Powered</h3>
            <p className="mt-2 text-gray-600">
            <span className="ethnocentric font-bold">gorunn</span> brings AI coworking to the next level with <a href="https://aider.chat/" className="text-base text-gray-900 hover:text-blue-900">Aider</a> on OpenAI or Claude LLM.
            </p>
          </div>
        </div>

        {/* Documentation Preview */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900">Quick Start</h2>
          <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
            <h6 className="text-xl font-bold text-gray-900">1. Initialize <span className="ethnocentric">gorunn</span> cli and follow setup</h6>
            <div className="bg-black p-4 rounded overflow-x-auto">
              <pre className="text-sm font-mono text-green-400">
                $ gorunn init
              </pre>
            </div>
            <h6 className="text-xl font-bold text-gray-900">3. Parse projects</h6>
            <div className="bg-black p-4 rounded overflow-x-auto">
              <pre className="text-sm font-mono text-green-400">
                $ gorunn parse
              </pre>
            </div>
            <h6 className="text-xl font-bold text-gray-900">4. Build all projects</h6>
            <div className="bg-black p-4 rounded overflow-x-auto">
              <pre className="text-sm font-mono text-green-400">
                $ gorunn build --app all
              </pre>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-24">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Documentation</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Installation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Usage
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contribute</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <GitHubStars />

                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; {new Date().getFullYear()}{' '}
              <a href="https://github.com/donparapidos" className="hover:underline text-gray-900">
                Parapidcom by Donparapidos
              </a>{' '}
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GorunnPage;
