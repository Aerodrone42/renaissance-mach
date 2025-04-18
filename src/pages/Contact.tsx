
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
                  <p className="text-renaissance-dark/80">120 All. des Platanes</p>
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
                  <p className="text-renaissance-dark/80">04 77 62 60 98</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-renaissance-secondary/20 rounded-full">
                  <Mail size={24} className="text-renaissance-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Email</h4>
                  <p className="text-renaissance-dark/80">contact@lerenaissance.fr</p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.537!2d4.293214!3d45.827769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f409be7df40d69%3A0x7a26e8d3214193c8!2s120%20All.%20des%20Platanes%2C%2042114%20Mach%C3%A9zal%2C%20France!5e0!3m2!1sfr!2sfr!4v1713476245190!5m2!1sfr!2sfr"
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
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nom complet <span className="text-renaissance-primary">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.subject}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px]"
                    placeholder="Votre message..."
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="bg-renaissance-primary hover:bg-renaissance-accent text-white w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
