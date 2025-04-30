import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MapPin, Send } from 'lucide-react';
import React from 'react';

const HeroDriver = () => {
  const logoUrl = "/up.webp"; // URL of the logo image
  const whatsappNumber = "5515996709113"; // Formatted for WhatsApp link
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá Paulo, gostaria de solicitar um orçamento.")}`;

  return (
    <section id="inicio" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
          <motion.div 
            className="flex flex-col justify-center space-y-4 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Motorista Paulo Arruda
              </h1>
              <p className="inline-flex items-center justify-center lg:justify-start text-primary font-semibold">
                <MapPin className="mr-2 h-5 w-5" /> Laranjal Paulista - SP
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                Seu motorista particular de confiança para viagens seguras e confortáveis. Atendo pequenas e grandes distâncias, com meu carro ou o seu.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Button asChild size="lg" className="button-whatsapp px-8 py-3">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento <Send className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={logoUrl}
              alt="Logo Paulo Arruda"
              className="mx-auto overflow-hidden rounded-lg max-w-full object-contain sm:max-w-[400px] md:max-w-[500px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroDriver;
