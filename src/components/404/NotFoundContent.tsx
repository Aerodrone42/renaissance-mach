
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const NotFoundContent = () => {
  const navigate = useNavigate();

  return (
    <div className="renaissance-container py-16 md:py-32 text-center">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="h-20 w-20 text-renaissance-primary" />
        </div>
        
        <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
          Page non trouvée
        </h1>
        
        <Alert variant="destructive" className="mb-8">
          <AlertTitle>Erreur 404</AlertTitle>
          <AlertDescription>
            La page que vous recherchez n'existe pas ou a été déplacée.
          </AlertDescription>
        </Alert>
        
        <p className="text-renaissance-dark/80 mb-8">
          Nous vous invitons à retourner à la page d'accueil ou à explorer
          les autres sections du site.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            className="bg-renaissance-primary hover:bg-renaissance-accent text-white"
            onClick={() => navigate('/')}
          >
            Retour à l'accueil
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
          >
            Revenir en arrière
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundContent;
