
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Restaurant",
    image: "/lovable-uploads/e2cd6eb9-afd4-46b6-a981-507795eca30d.png",
    description: "Découvrez notre cuisine traditionnelle préparée avec soin et passion.",
    link: "/restaurant"
  },
  {
    title: "Bar",
    image: "/lovable-uploads/0e7083ee-ce9e-418e-930e-d5f63bbfcb20.png",
    description: "Un espace convivial pour partager des moments agréables autour d'un verre.",
    link: "/bar"
  },
  {
    title: "Épicerie",
    image: "/lovable-uploads/57cfeb3f-a073-4017-a068-63c353479ff4.png",
    description: "Des produits essentiels et spécialités locales pour satisfaire tous vos besoins.",
    link: "/epicerie"
  }
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="renaissance-container">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block mx-auto">Nos services</h2>
          <p className="max-w-3xl mx-auto text-renaissance-dark/80 mt-6">
            Découvrez les différentes facettes du Renaissance, un lieu multiservice qui s'adapte à vos besoins.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden rounded-lg mb-4 h-64 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-renaissance-dark/90 to-transparent opacity-80"></div>
                <h3 className="absolute bottom-4 left-4 font-playfair text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-renaissance-dark/80 mb-4">
                {service.description}
              </p>
              <Button variant="link" asChild className="text-renaissance-primary hover:text-renaissance-accent px-0">
                <Link to={service.link}>
                  En savoir plus <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
