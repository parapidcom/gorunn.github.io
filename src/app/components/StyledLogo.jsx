import { useState, useEffect } from 'react';

const StyledLogo = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Load font using Web Font Loader
    const font = new FontFace(
      'Ethnocentric',
      "url('/fonts/ethnocentric-rg.otf')",
      { weight: 'normal', style: 'normal' }
    );

    font.load().then(() => {
      document.fonts.add(font);
      setFontsLoaded(true);
    });
  }, []);

  return (
    <span
      style={{
        fontFamily: fontsLoaded ? 'Ethnocentric, sans-serif' : 'sans-serif',
        fontWeight: 'bold',
        color: 'black',
        opacity: fontsLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
    >
      Gorunn
    </span>
  );
};

export default StyledLogo;
