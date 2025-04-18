
import { Button } from "@/components/ui/button";
import { Clock, Phone } from "lucide-react";

interface LocalityCallToActionProps {
  localityName: string;
  distance: string;
}

export default function LocalityCallToAction({ localityName, distance }: LocalityCallToActionProps) {
  return (
    <div className="p-6 border border-renaissance-secondary/40 rounded-lg bg-renaissance-secondary/10">
      <h3 className="font-playfair text-xl font-bold mb-4 text-renaissance-primary">Venez au bar-restaurant-épicerie Le Renaissance depuis {localityName}</h3>
      <p className="mb-4">
        Le bar-restaurant-épicerie Le Renaissance vous accueille pour une expérience gourmande inoubliable à seulement {distance} de {localityName}.
        Notre établissement est facile d'accès et dispose d'un parking à proximité.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-8 mb-6">
        <div className="flex items-start">
          <Clock size={20} className="mr-2 text-renaissance-primary mt-1" />
          <div>
            <p className="font-medium">Horaires d'ouverture</p>
            <p className="text-renaissance-dark/70">Du mardi au dimanche<br />10h à 22h</p>
          </div>
        </div>
        <div className="flex items-start">
          <Phone size={20} className="mr-2 text-renaissance-primary mt-1" />
          <div>
            <p className="font-medium">Réservations</p>
            <a href="tel:0477626098" className="text-renaissance-dark/70 hover:text-renaissance-primary transition-colors">04 77 62 60 98</a>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild className="bg-renaissance-primary hover:bg-renaissance-accent text-white">
          <a href="/contact">Réserver une table</a>
        </Button>
        <Button asChild variant="outline" className="border-renaissance-primary text-renaissance-primary hover:bg-renaissance-primary/10">
          <a href="/restaurant">Découvrir notre menu</a>
        </Button>
      </div>
    </div>
  );
}
