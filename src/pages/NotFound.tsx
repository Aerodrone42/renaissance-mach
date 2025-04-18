
import { Helmet } from 'react-helmet';
import Layout from '@/components/layout/Layout';
import NotFoundContent from '@/components/404/NotFoundContent';

const NotFound = () => {
  return (
    <Layout showErrorToast={true}>
      <Helmet>
        <title>Page non trouvée | Le Renaissance - Machézal</title>
        <meta name="description" content="La page que vous recherchez n'existe pas ou a été déplacée." />
      </Helmet>
      
      <NotFoundContent />
    </Layout>
  );
};

export default NotFound;
