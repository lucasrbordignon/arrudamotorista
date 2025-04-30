
import { MapPin, Phone } from 'lucide-react';
import React from 'react';

const FooterDriver = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "(15) 99670-9113";
  const telLink = "+5515996709113";

  return (
    <footer className="py-8 bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           <div>
             <h4 className="font-semibold text-lg mb-2">Motorista Paulo Arruda</h4>
             <p className="text-sm text-muted-foreground inline-flex items-center">
               <MapPin className="mr-1 h-4 w-4"/> Laranjal Paulista - SP
             </p>
           </div>
           <div className="flex flex-col items-center md:items-end gap-1">
             <a href={`tel:${telLink}`} className="text-sm text-muted-foreground hover:text-primary inline-flex items-center">
                <Phone className="mr-2 h-4 w-4"/> {phoneNumber}
             </a>
         
           </div>
        </div>
        <div className="mt-6 pt-6 border-t border-border/60 text-center text-xs text-muted-foreground">
          © {currentYear} Motorista Paulo Arruda. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterDriver;
  