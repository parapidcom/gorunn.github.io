'use client';

import React, { useState, useEffect } from 'react';

const CookieModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowModal(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowModal(false);
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg text-center text-gray-800">
      <p>We use cookies to improve your experience on our site.</p>
      <button onClick={handleConsent} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Accept Cookies
      </button>
    </div>
  );
};

export default CookieModal;
