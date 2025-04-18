
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Coffee, Beer, ShoppingBag, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { title: 'Accueil', href: '/', icon: Home },
  { title: 'Restaurant', href: '/restaurant', icon: Coffee },
  { title: 'Bar', href: '/bar', icon: Beer },
  { title: 'Épicerie', href: '/epicerie', icon: ShoppingBag },
  { title: 'Localités', href: '/localites', icon: MapPin },
  { title: 'Contact', href: '/contact', icon: Phone },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="renaissance-container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/1e87f1be-8ed9-42a4-844d-d0991d75e48e.png" 
            alt="Le Renaissance Logo" 
            className="h-12 w-12"
          />
          <div className="font-playfair font-bold text-xl md:text-2xl text-renaissance-primary">
            Le Renaissance
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              to={item.href}
              className={cn(
                "font-medium transition-colors hover:text-renaissance-primary link-hover",
                location.pathname === item.href ? "text-renaissance-primary" : "text-renaissance-dark"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-renaissance-dark/95 z-40 flex flex-col pt-24 pb-8 px-6 md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-2 text-xl font-medium transition-colors",
                location.pathname === item.href ? "text-renaissance-secondary" : "text-white"
              )}
            >
              <item.icon size={20} />
              {item.title}
            </Link>
          ))}
        </nav>
        
        <div className="mt-auto text-center text-white text-sm">
          <p className="font-playfair text-lg mb-2">Le Renaissance</p>
          <p>Bar - Restaurant - Épicerie</p>
          <p>42114 Machézal</p>
          <p className="mt-2">04 77 62 60 98</p>
        </div>
      </div>
    </header>
  );
}
