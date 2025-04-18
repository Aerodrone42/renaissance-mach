
import { GlassWater, UtensilsCrossed, ShoppingBag } from 'lucide-react';

const features = [
  {
    icon: UtensilsCrossed,
    title: "Restaurant",
    description: "Cuisine traditionnelle préparée avec des produits locaux et de saison. Menu du jour et carte variée."
  },
  {
    icon: GlassWater,
    title: "Bar",
    description: "Large sélection de boissons, cocktails et spiritueux. Ambiance chaleureuse pour des moments conviviaux."
  },
  {
    icon: ShoppingBag,
    title: "Épicerie",
    description: "Produits de première nécessité et spécialités locales pour vous dépanner et ravir vos papilles."
  }
];

export default function About() {
  return (
    <section id="about-section" className="py-16 md:py-24 bg-renaissance-light">
      <div className="renaissance-container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title inline-block mx-auto">Bienvenue au Renaissance</h2>
          <p className="max-w-3xl mx-auto text-renaissance-dark/80 mt-6">
            Depuis de nombreuses années, Le Renaissance est au cœur de la vie du village de Machézal. 
            Bar, restaurant et épicerie, notre établissement est un lieu de rencontre et de partage où chacun trouve son bonheur.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card p-6 flex flex-col items-center text-center animate-fade-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-3 bg-renaissance-secondary/20 rounded-full mb-4">
                <feature.icon size={28} className="text-renaissance-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-renaissance-dark/80">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <img 
              src="/lovable-uploads/469eff89-f249-427f-81fa-650808215997.png"
              alt="Le Renaissance intérieur" 
              className="rounded-lg shadow-xl w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <img 
                src="/lovable-uploads/1e87f1be-8ed9-42a4-844d-d0991d75e48e.png"
                alt="Logo" 
                className="h-28 w-28 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>

          <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4 text-renaissance-primary">Notre histoire</h3>
            <p className="text-renaissance-dark/80 mb-4">
              Le Renaissance est un établissement emblématique de Machézal, qui a su évoluer au fil du temps tout en conservant son caractère authentique et chaleureux.
            </p>
            <p className="text-renaissance-dark/80 mb-4">
              Notre philosophie est simple : proposer un lieu convivial où l'on se sent comme chez soi, avec une cuisine savoureuse préparée avec des produits de qualité.
            </p>
            <p className="text-renaissance-dark/80">
              Que ce soit pour un café matinal, un repas entre amis ou un apéritif en fin de journée, vous êtes toujours les bienvenus au Renaissance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
