
import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, Globe, Award } from 'lucide-react';

const AboutDriver = () => {
  return (
    <section id="sobre" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-10 md:mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por que escolher <span className="text-primary">Paulo Arruda</span>?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
             <Award className="h-12 w-12 text-primary mb-3" />
             <h3 className="text-xl font-semibold mb-2 text-foreground">Experiência</h3>
             <p className="text-muted-foreground">Motorista profissional desde 2018, garantindo viagens seguras e tranquilas.</p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
             <Globe className="h-12 w-12 text-primary mb-3" />
             <h3 className="text-xl font-semibold mb-2 text-foreground">Flexibilidade</h3>
             <p className="text-muted-foreground">Atendo pequenas e grandes distâncias, adaptando-me à sua necessidade.</p>
          </motion.div>
           <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <CheckSquare className="h-12 w-12 text-primary mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Opções de Veículo</h3>
            <p className="text-muted-foreground">Viagens realizadas com meu carro próprio ou com o veículo do cliente, conforme preferir.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDriver;
  