
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { PhoneCall, Send } from 'lucide-react';
import React from 'react';

const CTADriver = () => {
  const whatsappNumber = "5515996709113";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá Paulo, gostaria de solicitar um orçamento.")}`;
  const phoneNumber = "+5515996709113"; // For tel: link

  return (
    <section id="contato" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Precisa de Transporte?
        </motion.h2>
        <motion.p 
          className="text-lg mb-8 max-w-xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Entre em contato agora mesmo para solicitar um orçamento sem compromisso. Estou à disposição para levar você ao seu destino!
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" className="button-whatsapp bg-white text-primary hover:bg-green-300/90 font-semibold px-8 py-3">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              WhatsApp <Send className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-400 font-semibold bg-primary px-8 py-3">
            <a href={`tel:${phoneNumber}`}>
              Ligar Agora <PhoneCall className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTADriver;
  