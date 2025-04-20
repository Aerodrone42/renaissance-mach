import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message envoyé!', {
        description: 'Nous vous répondrons dans les plus brefs délais.',
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact | Le Renaissance - Machézal</title>
        <meta name="description" content="Contactez Le Renaissance à Machézal. Trouvez nos coordonnées, horaires d'ouverture et formulaire de contact." />
      </Helmet>
      
      <div className="renaissance-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="section-title">Informations pratiques</h2>
            <p className="text-renaissance-dark/80 mb-8">
              N'hésitez pas à nous contacter pour toute information complémentaire ou pour réserver une table.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-renaissance-secondary/20 rounded-full">
                  <MapPin size={24} className="text-renaissance-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Adresse</h4>
                  <p className="text-renaissance-dark/80">Le Bourg</p>
                  <p className="text-renaissance-dark/80">42114 Machézal</p>
                  <p className="text-renaissance-dark/80">France</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-renaissance-secondary/20 rounded-full">
                  <Phone size={24} className="text-renaissance-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Téléphone</h4>
                  <a href="tel:0477626098" className="text-renaissance-dark/80 hover:text-renaissance-primary transition-colors">04 77 62 60 98</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-renaissance-secondary/20 rounded-full">
                  <Mail size={24} className="text-renaissance-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Email</h4>
                  <a 
                    href="mailto:steph.mauricio42000@gmail.com" 
                    className="text-renaissance-dark/80 hover:text-renaissance-primary transition-colors underline"
                  >
                    steph.mauricio42000@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-renaissance-secondary/20 rounded-full">
                  <Clock size={24} className="text-renaissance-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Horaires</h4>
                  <p className="text-renaissance-dark/80">Mardi au Dimanche: 8h - 22h</p>
                  <p className="text-renaissance-dark/80">Fermé le Lundi</p>
                </div>
              </div>
            </div>
            
            <div className="h-[300px] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.537232216885!2d4.292532076226454!3d45.82799997108186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4097fee270d8b%3A0x9731da2bb3f2f469!2s42114%20Mach%C3%A9zal!5e0!3m2!1sfr!2sfr!4v1713383598341!5m2!1sfr!2sfr"
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
          
          {/* Contact Form */}
          <div>
            <h2 className="section-title">Envoyez-nous un message</h2>
            <p className="text-renaissance-dark/80 mb-8">
              Une question, une remarque ou une réservation? Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
            </p>
            
            <form 
              action="https://formsubmit.co/steph.mauricio42000@gmail.com" 
              method="POST"
              className="space-y-6"
            >
              {/* Champs cachés pour FormSubmit */}
              <input type="hidden" name="_next" value="https://www.le-renaissance-machezal.fr/merci" />
              <input type="hidden" name="_subject" value="Nouveau message du site Le Renaissance" />
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nom complet <span className="text-renaissance-primary">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="w-full"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email <span className="text-renaissance-primary">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Sujet <span className="text-renaissance-primary">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    className="w-full"
                    placeholder="Le sujet de votre message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message <span className="text-renaissance-primary">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    className="w-full min-h-[150px]"
                    placeholder="Votre message..."
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="bg-renaissance-primary hover:bg-renaissance-accent text-white w-full"
              >
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
