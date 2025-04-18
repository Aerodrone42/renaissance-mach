
import { Clock } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from 'react';

const OpeningHours = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hours = [
    { day: 'Lundi', hours: '17h - 20h' },
    { day: 'Mardi', hours: '9h - 13h30, 17h - 20h' },
    { day: 'Mercredi', hours: 'Fermé' },
    { day: 'Jeudi', hours: '9h - 13h30, 17h - 22h' },
    { day: 'Vendredi', hours: '9h - 13h30, 17h - 22h' },
    { day: 'Samedi', hours: '10h - 13h30, 17h - 22h' },
    { day: 'Dimanche', hours: '9h - 14h' }
  ];

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex items-center justify-center md:justify-start gap-2">
        <CollapsibleTrigger className="flex items-center gap-2 hover:text-renaissance-secondary transition-colors">
          <Clock size={18} className="text-renaissance-secondary" />
          <span className="text-gray-300">Voir les horaires</span>
        </CollapsibleTrigger>
      </div>
      
      <CollapsibleContent className="mt-2 space-y-1">
        {hours.map((schedule, index) => (
          <div key={index} className="flex justify-between text-sm text-gray-300 pl-6">
            <span className="font-medium">{schedule.day}</span>
            <span>{schedule.hours}</span>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default OpeningHours;
