
import { Helmet } from 'react-helmet-async';
import { ShoppingBasket, Store, ShoppingBag } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';
import ServiceHours from '@/components/common/ServiceHours';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const epicerieHours = [
  { days: "Lundi", hours: "17h00 - 20h00" },
  { days: "Mardi", hours: "09h00 - 13h30 & 17h00 - 20h00" },
  { days: "Mercredi", hours: "Fermé" },
  { days: "Jeudi", hours: "09h00 - 13h30 & 17h00 - 22h00" },
  { days: "Vendredi", hours: "09h00 - 13h30 & 17h00 - 22h00" },
  { days: "Samedi", hours: "10h00 - 13h30 & 17h00 - 22h00" },
  { days: "Dimanche", hours: "09h00 - 14h00" }
];

const Epicerie = () => {
  return (
    <Layout>
      <Helmet>
        <title>Épicerie Le Renaissance Machézal | Produits Locaux & Dépôt de Pain</title>
        <meta name="description" content="Épicerie de proximité à Machézal : produits frais, locaux et essentiels du quotidien. Dépôt de pain, fruits et légumes de saison, produits régionaux." />
        <meta name="keywords" content="épicerie Machézal, produits locaux, dépôt de pain, épicerie proximité, Le Renaissance, commerce Loire" />
        <meta property="og:title" content="Épicerie Le Renaissance Machézal | Votre Commerce de Proximité" />
        <meta property="og:description" content="Votre épicerie de proximité à Machézal : produits frais et locaux, dépôt de pain quotidien, et tout le nécessaire pour votre quotidien." />
        <meta property="og:type" content="store" />
      </Helmet>
      
      <PageHeader 
        title="Notre Épicerie" 
        description="Votre épicerie de proximité proposant une large gamme de produits frais, locaux et essentiels. Dépôt de pain quotidien et spécialités régionales."
        image="/lovable-uploads/f3ff6e93-33ce-4134-ab28-99805ea36604.png"
      />
      
      <div className="renaissance-container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader className="text-center">
              <ShoppingBasket className="w-8 h-8 mx-auto text-renaissance-primary" />
              <CardTitle className="mt-3">Produits Essentiels</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>Tous les produits de première nécessité pour votre quotidien à Machézal : épicerie, produits frais, boissons et articles ménagers.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Store className="w-8 h-8 mx-auto text-renaissance-primary" />
              <CardTitle className="mt-3">Produits Locaux</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>Un large choix de produits frais et locaux, en direct des producteurs de la région. Fruits, légumes, fromages et spécialités régionales.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <ShoppingBag className="w-8 h-8 mx-auto text-renaissance-primary" />
              <CardTitle className="mt-3">Dépôt de Pain</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>Pain frais et viennoiseries disponibles tous les jours d'ouverture. Possibilité de commander pour vos événements.</p>
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
