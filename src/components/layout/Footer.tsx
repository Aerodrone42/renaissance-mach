import { Link } from 'react-router-dom';
import { Phone, Clock, MapPin, Mail, Facebook, Instagram } from 'lucide-react';
import OpeningHours from '../common/OpeningHours';

export default function Footer() {
  return (
    <footer className="bg-renaissance-dark text-white pt-12 pb-6">
      <div className="renaissance-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/1e87f1be-8ed9-42a4-844d-d0991d75e48e.png" 
                alt="Le Renaissance Logo" 
                className="h-14 w-14"
              />
              <h3 className="font-playfair text-2xl font-bold text-renaissance-secondary">Le Renaissance</h3>
            </div>
            <p className="text-sm text-gray-300 text-center md:text-left">
              Bar, restaurant et épicerie dans le charmant village de Machézal. 
              Un lieu convivial où se retrouvent les habitants et visiteurs depuis de nombreuses années.
            </p>
            <div className="flex mt-4 space-x-4">
              <a 
            href="https://www.facebook.com/estefanio.dasilva.733" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-renaissance-secondary transition-colors" 
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-renaissance-secondary transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <h4 className="font-playfair text-xl font-bold mb-4 text-renaissance-secondary">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-gray-300 hover:text-renaissance-secondary transition-colors">Accueil</Link>
              <Link to="/restaurant" className="text-gray-300 hover:text-renaissance-secondary transition-colors">Restaurant</Link>
              <Link to="/bar" className="text-gray-300 hover:text-renaissance-secondary transition-colors">Bar</Link>
              <Link to="/epicerie" className="text-gray-300 hover:text-renaissance-secondary transition-colors">Épicerie</Link>
              <Link to="/localites" className="text-gray-300 hover:text-renaissance-secondary transition-colors">Localités</Link>
              <Link to="/contact" className="text-gray-300 hover:text-renaissance-secondary transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h4 className="font-playfair text-xl font-bold mb-4 text-renaissance-secondary">Informations pratiques</h4>
            <div className="space-y-3">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Le+Bourg+42114+Machézal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-renaissance-secondary transition-colors"
              >
                <MapPin size={18} className="text-renaissance-secondary" />
                <span className="text-gray-300">Le Bourg, 42114 Machézal</span>
              </a>
              <a 
                href="tel:0477626098" 
                className="flex items-center justify-center md:justify-start gap-2 hover:text-renaissance-secondary transition-colors"
              >
                <Phone size={18} className="text-renaissance-secondary" />
                <span className="text-gray-300">04 77 62 60 98</span>
              </a>
              
              <a 
                href="mailto:steph.mauricio42000@domaine.com"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-renaissance-secondary transition-colors"
              >
                <Mail size={18} className="text-renaissance-secondary" />
                <span className="text-gray-300">steph.mauricio42000@domaine.com</span>
              </a>
              <OpeningHours />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Le Renaissance. Tous droits réservés. {' '}
            <a 
              href="https://www.site-internet-sans-abonnement.fr/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:text-renaissance-secondary transition-colors ml-2"
            >
              Créé par Aerodrone Multiservice
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
