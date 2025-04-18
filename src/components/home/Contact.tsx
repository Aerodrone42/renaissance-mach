
import { MapPin, Phone, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-renaissance-secondary/30">
      <div className="renaissance-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Nous trouver</h2>
            <p className="text-renaissance-dark/80 mb-8">
              Situé au cœur du village de Machézal, Le Renaissance est facilement accessible et dispose d'un parking à proximité.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-renaissance-primary mt-1" />
                <div>
                  <h4 className="font-medium">Adresse</h4>
                  <p className="text-renaissance-dark/80">Le Bourg, 42114 Machézal, France</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-renaissance-primary mt-1" />
                <div>
                  <h4 className="font-medium">Téléphone</h4>
                  <a href="tel:0477626098" className="text-renaissance-dark/80 hover:text-renaissance-primary transition-colors">04 77 62 60 98</a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-renaissance-primary mt-1" />
                <div>
                  <h4 className="font-medium">Horaires</h4>
                  <p className="text-renaissance-dark/80">Mardi au Dimanche: 8h - 22h</p>
                  <p className="text-renaissance-dark/80">Fermé le Lundi</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-playfair text-lg font-medium mb-2">Localités à proximité:</h4>
              <div className="grid grid-cols-2 gap-2">
                <a href="/localites/chirassimont" className="text-renaissance-primary hover:text-renaissance-accent transition-colors">
                  Chirassimont
                </a>
                <a href="/localites/saint-just-la-pendue" className="text-renaissance-primary hover:text-renaissance-accent transition-colors">
                  Saint-Just-la-Pendue
                </a>
                <a href="/localites/neulise" className="text-renaissance-primary hover:text-renaissance-accent transition-colors">
                  Neulise
                </a>
                <a href="/localites/sainte-colombe-sur-gand" className="text-renaissance-primary hover:text-renaissance-accent transition-colors">
                  Sainte-Colombe-sur-Gand
                </a>
                <a href="/localites/violay" className="text-renaissance-primary hover:text-renaissance-accent transition-colors">
                  Violay
                </a>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.5358864194366!2d4.2914044!3d45.827771799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4097f88c2778f%3A0x96c18333ad6dd9df!2sLe%20Bourg%2C%2042114%20Mach%C3%A9zal!5e0!3m2!1sfr!2sfr!4v1713548207659!5m2!1sfr!2sfr"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - Le Renaissance"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
