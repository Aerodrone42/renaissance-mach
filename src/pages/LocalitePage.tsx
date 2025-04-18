
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';
import { MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Données des localités
const localitiesData = {
  "chirassimont": {
    name: "Chirassimont",
    distance: "5 km",
    description: "Chirassimont est un charmant village situé à seulement 5 km de Machézal. Cette commune paisible offre un cadre rural authentique, idéal pour les amateurs de nature et de tranquillité.",
    attractions: [
      "Église Saint-André, datant du XIXème siècle",
      "Sentiers de randonnée à travers la campagne",
      "Panorama sur les monts du Lyonnais"
    ]
  },
  "saint-just-la-pendue": {
    name: "Saint-Just-la-Pendue",
    distance: "7 km",
    description: "Saint-Just-la-Pendue est une commune voisine située à 7 km de Machézal. Reconnue pour son dynamisme, elle propose diverses activités et possède un riche patrimoine historique.",
    attractions: [
      "Église gothique avec son clocher caractéristique",
      "Marché hebdomadaire (le jeudi matin)",
      "Fête patronale en été avec animations traditionnelles"
    ]
  },
  "neulise": {
    name: "Neulise",
    distance: "10 km",
    description: "À 10 km de Machézal, Neulise est une commune dynamique qui constitue un carrefour important dans la région. Elle offre divers commerces et services.",
    attractions: [
      "Plan d'eau aménagé idéal pour la détente",
      "Nombreux commerces de proximité",
      "Espace culturel proposant des expositions temporaires"
    ]
  },
  "sainte-colombe-sur-gand": {
    name: "Sainte-Colombe-sur-Gand",
    distance: "12 km",
    description: "Située à 12 km de Machézal, Sainte-Colombe-sur-Gand est une petite commune traversée par la rivière Gand. Son environnement naturel préservé en fait un lieu apprécié des amoureux de la nature.",
    attractions: [
      "Bords de la rivière Gand propices à la promenade",
      "Ancien moulin restauré",
      "Chapelle historique du XVIe siècle"
    ]
  },
  "violay": {
    name: "Violay",
    distance: "15 km",
    description: "Perché à 15 km de Machézal, Violay est un village de moyenne montagne offrant des panoramas exceptionnels sur la région. Son altitude lui confère un climat particulier et des paysages variés.",
    attractions: [
      "Point de vue du Mont Boussuivre (902m d'altitude)",
      "Forêt de Violay, idéale pour les randonnées",
      "Fête traditionnelle de la cerise chaque été"
    ]
  }
};

type LocalityParams = {
  slug: string;
};

const LocalitePage = () => {
  const { slug } = useParams<LocalityParams>();
  const navigate = useNavigate();
  const locality = slug && localitiesData[slug as keyof typeof localitiesData];

  useEffect(() => {
    if (!locality) {
      navigate("/localites");
    }
  }, [locality, navigate]);

  if (!locality) {
    return null;
  }

  return (
    <Layout>
      <Helmet>
        <title>{locality.name} | Localités | Le Renaissance - Machézal</title>
        <meta name="description" content={`Découvrez la localité de ${locality.name} près du Renaissance à Machézal. Information touristiques et distance.`} />
      </Helmet>
      
      <PageHeader 
        title={locality.name}
        description={`À ${locality.distance} de Machézal`}
      />
      
      <div className="renaissance-container py-16">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-8 flex items-center text-renaissance-primary hover:text-renaissance-accent"
            onClick={() => navigate('/localites')}
          >
            <ArrowLeft size={16} className="mr-2" /> Retour aux localités
          </Button>
          
          <div className="mb-12">
            <div className="flex items-center gap-2 text-renaissance-dark/60 mb-4">
              <MapPin size={18} />
              <span>À {locality.distance} de Machézal</span>
            </div>
            
            <p className="text-lg text-renaissance-dark/80 mb-8">{locality.description}</p>
          </div>
          
          <div className="mb-12">
            <h2 className="font-playfair text-2xl font-bold mb-4 text-renaissance-primary">Points d'intérêt</h2>
            <ul className="space-y-2 list-disc pl-5">
              {locality.attractions.map((attraction, index) => (
                <li key={index} className="text-renaissance-dark/80">{attraction}</li>
              ))}
            </ul>
          </div>
          
          <div className="p-6 border border-renaissance-secondary/40 rounded-lg bg-renaissance-secondary/10">
            <h3 className="font-playfair text-xl font-bold mb-4 text-renaissance-primary">Visitez-nous depuis {locality.name}</h3>
            <p className="mb-4">
              Le Renaissance vous accueille pour une pause gourmande lors de votre visite dans la région. 
              Notre établissement se trouve à seulement {locality.distance} de {locality.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-renaissance-primary hover:bg-renaissance-accent text-white">
                <a href="/contact">Nous contacter</a>
              </Button>
              <Button asChild variant="outline" className="border-renaissance-primary text-renaissance-primary hover:bg-renaissance-primary/10">
                <a href="/restaurant">Voir notre restaurant</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LocalitePage;
