
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import HeaderDriver from '@/components/layout/HeaderDriver';
import HeroDriver from '@/components/sections/HeroDriver';
import ServicesDriver from '@/components/sections/ServicesDriver';
import AboutDriver from '@/components/sections/AboutDriver';
import CTADriver from '@/components/sections/CTADriver';
import FooterDriver from '@/components/layout/FooterDriver';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster />
      <HeaderDriver />
      <main className="flex-grow">
        <HeroDriver />
        <ServicesDriver />
        <AboutDriver />
        <CTADriver />
      </main>
      <FooterDriver />
    </div>
  );
};

export default App;
  