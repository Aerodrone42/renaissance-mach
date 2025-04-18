
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [backgroundImage, setBackgroundImage] = useState('/lovable-uploads/fb1374ad-4300-482f-b0df-4dfb8e0b4e73.png');

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      console.log('Image loaded successfully');
    };
    img.onerror = (error) => {
      console.error('Image failed to load:', error);
    };
    img.src = backgroundImage;
  }, [backgroundImage]);

  const scrollToSection = () => {
    const section = document.getElementById('about-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-renaissance-dark/70"></div>
      </div>

      {/* Content */}
      <div className="renaissance-container relative z-10 text-center">
        <img 
          src="/lovable-uploads/1e87f1be-8ed9-42a4-844d-d0991d75e48e.png" 
          alt="Logo Le Renaissance" 
          className="mx-auto h-28 w-28 mb-4 animate-fade-in"
        />
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-in">
          Le Renaissance
        </h1>
        <p className="text-xl md:text-2xl text-renaissance-secondary font-playfair italic mb-8 animate-slide-in" style={{ animationDelay: "0.2s" }}>
          Bar · Restaurant · Épicerie
        </p>
        <p className="max-w-2xl mx-auto text-white text-lg mb-8 animate-slide-in" style={{ animationDelay: "0.4s" }}>
          Une halte gourmande au cœur de Machézal, où convivialité et saveurs locales se rencontrent
        </p>
        
        <Button 
          className="bg-renaissance-primary hover:bg-renaissance-accent text-white animate-slide-in"
          style={{ animationDelay: "0.6s" }}
          onClick={scrollToSection}
        >
          Découvrir <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
