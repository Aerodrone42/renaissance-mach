
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';
import LocalityGallery from '@/components/locality/LocalityGallery';
import LocalityAttractions from '@/components/locality/LocalityAttractions';
import LocalityCallToAction from '@/components/locality/LocalityCallToAction';
import { localitiesData } from '@/data/localities';
import { localityImages } from '@/data/localities';
import type { Locality } from '@/types/locality';

type LocalityParams = {
  slug: string;
};

const LocalitePage = () => {
  const { slug } = useParams<LocalityParams>();
  const navigate = useNavigate();
  const locality = slug && localitiesData[slug as keyof typeof localitiesData];

  useEffect(() => {
    if (!locality) {
      navigate("/localites");
    }
  }, [locality, navigate]);

  if (!locality) {
    return null;
  }

  return (
    <Layout>
      <Helmet>
        <title>{locality.name} | Localités | Le Renaissance - Machézal</title>
        <meta 
          name="description" 
          content={`Découvrez la localité de ${locality.name} près du Renaissance à Machézal. Information touristiques et distance.`} 
        />
      </Helmet>
      
      <PageHeader 
        title={locality.name}
        description={`À ${locality.distance} de Machézal`}
      />
      
      <div className="renaissance-container py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-8 flex items-center text-renaissance-primary hover:text-renaissance-accent"
            onClick={() => navigate('/localites')}
          >
            <ArrowLeft size={16} className="mr-2" /> Retour aux localités
          </Button>
          
          <div className="mb-12">
            <div className="flex items-center gap-2 text-renaissance-dark/60 mb-4">
              <MapPin size={18} />
              <span>À {locality.distance} de Machézal</span>
            </div>
            <p className="text-lg text-renaissance-dark/80 mb-8">{locality.description}</p>
          </div>

          <LocalityGallery images={localityImages.default} />
          <LocalityAttractions attractions={locality.attractions} />
          <LocalityCallToAction localityName={locality.name} distance={locality.distance} />
        </div>
      </div>
    </Layout>
  );
};

export default LocalitePage;
