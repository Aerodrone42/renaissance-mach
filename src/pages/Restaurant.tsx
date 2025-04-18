
import { Helmet } from 'react-helmet';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';

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
        <p className="text-center text-lg text-renaissance-dark/80 max-w-4xl mx-auto">
          Contenu de la page Restaurant à venir...
        </p>
      </div>
    </Layout>
  );
};

export default Restaurant;
