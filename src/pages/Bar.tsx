
import { Helmet } from 'react-helmet-async';
import { Beer, Wine, Music4 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';
import ServiceHours from '@/components/common/ServiceHours';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const barHours = [
  { days: "Mardi - Jeudi", hours: "11h00 - 22h00" },
  { days: "Vendredi - Samedi", hours: "11h00 - 00h00" },
  { days: "Dimanche", hours: "11h00 - 20h00" },
  { days: "Lundi", hours: "Fermé" }
];

const Bar = () => {
  return (
    <Layout>
      <Helmet>
        <title>Bar | Le Renaissance - Machézal</title>
        <meta name="description" content="Le bar du Renaissance à Machézal vous accueille dans une ambiance conviviale. Découvrez notre sélection de boissons et cocktails." />
      </Helmet>
      
      <PageHeader 
        title="Notre Bar" 
        description="Un lieu convivial pour se retrouver"
        image="/lovable-uploads/0e7083ee-ce9e-418e-930e-d5f63bbfcb20.png"
      />
      
      <div className="renaissance-container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader className="text-center">
              <Beer className="w-8 h-8 mx-auto text-renaissance-primary" />
              <CardTitle className="mt-3">Bières & Pressions</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>Une sélection de bières locales et internationales, en bouteille ou à la pression.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Wine className="w-8 h-8 mx-auto text-renaissance-primary" />
              <CardTitle className="mt-3">Carte des Vins</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>Découvrez notre cave et nos vins sélectionnés avec soin auprès de vignerons passionnés.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Music4 className="w-8 h-8 mx-auto text-renaissance-primary" />
              <CardTitle className="mt-3">Animations</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>Soirées à thème et animations musicales régulières dans une ambiance conviviale.</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-xl mx-auto">
          <ServiceHours hours={barHours} />
        </div>
      </div>
    </Layout>
  );
};

export default Bar;
