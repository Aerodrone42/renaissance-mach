
import { Helmet } from 'react-helmet-async';
import { ShoppingBasket, Apple, Bread } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';
import ServiceHours from '@/components/common/ServiceHours';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const epicerieHours = [
  { days: "Mardi - Samedi", hours: "08h00 - 19h30" },
  { days: "Dimanche", hours: "08h00 - 12h30" },
  { days: "Lundi", hours: "Fermé" }
];

const Epicerie = () => {
  return (
    <Layout>
      <Helmet>
        <title>Épicerie | Le Renaissance - Machézal</title>
        <meta name="description" content="L'épicerie du Renaissance à Machézal propose des produits de première nécessité et des spécialités locales. Découvrez notre sélection." />
      </Helmet>
      
      <PageHeader 
        title="Notre Épicerie" 
        description="Produits locaux et essentiels du quotidien"
        image="/lovable-uploads/57cfeb3f-a073-4017-a068-63c353479ff4.png"
      />
      
      <div className="renaissance-container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader className="text-center">
              <ShoppingBasket className="w-8 h-8 mx-auto text-renaissance-primary" />
              <CardTitle className="mt-3">Produits Essentiels</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>Tous les produits de première nécessité pour votre quotidien à Machézal.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Apple className="w-8 h-8 mx-auto text-renaissance-primary" />
              <CardTitle className="mt-3">Produits Locaux</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>Un large choix de produits frais et locaux, en direct des producteurs de la région.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Bread className="w-8 h-8 mx-auto text-renaissance-primary" />
              <CardTitle className="mt-3">Pain Frais</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>Dépôt de pain et viennoiseries fraîches tous les jours d'ouverture.</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-xl mx-auto">
          <ServiceHours hours={epicerieHours} />
        </div>
      </div>
    </Layout>
  );
};

export default Epicerie;
