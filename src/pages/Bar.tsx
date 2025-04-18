
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';

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
        <p className="text-center text-lg text-renaissance-dark/80 max-w-4xl mx-auto">
          Contenu de la page Bar à venir...
        </p>
      </div>
    </Layout>
  );
};

export default Bar;
