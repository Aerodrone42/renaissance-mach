
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';

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
        <p className="text-center text-lg text-renaissance-dark/80 max-w-4xl mx-auto">
          Contenu de la page Épicerie à venir...
        </p>
      </div>
    </Layout>
  );
};

export default Epicerie;
