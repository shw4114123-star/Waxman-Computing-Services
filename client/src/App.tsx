import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ServicesSection from './components/ServicesSection/ServicesSection';
import QuoteCalculator from './components/QuoteCalculator/QuoteCalculator';
import EquipmentCatalog from './components/EquipmentCatalog/EquipmentCatalog';
import ContactAndTicket from './components/ContactAndTicket/ContactAndTicket';
import Footer from './components/Footer/Footer';

import { fetchServices, fetchProducts } from './services/api';
import { defaultServices, defaultProducts } from './data/defaultData';
import type { ServiceItem, ProductItem } from './types';
import './App.css';

export default function App() {
  const [services, setServices] = useState<ServiceItem[]>(defaultServices);
  const [products, setProducts] = useState<ProductItem[]>(defaultProducts);
  const [contactTab, setContactTab] = useState<'quote' | 'ticket'>('quote');
  const [prefilledInterest, setPrefilledInterest] = useState<string>('');

  useEffect(() => {
    fetchServices()
      .then((data) => {
        if (data && data.length > 0) setServices(data);
      })
      .catch((err) => console.log('Using default services data', err));

    fetchProducts()
      .then((data) => {
        if (data && data.length > 0) setProducts(data);
      })
      .catch((err) => console.log('Using default products data', err));
  }, []);

  const handleOpenTicket = () => {
    setContactTab('ticket');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectService = (slug: string) => {
    const service = services.find((s) => s.slug === slug);
    setContactTab('quote');
    setPrefilledInterest(`התעניינות בשירות: ${service ? service.title : slug}`);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectProduct = (productName: string) => {
    setContactTab('quote');
    setPrefilledInterest(`הצעת מחיר עבור: ${productName}`);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-layout" dir="rtl">
      <Navbar onOpenTicket={handleOpenTicket} />

      <main>
        <Hero
          onOpenTicket={handleOpenTicket}
          onOpenCalculator={handleOpenCalculator}
        />

        <ServicesSection
          services={services}
          onSelectService={handleSelectService}
        />

        <QuoteCalculator />

        <EquipmentCatalog
          products={products}
          onSelectProduct={handleSelectProduct}
        />

        <ContactAndTicket
          initialTab={contactTab}
          prefilledInterest={prefilledInterest}
        />
      </main>

      <Footer />
    </div>
  );
}
