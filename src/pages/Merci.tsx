
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Merci = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to home after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Layout>
      <Helmet>
        <title>Merci | Le Renaissance - Machézal</title>
        <meta name="description" content="Merci pour votre message. Nous vous répondrons dans les plus brefs délais." />
      </Helmet>
      
      <div className="renaissance-container py-16">
        <div className="max-w-lg mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="p-4 bg-green-100 rounded-full">
              <Check size={48} className="text-green-600" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Merci pour votre message
          </h1>
          
          <p className="text-renaissance-dark/80 text-lg mb-8">
            Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.
          </p>
          
          <Button
            onClick={() => navigate('/')}
            className="bg-renaissance-primary hover:bg-renaissance-accent text-white"
          >
            Retour à l'accueil
          </Button>
          
          <p className="mt-4 text-sm text-renaissance-dark/60">
            Vous serez automatiquement redirigé vers la page d'accueil dans quelques secondes...
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Merci;
