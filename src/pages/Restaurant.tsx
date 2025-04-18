
import { Helmet } from 'react-helmet-async';
import { Utensils, Coffee, ChefHat } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';
import ServiceHours from '@/components/common/ServiceHours';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const restaurantHours = [
  { days: "Mardi - Jeudi", hours: "12h00 - 14h00" },
  { days: "Vendredi - Samedi", hours: "12h00 - 14h00 / 19h00 - 21h30" },
  { days: "Dimanche", hours: "12h00 - 14h00" },
  { days: "Lundi", hours: "Fermé" }
];

const Restaurant = () => {
  return (
    <Layout>
      <Helmet>
        <title>Restaurant | Le Renaissance - Machézal</title>
        <meta name="description" content="Découvrez notre restaurant au Renaissance à Machézal. Cuisine traditionnelle avec des produits frais et locaux." />
      </Helmet>
      
      <PageHeader 
        title="Notre Restaurant" 
        description="Une cuisine traditionnelle et gourmande"
        image="/lovable-uploads/e2cd6eb9-afd4-46b6-a981-507795eca30d.png"
      />
      
      <div className="renaissance-container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader className="text-center">
              <ChefHat className="w-8 h-8 mx-auto text-renaissance-primary" />
              <CardTitle className="mt-3">Cuisine Traditionnelle</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>Des plats authentiques préparés avec des produits frais et locaux, dans le respect des traditions culinaires.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Utensils className="w-8 h-8 mx-auto text-renaissance-primary" />
              <CardTitle className="mt-3">Menu du Jour</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>Découvrez notre formule du jour à 15€ : entrée, plat, dessert. Du mardi au vendredi midi.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Coffee className="w-8 h-8 mx-auto text-renaissance-primary" />
              <CardTitle className="mt-3">Ambiance Conviviale</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>Un cadre chaleureux pour vos repas en famille ou entre amis, au cœur de Machézal.</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-xl mx-auto">
          <ServiceHours hours={restaurantHours} />
        </div>
      </div>
    </Layout>
  );
};

export default Restaurant;
