
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';
import { MapPin } from 'lucide-react';

const localities = [
  {
    name: "Chirassimont",
    distance: "5 km",
    description: "Petit village pittoresque à proximité de Machézal.",
    slug: "chirassimont"
  },
  {
    name: "Saint-Just-la-Pendue",
    distance: "7 km",
    description: "Commune voisine connue pour son patrimoine historique.",
    slug: "saint-just-la-pendue"
  },
  {
    name: "Neulise",
    distance: "10 km",
    description: "Village dynamique avec diverses activités culturelles.",
    slug: "neulise"
  },
  {
    name: "Sainte-Colombe-sur-Gand",
    distance: "12 km",
    description: "Charmante localité avec un cadre naturel préservé.",
    slug: "sainte-colombe-sur-gand"
  },
  {
    name: "Violay",
    distance: "15 km",
    description: "Village perché offrant des panoramas exceptionnels.",
    slug: "violay"
  }
];

const Localites = () => {
  return (
    <Layout>
      <Helmet>
        <title>Localités | Le Renaissance - Machézal</title>
        <meta name="description" content="Découvrez les localités autour du Renaissance à Machézal et planifiez votre visite dans notre région." />
      </Helmet>
      
      <PageHeader 
        title="Nos Localités" 
        description="Le Renaissance accueille les visiteurs des communes voisines"
      />
      
      <div className="renaissance-container py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-renaissance-dark/80 mb-12">
            Situé au cœur de Machézal, Le Renaissance est facilement accessible depuis les communes environnantes. 
            Que vous soyez habitants ou visiteurs de passage, nous vous accueillons avec plaisir pour découvrir notre établissement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localities.map((locality) => (
              <Link 
                key={locality.slug} 
                to={`/localites/${locality.slug}`}
                className="card p-6 transition-all hover:shadow-xl"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-renaissance-primary mb-2">{locality.name}</h3>
                    <p className="text-renaissance-dark/80 mb-3">{locality.description}</p>
                  </div>
                  <div className="flex items-center text-renaissance-dark/60">
                    <MapPin size={16} className="mr-1" />
                    <span>{locality.distance}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 bg-renaissance-secondary/20 p-8 rounded-lg">
            <h3 className="font-playfair text-2xl font-bold text-renaissance-primary mb-4 text-center">Vous venez de loin?</h3>
            <p className="text-center mb-4">
              Le Renaissance est accessible en voiture, avec un parking gratuit à proximité.
            </p>
            <div className="flex justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.537232216885!2d4.292532076226454!3d45.82799997108186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4097fee270d8b%3A0x9731da2bb3f2f469!2s42114%20Mach%C3%A9zal!5e0!3m2!1sfr!2sfr!4v1713383598341!5m2!1sfr!2sfr"
                width="100%" 
                height="300" 
                style={{ border: 0, maxWidth: "600px" }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Le Renaissance"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Localites;
