
import { Clock } from 'lucide-react';

interface ServiceHoursProps {
  hours: {
    days: string;
    hours: string;
  }[];
}

export default function ServiceHours({ hours }: ServiceHoursProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="text-renaissance-primary" />
        <h3 className="font-playfair text-xl">Horaires d'ouverture</h3>
      </div>
      <div className="space-y-2">
        {hours.map((schedule, index) => (
          <div key={index} className="flex justify-between">
            <span className="font-medium">{schedule.days}</span>
            <span>{schedule.hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
