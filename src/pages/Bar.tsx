import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const Bar = () => {
  return (
    <Layout>
      <Helmet>
        <title>Bar | Le Renaissance - Machézal</title>
        <meta name="description" content="Découvrez notre bar chaleureux au cœur de Machézal" />
      </Helmet>
      
      <div className="page-header">
        <div className="renaissance-container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Notre Bar
          </h1>
        </div>
        <img 
          src="/lovable-uploads/bar-header.jpg" 
          alt="Bar Le Renaissance" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      <div className="renaissance-container py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">Un lieu de convivialité</h2>
          <p className="mb-6">
            Le bar du Renaissance est un lieu de rencontre et de partage pour les habitants de Machézal et des environs. 
            Dans une ambiance chaleureuse et authentique, venez profiter d'un moment de détente autour d'un verre.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <img 
              src="/lovable-uploads/bar-interior.jpg" 
              alt="Intérieur du bar" 
              className="rounded-lg shadow-md h-64 w-full object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold text-renaissance-primary mb-4">Nos boissons</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-renaissance-secondary rounded-full mr-2"></span>
                  <span>Bières locales et artisanales</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-renaissance-secondary rounded-full mr-2"></span>
                  <span>Vins de la région</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-renaissance-secondary rounded-full mr-2"></span>
                  <span>Cocktails et spiritueux</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-renaissance-secondary rounded-full mr-2"></span>
                  <span>Boissons chaudes</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-renaissance-secondary rounded-full mr-2"></span>
                  <span>Jus de fruits et sodas</span>
                </li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-renaissance-primary mb-4">Animations et événements</h3>
          <p className="mb-6">
            Tout au long de l'année, nous organisons diverses animations pour faire vivre notre village :
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-renaissance-secondary rounded-full mr-2 mt-2"></span>
              <span>Soirées à thème</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-renaissance-secondary rounded-full mr-2 mt-2"></span>
              <span>Retransmissions sportives</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-renaissance-secondary rounded-full mr-2 mt-2"></span>
              <span>Jeux de société</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-renaissance-secondary rounded-full mr-2 mt-2"></span>
              <span>Concerts et animations musicales</span>
            </li>
          </ul>
          
          <div className="bg-renaissance-light p-6 rounded-lg border border-renaissance-secondary/30 shadow-sm">
            <h3 className="text-xl font-bold text-renaissance-primary mb-2">Informations pratiques</h3>
            <p>
              Notre bar est ouvert tous les jours de la semaine. Consultez nos horaires pour planifier votre visite.
              Pour les groupes ou événements spéciaux, n'hésitez pas à nous contacter.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Bar;
