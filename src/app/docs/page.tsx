'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Terminal, Database, Settings, Package, BookOpen, Zap, Shield, Code } from 'lucide-react';
import '../fonts.css';
import { useSearchParams } from 'next/navigation';

const DocPage = () => {
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState('introduction');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      setActiveSection(section);
      // Scroll to the section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

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

  const sidebarSections = [
    { id: 'introduction', title: 'Introduction', icon: BookOpen },
    { id: 'requirements', title: 'Requirements', icon: Package },
    { id: 'installation', title: 'Installation', icon: Terminal },
    { id: 'quickstart', title: 'Quick Start', icon: Zap },
    { id: 'configuration', title: 'Configuration', icon: Settings },
    { id: 'project-manifests', title: 'Project Manifests', icon: Code },
    { id: 'environment', title: 'Environment', icon: Shield },
    { id: 'databases', title: 'Databases', icon: Database },
    { id: 'commands', title: 'Commands', icon: Terminal },
    { id: 'aider', title: 'Aider AI Assistant', icon: Zap },
    { id: 'practices', title: 'Best Practices', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7f5]">
      {/* Make header fixed and adjust z-index */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm bg-[#f4feeb] z-50">
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
              <span className="ethnocentric-bold">Gorunn</span>
            </Link>
          </div>

          <button
            ref={buttonRef}
            className="block lg:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center">
              <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
              <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
              <span className="block w-6 h-1 bg-gray-800"></span>
            </div>
          </button>
        </nav>
      </header>

      {/* Add padding-top to account for fixed header */}
      <div className="pt-16">
        {/* Documentation Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Sidebar */}
            <div
              ref={sidebarRef}
              className={`
                fixed lg:hidden right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
                ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
              `}
            >
              <div className="flex flex-col p-6 pt-20">
                <nav>
                  <ul className="space-y-2">
                    {sidebarSections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => {
                            setActiveSection(section.id);
                            setIsSidebarOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                            activeSection === section.id
                              ? 'bg-[#1a3a1a] text-white'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <section.icon className="w-4 h-4" />
                          {section.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block lg:w-64 flex-shrink-0">
              <nav className="sticky top-24">
                <ul className="space-y-2">
                  {sidebarSections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                          activeSection === section.id
                            ? 'bg-[#1a3a1a] text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <section.icon className="w-4 h-4" />
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Main Content - adjust padding and width */}
            <div className="flex-1 min-w-0 max-w-full lg:max-w-[calc(100%-16rem)]">
              {/* Adjust section spacing */}
              {sidebarSections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`
                    ${activeSection === section.id ? 'block' : 'hidden'}
                    space-y-4
                  `}
                >
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  {/* Adjust content containers */}
                  <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6">
                    {/* Introduction Section */}
                    {section.id === 'introduction' && (
                      <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-xl font-semibold text-[#1a3a1a] mb-4">Introduction</h3>
                        <div className="bg-white rounded-lg shadow-sm p-6">
                          <p className="text-gray-600 mb-4">
                            <span className="ethnocentric font-bold">Gorunn</span> is a powerful CLI tool designed for managing local development environments with Docker. It streamlines the process of managing multiple projects, handling environment configurations, and orchestrating various services.
                          </p>

                          <div className="mt-6 mb-8">
                            <h3 className="text-xl font-semibold text-[#1a3a1a] mb-4">Automatic Domain Management</h3>
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                              <p className="text-gray-600">
                                All projects with defined endpoints automatically get a dedicated host on <code className="bg-gray-100 px-2 py-1 rounded">*.local.gorunn.io</code> domain.
                                No <code className="bg-gray-100 px-2 py-1 rounded">/etc/hosts</code> modification is needed as the domain and all its subdomains point to <code className="bg-gray-100 px-2 py-1 rounded">127.0.0.1</code>.
                              </p>
                              <div className="mt-3">
                                <p className="text-gray-600">Example endpoints:</p>
                                <ul className="mt-2 space-y-1 text-gray-600">
                                  <li><code className="bg-gray-100 px-2 py-1 rounded">myapp.local.gorunn.io</code></li>
                                  <li><code className="bg-gray-100 px-2 py-1 rounded">api.local.gorunn.io</code></li>
                                  <li><code className="bg-gray-100 px-2 py-1 rounded">admin.local.gorunn.io</code></li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6">
                            <h3 className="text-xl font-semibold text-[#1a3a1a] mb-4">Key Features</h3>
                            <ul className="space-y-4">
                              <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-semibold text-gray-900">Multiple Services Support:</span>
                                  <p className="text-gray-600">Integrated support for MySQL, PostgreSQL, Redis, Chroma, and OpenSearch databases.</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-semibold text-gray-900">Language Support:</span>
                                  <p className="text-gray-600">Built-in support for Python, Node.js/Next.js, and PHP projects.</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-semibold text-gray-900">AI Integration:</span>
                                  <p className="text-gray-600">Built-in support for Aider AI assistant powered by OpenAI or Claude.</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-semibold text-gray-900">Automatic Domain Management:</span>
                                  <p className="text-gray-600">Zero-configuration local domains with SSL support for all your projects.</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Requirements Section */}
                    {section.id === 'requirements' && (
                      <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-xl font-semibold text-[#1a3a1a] mb-4">Requirements</h3>
                        <div className="bg-white rounded-lg shadow-sm p-6">
                          <h3 className="text-xl font-semibold text-[#1a3a1a] mb-4">Minimum Requirements</h3>
                          <ul className="space-y-4">
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1 flex-shrink-0" />
                              <div>
                                <span className="font-semibold text-gray-900">Python 3.9+</span>
                                <p className="text-gray-600">Required for running the CLI tool and Python projects</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1 flex-shrink-0" />
                              <div>
                                <span className="font-semibold text-gray-900">Docker and Docker Compose</span>
                                <p className="text-gray-600">For container management and service orchestration</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1 flex-shrink-0" />
                              <div>
                                <span className="font-semibold text-gray-900">MacOS</span>
                                <p className="text-gray-600">Currently the only supported operating system</p>
                              </div>
                            </li>
                          </ul>

                          <h3 className="text-xl font-semibold text-[#1a3a1a] mt-8 mb-4">Supported Technologies</h3>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-gray-600 mb-2">Programming Languages</h4>
                              <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center">
                                  <ChevronRight className="w-4 h-4 text-[#1a3a1a] mr-2" />
                                  Python
                                </li>
                                <li className="flex items-center">
                                  <ChevronRight className="w-4 h-4 text-[#1a3a1a] mr-2" />
                                  Node.js / Next.js
                                </li>
                                <li className="flex items-center">
                                  <ChevronRight className="w-4 h-4 text-[#1a3a1a] mr-2" />
                                  PHP
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-600 mb-2">Databases</h4>
                              <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center">
                                  <ChevronRight className="w-4 h-4 text-[#1a3a1a] mr-2" />
                                  MySQL
                                </li>
                                <li className="flex items-center">
                                  <ChevronRight className="w-4 h-4 text-[#1a3a1a] mr-2" />
                                  PostgreSQL
                                </li>
                                <li className="flex items-center">
                                  <ChevronRight className="w-4 h-4 text-[#1a3a1a] mr-2" />
                                  Redis
                                </li>
                                <li className="flex items-center">
                                  <ChevronRight className="w-4 h-4 text-[#1a3a1a] mr-2" />
                                  Chroma
                                </li>
                                <li className="flex items-center">
                                  <ChevronRight className="w-4 h-4 text-[#1a3a1a] mr-2" />
                                  OpenSearch
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Installation Section */}
                    {section.id === 'installation' && (
                      <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-xl font-semibold text-[#1a3a1a] mb-4">Installation</h3>
                        <div className="space-y-6">
                          <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-xl font-semibold text-[#1a3a1a] mb-4">Install via pip</h3>
                            <div className="bg-gray-800 rounded-lg p-4">
                              <code className="text-white font-mono">pip install gorunn</code>
                            </div>
                            <div className="mt-6">
                              <p className="text-gray-600">After installation, you can verify the installation by checking the version:</p>
                              <div className="bg-gray-800 rounded-lg p-4 mt-2">
                                <code className="text-white font-mono">gorunn version</code>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Quick Start Section */}
                    {section.id === 'quickstart' && (
                      <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-xl font-semibold text-[#1a3a1a] mb-4">Quick Start</h3>
                        <div className="space-y-6">
                          <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-xl font-semibold text-[#1a3a1a] mb-4">1. Initialize the Stack</h3>
                            <div className="bg-gray-800 rounded-lg p-4 mb-4">
                              <code className="text-white font-mono">gorunn init</code>
                            </div>
                            <div className="mt-4 space-y-2">
                              <p className="text-gray-600">Configuration prompts:</p>
                              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                                <li>Stack name (default: gorunn)</li>
                                <li>Projects repository URL (optional)</li>
                                <li>Projects local path</li>
                                <li>Workspace path</li>
                                <li>Docker network subnet</li>
                                <li>Database selection</li>
                                <li>Encryption key</li>
                                <li>Aider AI assistant setup</li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-xl font-semibold text-[#1a3a1a] mb-4">2. Import Example Stack (Optional)</h3>
                            <div className="bg-gray-800 rounded-lg p-4">
                              <code className="text-white font-mono">gorunn init --import https://github.com/parapidcom/gorunn-project-manifests.git</code>
                            </div>
                            <p className="text-gray-600 mt-2">Example stack includes React, Laravel, and Django projects</p>
                          </div>

                          <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-xl font-semibold text-[#1a3a1a] mb-4">3. Parse and Build</h3>
                            <div className="space-y-4">
                              <div>
                                <p className="text-gray-600 mb-2">Parse project manifests:</p>
                                <div className="bg-gray-800 rounded-lg p-4">
                                  <code className="text-white font-mono">gorunn parse</code>
                                </div>
                              </div>
                              <div>
                                <p className="text-gray-600 mb-2">Build all projects:</p>
                                <div className="bg-gray-800 rounded-lg p-4">
                                  <code className="text-white font-mono">gorunn build --app all</code>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Configuration Section */}
                    {section.id === 'configuration' && (
                      <div className="bg-white rounded-lg shadow-sm p-6">
                        <p className="text-gray-600 mb-4">Location: <code className="bg-gray-100 px-2 py-1 rounded">$HOME/.config/gorunn/config.yaml</code></p>
                        <div className="bg-gray-800 rounded-lg p-4">
                          <pre className="text-white font-mono text-sm">
{`aider:
  api_key: your_llm_api_key
  enabled: true|false
  llm: OpenAI|Claude
databases:
  chroma: true|false
  mysql: true|false
  opensearch: true|false
  postgresql: true|false
  redis: true|false
docker_compose_subnet: 10.10.0.0/16
encryption_key: [generated key]
projects:
  path: /path/to/projects/manifests
  repo_url: git@github.com:org/manifests.git
stack_name: gorunn
workspace_path: /path/to/workspace`}
                          </pre>
                        </div>
                      </div>
                    )}

                    {/* Project Manifests Section */}
                    {section.id === 'project-manifests' && (
                      <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-xl font-semibold text-[#1a3a1a] mb-4">Overview</h3>
                        <p className="text-gray-600 mb-6">
                          Project manifests are YAML files that define your development stack configuration. They can be used either locally
                          or shared via a Git repository for team collaboration.
                        </p>

                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Usage Scenarios</h4>
                            <ul className="space-y-4">
                              <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-semibold text-gray-900">Individual Development</span>
                                  <p className="text-gray-600">
                                    Store manifests locally in <code className="bg-gray-100 px-2 py-1 rounded">$HOME/gorunn/projects/</code> for personal use.
                                    Perfect for managing multiple projects on your machine.
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-semibold text-gray-900">Team Collaboration</span>
                                  <p className="text-gray-600">
                                    Store manifests in a Git repository to share configurations across the team. New developers can quickly set up
                                    the entire development environment with a single command:
                                  </p>
                                  <div className="bg-gray-800 rounded-lg p-4 mt-2">
                                    <code className="text-white font-mono">gorunn init --import git@github.com:yourorg/manifests.git</code>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Manifest Structure</h4>
                            <div className="bg-gray-800 rounded-lg p-4">
                              <pre className="text-white font-mono text-sm">
{`name: myapp
git_repo: git@github.com:org/project.git
type: node                 # node, php, or python
version: "20"
endpoint: myapp.local.gorunn.io
env_vars: true
start_command: npm run dev
listen_port: 3000
build_commands:
  - npm install
  - npm run build
database:
  migrations: true        # Run migrations during build
  seeds: true            # Run seeders during build
custom_commands:          # Define project-specific commands
  - name: "reset-db"
    command: "php artisan migrate:fresh --seed"`}
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Environment Section */}
                    {section.id === 'environment' && (
                      <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-xl font-semibold text-[#1a3a1a] mb-4">Environment Management</h3>
                        <p className="text-gray-600 mb-6">
                          Gorunn provides a secure way to share environment files across your team by encrypting them before committing to version control.
                          This allows teams to maintain a single source of truth for environment configurations while keeping sensitive data protected.
                        </p>

                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Environment Files Structure</h4>
                            <div className="bg-gray-800 rounded-lg p-4">
                              <pre className="text-white font-mono text-sm">
{`$HOME/gorunn/
├── projects/
    ├── myapp.yaml           # Project manifest
    ├── env/
        ├── myapp.env        # Environment file (decrypted)
        ├── myapp.env.enc    # Encrypted version for git`}</pre>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Team Workflow</h4>
                            <ul className="space-y-4">
                              <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-semibold text-gray-900">Initial Setup</span>
                                  <p className="text-gray-600">
                                    During <code className="bg-gray-100 px-2 py-1 rounded">gorunn init</code>, an encryption key is generated.
                                    Share this key securely with your team members.
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-semibold text-gray-900">Encrypting Changes</span>
                                  <p className="text-gray-600">
                                    After modifying environment files, encrypt them before committing:
                                  </p>
                                  <div className="bg-gray-800 rounded-lg p-4 mt-2">
                                    <code className="text-white font-mono">gorunn projects env --encrypt --app myapp</code>
                                  </div>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-semibold text-gray-900">Sharing Updates</span>
                                  <p className="text-gray-600">
                                    Commit and push the encrypted .env.enc files to your repository. Team members can then pull and decrypt:
                                  </p>
                                  <div className="bg-gray-800 rounded-lg p-4 mt-2">
                                    <code className="text-white font-mono">gorunn projects env --decrypt --app myapp</code>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Benefits</h4>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-semibold text-gray-900">Single Source of Truth</span>
                                  <p className="text-gray-600">All team members work with the same environment configurations</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-semibold text-gray-900">Security</span>
                                  <p className="text-gray-600">Sensitive data remains encrypted in version control</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1 flex-shrink-0" />
                                <div>
                                  <span className="font-semibold text-gray-900">Easy Onboarding</span>
                                  <p className="text-gray-600">New team members get access to all necessary configurations securely</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Commands Section */}
                    {section.id === 'commands' && (
                      <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-xl font-semibold text-[#1a3a1a] mb-4">Commands Reference</h3>
                        <div className="space-y-6">
                          <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-xl font-semibold text-[#1a3a1a] mb-4">Container Management</h3>
                            <div className="space-y-4">
                              <div>
                                <p className="text-gray-600 mb-2">Start containers:</p>
                                <div className="bg-gray-800 rounded-lg p-4">
                                  <code className="text-white font-mono">gorunn start [--app APP_NAME]</code>
                                </div>
                              </div>
                              <div>
                                <p className="text-gray-600 mb-2">Stop containers:</p>
                                <div className="bg-gray-800 rounded-lg p-4">
                                  <code className="text-white font-mono">gorunn stop [--app APP_NAME]</code>
                                </div>
                              </div>
                              <div>
                                <p className="text-gray-600 mb-2">Restart containers:</p>
                                <div className="bg-gray-800 rounded-lg p-4">
                                  <code className="text-white font-mono">gorunn restart [--app APP_NAME]</code>
                                </div>
                              </div>
                              <div>
                                <p className="text-gray-600 mb-2">Destroy stack:</p>
                                <div className="bg-gray-800 rounded-lg p-4">
                                  <code className="text-white font-mono">gorunn destroy [--wipedb]</code>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div>
                                <p className="text-gray-600 mb-2">Access terminal:</p>
                                <div className="bg-gray-800 rounded-lg p-4">
                                  <code className="text-white font-mono">gorunn terminal --app APP_NAME</code>
                                </div>
                              </div>
                              <div>
                                <p className="text-gray-600 mb-2">Stream logs:</p>
                                <div className="bg-gray-800 rounded-lg p-4">
                                  <code className="text-white font-mono">gorunn logs [--app APP_NAME] [--follow]</code>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div>
                                <p className="text-gray-600 mb-2">Pull latest manifests:</p>
                                <div className="bg-gray-800 rounded-lg p-4">
                                  <code className="text-white font-mono">gorunn projects pull</code>
                                </div>
                              </div>
                              <div>
                                <p className="text-gray-600 mb-2">Push changes:</p>
                                <div className="bg-gray-800 rounded-lg p-4">
                                  <code className="text-white font-mono">gorunn projects publish</code>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div>
                                <p className="text-gray-600 mb-2">Print stack information:</p>
                                <div className="bg-gray-800 rounded-lg p-4">
                                  <code className="text-white font-mono">gorunn info</code>
                                </div>
                              </div>
                              <div>
                                <p className="text-gray-600 mb-2">Check installed version:</p>
                                <div className="bg-gray-800 rounded-lg p-4">
                                  <code className="text-white font-mono">gorunn version</code>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div>
                                <p className="text-gray-600 mb-4">
                                  On MacOS, you can add Gorunn's self-signed certificate for *.local.gorunn.io domain to keychain.
                                  This is done automatically during <code className="bg-gray-100 px-2 py-1 rounded">gorunn init</code>.
                                </p>
                                <div className="bg-gray-800 rounded-lg p-4">
                                  <code className="text-white font-mono">gorunn trust</code>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Best Practices Section */}
                    {section.id === 'practices' && (
                      <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-xl font-semibold text-[#1a3a1a] mb-4">Best Practices</h3>
                        <div className="space-y-6">
                          <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-xl font-semibold text-[#1a3a1a] mb-4">Project Management</h3>
                            <ul className="space-y-4">
                              <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1" />
                                <div>
                                  <span className="font-semibold text-gray-900">Version Control</span>
                                  <p className="text-gray-600">Keep manifests in version control and use consistent naming conventions</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1" />
                                <div>
                                  <span className="font-semibold text-gray-900">Environment Variables</span>
                                  <p className="text-gray-600">Always encrypt sensitive data and maintain separate env files per environment</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1" />
                                <div>
                                  <span className="font-semibold text-gray-900">Resource Management</span>
                                  <p className="text-gray-600">Stop unused services and perform regular cleanup using gorunn destroy</p>
                                </div>
                              </li>
                            </ul>

                            <h3 className="text-xl font-semibold text-[#1a3a1a] mt-8 mb-4">Security</h3>
                            <ul className="space-y-4">
                              <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1" />
                                <div>
                                  <span className="font-semibold text-gray-900">Encryption Keys</span>
                                  <p className="text-gray-600">Keep secure backups of encryption keys and rotate them periodically</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-[#1a3a1a] mt-1" />
                                <div>
                                  <span className="font-semibold text-gray-900">Access Control</span>
                                  <p className="text-gray-600">Implement proper access controls for shared repositories and environment variables</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Databases Section */}
                    {section.id === 'databases' && (
                      <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-xl font-semibold text-[#1a3a1a] mb-4">Supported Databases</h3>
                        <p className="text-gray-600 mb-6">
                          Gorunn provides integrated support for multiple database systems. Each database is automatically configured with port forwarding
                          and environment variables for both local access and container access.
                        </p>

                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Available Databases</h4>
                            <div className="overflow-x-auto">
                              <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Database</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Port Forward</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Environment Variables</th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                  <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">MySQL 8</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">13306</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">MYSQL_HOST, DB_USERNAME, DB_PASSWORD</td>
                                  </tr>
                                  <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">PostgreSQL</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">15432</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">POSTGRESQL_HOST, DB_USERNAME, DB_PASSWORD</td>
                                  </tr>
                                  <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Redis</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">16379</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">REDIS_HOST</td>
                                  </tr>
                                  <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Chroma</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">18000</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">CHROMA_HOST</td>
                                  </tr>
                                  <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">OpenSearch</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">19200</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">OPENSEARCH_HOST</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Container Access</h4>
                            <p className="text-gray-600 mb-4">
                              Each database's host is automatically added to your project's environment file. Services within the stack can access
                              the databases using these environment variables. The database credentials are also automatically configured.
                            </p>
                            <div className="bg-gray-50 rounded-lg p-4">
                              <ul className="space-y-2 text-gray-600">
                                <li>• Database hosts are accessible from within containers</li>
                                <li>• Credentials are automatically added to project env files</li>
                                <li>• Port forwarding allows access from your local machine</li>
                                <li>• No manual configuration needed</li>
                              </ul>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Configuration</h4>
                            <p className="text-gray-600 mb-4">
                              Enable or disable database services in your main configuration file:
                            </p>
                            <div className="bg-gray-800 rounded-lg p-4">
                              <pre className="text-white font-mono text-sm">
{`databases:
  mysql: true
  postgresql: true
  redis: true
  chroma: true
  opensearch: true`}
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-8 lg:mt-24">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
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

export default DocPage;
