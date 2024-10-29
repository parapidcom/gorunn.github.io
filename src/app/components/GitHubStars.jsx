'use client';

import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const GitHubStars = () => {
  const [stars, setStars] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/parapidcom/gorunn-example-projects');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStars();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse flex items-center space-x-2">
        <div className="h-5 w-16 bg-gray-200 rounded"></div>
      </div>
    );
  }

  if (error) {
    return (
      <a
        href="https://github.com/parapidcom/gorunn-example-projects"
        className="text-base text-gray-900 hover:text-gray-500"
      >
        GitHub
      </a>
    );
  }

  return (
    <a
      href="https://github.com/parapidcom/gorunn-example-projects"
      className="flex items-center space-x-2 text-base text-gray-900 hover:text-gray-400 group"
    >
      <FaGithub className="w-4 h-4 text-gray-900" />
      <span>Code</span>
      <div className="flex items-center space-x-1 px-2 py-1 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
        <Star className="w-4 h-4" />
        <span className="text-sm font-medium">{stars}</span>
      </div>
    </a>
  );
};

export default GitHubStars;
