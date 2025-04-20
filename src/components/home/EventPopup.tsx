
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function EventPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Afficher le popup après un court délai
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-renaissance-primary">
            Événement Spécial : Soirée Moules-Frites
          </DialogTitle>
          <DialogDescription className="text-lg">
            Rejoignez-nous pour une délicieuse soirée !
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 space-y-4">
          <img 
            src="/lovable-uploads/60f35f2e-e2e5-4baa-8fda-1f9ac002ee89.png"
            alt="Moules-frites"
            className="w-full h-48 object-cover rounded-lg"
          />
          
          <div className="flex items-center gap-2 text-renaissance-primary">
            <Calendar className="h-5 w-5" />
            <span className="font-semibold">2 Mai 2025</span>
          </div>
          
          <div className="space-y-2">
            <p className="text-xl font-semibold text-renaissance-primary">15 € par personne</p>
            <p className="text-gray-600">
              Profitez d'un délicieux plat de moules-frites dans une ambiance conviviale.
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
              onClick={() => window.location.href = '/contact'}
              className="bg-renaissance-primary hover:bg-renaissance-accent"
            >
              Réserver
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
