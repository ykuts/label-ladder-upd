import { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Image from 'next/image';

const HeroSection = () => {
  const parallaxRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Параллакс-эффект - смещение фона при прокрутке
  const parallaxOffset = scrollPosition * 0.4; // Регулируйте скорость эффекта здесь

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 md:py-32 text-white overflow-hidden">
      {/* Background Image with Overlay and Parallax */}
      <div 
        ref={parallaxRef} 
        className="absolute inset-0 z-0"
        style={{ 
          transform: `translateY(${parallaxOffset}px)`,
          height: `calc(100% + ${parallaxOffset}px)`,
          top: `-${parallaxOffset}px`
        }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-80"></div> {/* Overlay - можно регулировать прозрачность */}
        <Image 
          src="/images/hero/hero.png" 
          alt="Background" 
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <Container>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-6">
            <div className="relative h-56 w-56 mx-auto">
              <Image 
                src="/images/logo-white.png" 
                alt="Label Ladder Logo" 
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Brand Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wide">
            LABEL LADDER
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-10 text-white">
            Labelling data. Powering intelligence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/services" variant="secondary" size="lg" className="w-48 sm:w-auto">
              Our Services
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="text-white border-white hover:bg-white/10 w-48 sm:w-auto">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;