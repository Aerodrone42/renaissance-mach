
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function NotFoundContent() {
  const { toast } = useToast();

  useEffect(() => {
    // Show error toast when component mounts
    toast({
      variant: "destructive",
      title: "Page non trouvée",
      description: "La page que vous recherchez n'existe pas ou a été déplacée.",
    });
  }, [toast]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-16">
      <img 
        src="/lovable-uploads/1e87f1be-8ed9-42a4-844d-d0991d75e48e.png"
        alt="Logo Le Renaissance" 
        className="h-24 w-24 mb-6 opacity-50"
      />
      <h1 className="font-playfair text-7xl md:text-9xl font-bold text-renaissance-primary mb-4">404</h1>
      <p className="text-xl md:text-2xl text-renaissance-dark/70 font-playfair italic mb-8">
        Cette page semble s'être égarée dans notre cave à vin...
      </p>
      <p className="max-w-md text-center text-renaissance-dark/70 mb-8">
        La page que vous recherchez n'existe pas. Elle a peut-être été déplacée ou supprimée.
      </p>
      <Button asChild className="bg-renaissance-primary hover:bg-renaissance-accent">
        <Link to="/">
          <Home className="mr-2 h-4 w-4" /> Retour à l'accueil
        </Link>
      </Button>
      
      <div className="mt-12 p-6 border border-dashed border-renaissance-secondary rounded-lg max-w-md mx-auto">
        <h3 className="font-playfair text-xl font-medium mb-2 text-center">Vous cherchez peut-être...</h3>
        <div className="grid grid-cols-2 gap-3">
          <Link to="/restaurant" className="text-renaissance-primary hover:text-renaissance-accent text-center">
            Notre restaurant
          </Link>
          <Link to="/bar" className="text-renaissance-primary hover:text-renaissance-accent text-center">
            Notre bar
          </Link>
          <Link to="/epicerie" className="text-renaissance-primary hover:text-renaissance-accent text-center">
            Notre épicerie
          </Link>
          <Link to="/contact" className="text-renaissance-primary hover:text-renaissance-accent text-center">
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
