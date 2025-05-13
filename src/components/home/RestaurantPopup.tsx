
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Utensils } from "lucide-react";

export default function RestaurantPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Afficher le popup après un court délai
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleReserve = () => {
    window.open('tel:0477626098', '_self');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-renaissance-primary">
            Réouverture de la Restauration
          </DialogTitle>
          <DialogDescription className="text-lg">
            Découvrez notre délicieux menu à 17 €
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 space-y-4">
          <img 
            src="/lovable-uploads/f8404d99-2ffe-4bf1-a11d-22a5af97898c.png"
            alt="Plat gastronomique"
            className="w-full h-48 object-cover rounded-lg"
          />
          
          <div className="flex items-center gap-2 text-renaissance-primary">
            <Utensils className="h-5 w-5" />
            <span className="font-semibold">Menu complet à 17 €</span>
          </div>
          
          <div className="space-y-2">
            <p className="text-gray-600">
              Nous sommes ravis de vous annoncer la réouverture de notre service de restauration. 
              Venez déguster notre cuisine traditionnelle dans une ambiance chaleureuse.
            </p>
            <p className="text-gray-600">
              Places limitées, réservation conseillée.
            </p>
          </div>

          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Fermer
            </Button>
            <Button
              onClick={handleReserve}
              className="bg-renaissance-primary hover:bg-renaissance-accent flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Réserver
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
