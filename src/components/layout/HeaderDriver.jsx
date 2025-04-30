
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const HeaderDriver = () => {
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/2162f455-1db9-431b-b7ea-f75fd3708b72/369636e0c6d1db169441a4c32aad5548.png";
  const whatsappNumber = "5513996709113"; // Formatted for WhatsApp link
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá Paulo, gostaria de solicitar um orçamento.")}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <motion.a 
          href="#" 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoUrl} alt="Logo Paulo Arruda Motorista" className="h-12 w-auto" /> 
        </motion.a>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button asChild size="sm" className="button-whatsapp">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-4 w-4" /> Orçamento
            </a>
          </Button>
        </motion.div>
      </div>
    </header>
  );
};

export default HeaderDriver;
  