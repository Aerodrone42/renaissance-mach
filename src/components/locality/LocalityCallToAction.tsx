
import { Button } from "@/components/ui/button";

interface LocalityCallToActionProps {
  localityName: string;
  distance: string;
}

export default function LocalityCallToAction({ localityName, distance }: LocalityCallToActionProps) {
  return (
    <div className="p-6 border border-renaissance-secondary/40 rounded-lg bg-renaissance-secondary/10">
      <h3 className="font-playfair text-xl font-bold mb-4 text-renaissance-primary">Visitez-nous depuis {localityName}</h3>
      <p className="mb-4">
        Le Renaissance vous accueille pour une pause gourmande lors de votre visite dans la région. 
        Notre établissement se trouve à seulement {distance} de {localityName}.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild className="bg-renaissance-primary hover:bg-renaissance-accent text-white">
          <a href="/contact">Nous contacter</a>
        </Button>
        <Button asChild variant="outline" className="border-renaissance-primary text-renaissance-primary hover:bg-renaissance-primary/10">
          <a href="/restaurant">Voir notre restaurant</a>
        </Button>
      </div>
    </div>
  );
}
