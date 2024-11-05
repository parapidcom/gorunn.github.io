import React from 'react';
import Image from 'next/image';

const TechLogoSlider = () => {
  const logos = [
    { src: '/images/docker.svg', alt: 'Docker' },
    { src: '/images/nginx.svg', alt: 'Nginx' },
    { src: '/images/mysql.svg', alt: 'MySQL' },
    { src: '/images/postgresql.svg', alt: 'PostgreSQL' },
    { src: '/images/redis.svg', alt: 'Redis' },
    { src: '/images/opensearch.svg', alt: 'Opensearch' },
    { src: '/images/chroma.svg', alt: 'Chroma' },
    { src: '/images/openai.svg', alt: 'OpenAI' },
    { src: '/images/claude.svg', alt: 'Claude' },
  ];

  const LogoSection = ({ keyPrefix = '' }) => (
    <div className="flex items-center justify-around min-w-max gap-24 px-8">
      {logos.map((logo, index) => (
        <div
          key={`${keyPrefix}${index}`}
          className="w-32 h-32 flex items-center justify-center bg-white rounded-lg"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={80}
            height={80}
            className="w-20 h-20 object-contain"
            priority={index < 3}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left">
            <LogoSection />
            <LogoSection keyPrefix="duplicate-" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechLogoSlider;
