import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';
import LocalityGallery from '@/components/locality/LocalityGallery';
import { MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Données des localités
const localitiesData = {
  "chirassimont": {
    name: "Chirassimont",
    distance: "5 km",
    description: "Chirassimont est un charmant village situé à seulement 5 km de Machézal. Cette commune paisible offre un cadre rural authentique, idéal pour les amateurs de nature et de tranquillité.",
    attractions: [
      "Église du XIXème siècle",
      "Sentiers de randonnée",
      "Vue panoramique sur les monts du Lyonnais"
    ]
  },
  "saint-just-la-pendue": {
    name: "Saint-Just-la-Pendue",
    distance: "7 km",
    description: "Saint-Just-la-Pendue est une commune voisine située à 7 km de Machézal. Reconnue pour son dynamisme, elle propose diverses activités et possède un riche patrimoine historique.",
    attractions: [
      "Église gothique remarquable",
      "Marché hebdomadaire",
      "Fête patronale traditionnelle"
    ]
  },
  "croizet-sur-gand": {
    name: "Croizet-sur-Gand",
    distance: "8 km",
    description: "Croizet-sur-Gand est un charmant village traversé par la rivière Gand. Son patrimoine architectural et ses sentiers de randonnée en font un lieu apprécié des visiteurs.",
    attractions: [
      "Pont historique sur le Gand",
      "Chemins de randonnée",
      "Ancienne école restaurée"
    ]
  },
  "neulise": {
    name: "Neulise",
    distance: "10 km",
    description: "Neulise est une commune dynamique qui constitue un carrefour important dans la région. Elle offre divers commerces et services, ainsi qu'un plan d'eau apprécié.",
    attractions: [
      "Plan d'eau aménagé",
      "Centre culturel",
      "Commerces de proximité"
    ]
  },
  "saint-cyr-de-valorges": {
    name: "Saint-Cyr-de-Valorges",
    distance: "11 km",
    description: "Saint-Cyr-de-Valorges est une commune rurale authentique située au cœur des monts du Beaujolais. Son église et ses points de vue panoramiques attirent les visiteurs.",
    attractions: [
      "Église Saint-Cyr",
      "Point de vue panoramique",
      "Fermes traditionnelles"
    ]
  },
  "sainte-colombe-sur-gand": {
    name: "Sainte-Colombe-sur-Gand",
    distance: "12 km",
    description: "Située le long de la rivière Gand, Sainte-Colombe-sur-Gand charme par son patrimoine historique et son cadre naturel préservé.",
    attractions: [
      "Bords de la rivière Gand",
      "Ancien moulin restauré",
      "Chapelle historique"
    ]
  },
  "lay": {
    name: "Lay",
    distance: "13 km",
    description: "Lay est un village historique marquant l'entrée du Beaujolais. Son château médiéval et ses vignobles en font une étape incontournable.",
    attractions: [
      "Château médiéval",
      "Vignobles locaux",
      "Place du village animée"
    ]
  },
  "saint-symphorien-de-lay": {
    name: "Saint-Symphorien-de-Lay",
    distance: "14 km",
    description: "Saint-Symphorien-de-Lay est un bourg dynamique offrant de nombreux commerces et services. Son église romane et son marché attirent les visiteurs.",
    attractions: [
      "Église romane",
      "Marché traditionnel",
      "Commerces et restaurants"
    ]
  },
  "violay": {
    name: "Violay",
    distance: "15 km",
    description: "Perché dans les monts du Beaujolais, Violay offre des panoramas exceptionnels et un climat particulier propice aux cerises.",
    attractions: [
      "Mont Boussuivre",
      "Forêt de Violay",
      "Fête de la cerise"
    ]
  },
  "saint-marcel-de-felines": {
    name: "Saint-Marcel-de-Félines",
    distance: "16 km",
    description: "Saint-Marcel-de-Félines est reconnu pour son magnifique château médiéval et son jardin historique. Le village organise régulièrement des festivités médiévales.",
    attractions: [
      "Château de Saint-Marcel",
      "Jardin médiéval",
      "Festivités médiévales"
    ]
  },
  "bussieres": {
    name: "Bussières",
    distance: "17 km",
    description: "Bussières est un village typique des monts du Lyonnais, avec son église Saint-Pierre et son ancien couvent. Les randonneurs apprécient ses sentiers balisés.",
    attractions: [
      "Église Saint-Pierre",
      "Ancien couvent",
      "Sentiers pédestres balisés"
    ]
  },
  "neronde": {
    name: "Néronde",
    distance: "18 km",
    description: "Néronde est une cité médiévale préservée, avec ses tours et ses maisons Renaissance. Sa place du marché témoigne de son riche passé commercial.",
    attractions: [
      "Tours médiévales",
      "Place du marché historique",
      "Maisons Renaissance"
    ]
  },
  "pradines": {
    name: "Pradines",
    distance: "19 km",
    description: "Pradines est un village viticole offrant une vue imprenable sur la plaine du Forez. Ses domaines viticoles et son église du XIXe siècle méritent le détour.",
    attractions: [
      "Domaines viticoles",
      "Point de vue sur la plaine",
      "Église du XIXe siècle"
    ]
  },
  "vendranges": {
    name: "Vendranges",
    distance: "20 km",
    description: "Vendranges est un petit village authentique de la Loire, avec sa chapelle historique et son lavoir restauré. Le chemin des écoliers offre une agréable promenade.",
    attractions: [
      "Chapelle historique",
      "Lavoir restauré",
      "Chemin des écoliers"
    ]
  }
};

// Images mock data for each locality
const localityImages = {
  default: [
    { src: "/lovable-uploads/e2cd6eb9-afd4-46b6-a981-507795eca30d.png", alt: "Vue du village" },
    { src: "/lovable-uploads/0e7083ee-ce9e-418e-930e-d5f63bbfcb20.png", alt: "Place centrale" },
    { src: "/lovable-uploads/57cfeb3f-a073-4017-a068-63c353479ff4.png", alt: "Paysage environnant" },
    { src: "/lovable-uploads/7c44b874-7e0a-4164-85dd-f679841fb8a6.png", alt: "Le bar du Renaissance" },
    { src: "/lovable-uploads/f436c816-c0f5-42bc-ba69-13ba98b6d4c0.png", alt: "Notre chocolat chaud maison" }
  ]
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
      
      <div className="renaissance-container py-16 animate-fade-in">
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

          <LocalityGallery images={localityImages.default} />
          
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
