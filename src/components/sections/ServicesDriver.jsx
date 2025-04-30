
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Car, Stethoscope, Calendar, Plane, ShoppingBag, Users } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.2 }}
      className="h-full"
    >
      <Card className="h-full text-center bg-card border shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="items-center">
          <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

const ServicesDriver = () => {
  const services = [
    { icon: Car, title: "Viagens Diversas", description: "Transporte para qualquer necessidade, curtas ou longas distâncias.", delay: 0.1 },
    { icon: Stethoscope, title: "Consultas e Exames", description: "Levo e trago de consultas e exames médicos com pontualidade.", delay: 0.2 },
    { icon: Calendar, title: "Eventos", description: "Transporte para festas, casamentos, shows e outros eventos.", delay: 0.3 },
    { icon: Plane, title: "Aeroportos", description: "Viagens para embarque e desembarque nos principais aeroportos.", delay: 0.4 },
    { icon: ShoppingBag, title: "Compras e Entregas", description: "Auxílio com compras ou transporte de pequenas encomendas.", delay: 0.5 },
    { icon: Users, title: "Grupos Pequenos", description: "Transporte para pequenos grupos com conforto e segurança.", delay: 0.6 },
  ];

  return (
    <section id="servicos" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-4 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Serviços de <span className="text-primary">Transporte</span>
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground text-center mb-10 md:mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Conte comigo para suas necessidades de transporte em Laranjal Paulista e região.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDriver;
  