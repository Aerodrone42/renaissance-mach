
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Contact from '@/components/home/Contact';
import RestaurantPopup from '@/components/home/RestaurantPopup';

const Index = () => {
  useEffect(() => {
    // Show welcome toast when component mounts
    toast.success('Bienvenue au Renaissance!', {
      description: 'Découvrez notre bar, restaurant et épicerie au cœur de Machézal.',
      position: 'top-center',
      duration: 5000,
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Le Renaissance | Bar - Restaurant - Épicerie à Machézal</title>
        <meta name="description" content="Le Renaissance - Bar, restaurant et épicerie de village à Machézal (42114). Un lieu chaleureux et convivial proposant une cuisine traditionnelle et des produits locaux." />
      </Helmet>
      
      <RestaurantPopup />
      <Hero />
      <About />
      <Services />
      <Contact />
    </Layout>
  );
};

export default Index;
