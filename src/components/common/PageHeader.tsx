
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
  children?: ReactNode;
  className?: string;
}

export default function PageHeader({ title, description, image, children, className }: PageHeaderProps) {
  return (
    <div 
      className={cn("page-header", className)}
      style={{ 
        backgroundImage: image ? `url(${image})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="renaissance-container relative z-10 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 font-playfair italic">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
}
