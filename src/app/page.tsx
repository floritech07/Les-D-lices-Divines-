'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import menuData from '@/data/menu.json';

// --- ICONS & ASSETS ---
const icons = {
  basket: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>,
  search: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
  whatsapp: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>,
  facebook: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
  instagram: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
  phone: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
  arrowLeft: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>,
  arrowRight: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
};

const serviceFeatures = [
  { icon: '📱', title: 'Commande WhatsApp', desc: 'Simple & Rapide' },
  { icon: '🛵', title: 'Livraison Express', desc: 'Moins de 45 min' },
  { icon: '👨‍🍳', title: 'Fait Maison', desc: 'Ingrédients Frais' },
  { icon: '⭐', title: 'Service Premium', desc: 'Satisfaction 100%' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('Tout');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerScreen, setItemsPerScreen] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerScreen(3);
      else if (window.innerWidth >= 768) setItemsPerScreen(2);
      else setItemsPerScreen(1);
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const popularDishes = menuData.menu.filter(d => d.popular);

  const tabs = ['Tout', 'Amuse-gueules', 'Entrées', 'Plats Résistants', 'Accompagnements', 'Desserts', 'Boissons'];

  // Categories for the orbit menu
  const orbitItems = [
    { label: 'Entrées', icon: '🥗', pos: 'orbit-1' },
    { label: 'Plats', icon: '🍲', pos: 'orbit-2' },
    { label: 'Desserts', icon: '🧁', pos: 'orbit-3' },
    { label: 'Boissons', icon: '🍹', pos: 'orbit-4' },
  ];
  // WhatsApp Helpers
  const getWhatsAppLink = (message: string) =>
    `https://wa.me/${menuData.contact.whatsapp}?text=${encodeURIComponent(message)}`;

  // Filter Logic
  const filteredDishes = activeTab === 'Tout'
    ? menuData.menu
    : menuData.menu.filter(d => d.category === activeTab);

  return (
    <div className="min-h-screen pb-0 overflow-x-hidden flex flex-col font-main bg-[var(--color-bg)]">

      {/* --- NAVBAR --- */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between relative z-50">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tight">
          <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-xl shadow-gold">
            D
          </span>
          Délices Divines<span className="text-primary">.</span>
        </div>

        <div className="hidden lg:flex gap-10 font-medium text-gray-500">
          <a href="#" className="text-black font-semibold">Accueil</a>
          <a href="#menu" className="hover:text-primary transition-colors">Notre Carte</a>
          <a href="#about" className="hover:text-primary transition-colors">À Propos</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={getWhatsAppLink('Bonjour, je souhaite réserver une table.')}
            className="hidden sm:flex btn bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-gold hover:scale-105 transition-transform"
          >
            Réserver
          </a>
          <button className="lg:hidden p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="container mx-auto px-6 mt-8 lg:mt-16 mb-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">

          <div className="lg:w-1/2 mb-16 lg:mb-0 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-yellow-100 text-primary font-bold rounded-full text-sm mb-6 animate-fade-in-up">
              🚀 Livraison rapide à Cotonou
            </div>
            <h1 className="text-5xl lg:text-7xl mb-8 leading-[1.1] font-bold text-gray-900 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              L'Excellence <br />
              Dans Votre <span className="text-primary inline-block transform -rotate-2">Assiette</span> 😋
            </h1>
            <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Découvrez une gastronomie raffinée, préparée avec passion.
              Commandez vos plats préférés simplement via WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a href="#menu" className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-gold hover:translate-y-[-2px] transition-transform">
                Voir le Menu
              </a>
              <a href={getWhatsAppLink('Bonjour, quels sont les plats du jour ?')} className="px-8 py-4 rounded-full font-bold border border-gray-200 hover:border-black transition-colors flex items-center justify-center gap-2 bg-white">
                {icons.whatsapp} Commander
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="hero-circle-wrapper relative w-[350px] h-[350px] lg:w-[550px] lg:h-[550px]">
              {/* Background Blob */}
              <div className="absolute inset-0 bg-white rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.05)] scale-90 z-0"></div>

              {/* Main Image */}
              <div className="absolute inset-6 rounded-full overflow-hidden shadow-2xl z-10 bg-gray-100">
                {/* Fallback image logic handled by Next.js or just hardcode a known good one */}
                <Image
                  src="/images/gambas_royales.jpg"
                  alt="Plat Signature"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-1000"
                />
              </div>

              {/* Orbital Elements */}
              <div className="orbit-item orbit-1 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-2xl">🍤</span> Grillades
              </div>
              <div className="orbit-item orbit-2 animate-bounce" style={{ animationDuration: '4s' }}>
                <span className="text-2xl">🍹</span> Cocktails
              </div>
              <div className="orbit-item orbit-3 animate-bounce" style={{ animationDuration: '3.5s' }}>
                <span className="text-2xl">🍔</span> Gourmet
                <span className="text-2xl">🍰</span> Desserts
              </div>
              <div className="orbit-item orbit-4 animate-bounce" style={{ animationDuration: '4.5s' }}>
                <span className="text-2xl">🍹</span> Boissons
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (New Section) --- */}
      <section className="container mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Commandez Simple & Rapide</h2>
          <p className="text-gray-500">Votre repas d'exception en 3 étapes</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 relative">
          {/* Connecting Line (Hidden on mobile) */}
          <div className="hidden md:block absolute top-1/2 left-20 right-20 h-1 bg-yellow-100 -z-10 transform -translate-y-1/2"></div>

          {[
            { step: '01', title: 'Choisissez', desc: 'Parcourez notre carte divine', icon: '👀' },
            { step: '02', title: 'Cliquez', desc: 'Commande directe sur WhatsApp', icon: '📱' },
            { step: '03', title: 'Savourez', desc: 'Livraison express chez vous', icon: '😋' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center bg-white p-8 rounded-[30px] shadow-sm hover:shadow-card transition-all w-full md:w-1/3 max-w-sm">
              <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center text-2xl mb-6 font-bold text-primary border-4 border-white shadow-sm relative">
                {item.icon}
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
                  {item.step}
                </span>
              </div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-400 text-center text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- POPULAR CARDS (Horizontal Scroll) --- */}
      <section className="container mx-auto px-6 mb-32 overflow-hidden">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Nos Favoris</h4>
            <h2 className="text-4xl font-bold">Plats Populaires</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black hover:text-white'}`}
            >
              {icons.arrowLeft || "←"}
            </button>
            <button
              onClick={() => setCurrentSlide(Math.min(popularDishes.length - itemsPerScreen, currentSlide + 1))}
              disabled={currentSlide >= popularDishes.length - itemsPerScreen}
              className={`w-12 h-12 rounded-full bg-primary text-white shadow-gold flex items-center justify-center transition-transform ${currentSlide >= popularDishes.length - itemsPerScreen ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
            >
              {icons.arrowRight || "→"}
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / itemsPerScreen)}%)`,
              gap: '2rem'
            }}
          >
            {popularDishes.map((dish) => (
              <div
                key={dish.id}
                className="flex-shrink-0"
                style={{ width: `calc((100% - ${(itemsPerScreen - 1) * 2}rem) / ${itemsPerScreen})` }}
              >
                <div className="ref-card group bg-white p-6 rounded-[30px] rounded-br-[10px] hover:shadow-card transition-all duration-300 border border-transparent hover:border-gray-50 relative top-0 hover:-top-2 h-full">
                  <div className="relative w-40 h-40 mx-auto -mt-12 mb-6 rounded-full overflow-hidden shadow-lg ring-4 ring-white">
                    {dish.image ? (
                      <Image src={dish.image} alt={dish.name} fill className="object-cover group-hover:scale-110 transition-transform" />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-4xl">🍽️</div>
                    )}
                  </div>

                  <div className="text-center flex flex-col h-[calc(100%-140px)]">
                    <h3 className="font-bold text-lg mb-2 line-clamp-1">{dish.name}</h3>
                    <div className="text-primary text-sm mb-4">★★★★★</div>
                    <p className="text-sm text-gray-400 mb-6 line-clamp-2 px-2 flex-grow">{dish.description}</p>

                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
                      <span className="font-bold text-lg text-gray-900">
                        {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF', minimumFractionDigits: 0 }).format(dish.price)}
                      </span>
                      <a href={getWhatsAppLink(`Je commande : ${dish.name}`)} className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-primary transition-colors">
                        +
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BANNER (Reservation) --- */}
      <section className="container mx-auto px-6 mb-32">
        <div className="bg-[#FFF4D9] rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">
          <div className="z-10 lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Un Dîner d'Exception ? <br />
              Réservez Votre Table.
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Profitez d'un cadre unique et d'un service attentionné.
              Pour les occasions spéciales ou le plaisir du quotidien.
            </p>
            <a href={getWhatsAppLink('Je souhaite réserver une table')} className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold shadow-gold hover:shadow-lg transition-transform hover:-translate-y-1">
              Réserver par WhatsApp
            </a>
          </div>

          <div className="mt-12 lg:mt-0 lg:w-5/12 relative">
            <div className="aspect-square relative rounded-full border-[8px] border-white shadow-2xl overflow-hidden bg-white rotate-3 hover:rotate-0 transition-transform duration-700">
              <Image src="/images/signature_cocktail.jpg" alt="Cocktail Divin" fill className="object-cover" />
            </div>
            {/* Decorative abstract lines */}
            <div className="absolute -inset-10 border border-primary/20 rounded-full z-[-1] scale-110"></div>
          </div>
        </div>
      </section>

      {/* --- MENU GRID --- */}
      <section id="menu" className="container mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Notre Menu Complet</h4>
          <h2 className="text-4xl font-bold mb-8">Découvrez Nos Créations</h2>

          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === tab
                  ? 'bg-primary text-white shadow-gold'
                  : 'bg-white border border-gray-200 text-gray-500 hover:border-black hover:text-black'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => (
            <div key={dish.id} className="flex gap-4 p-5 bg-white rounded-[24px] hover:shadow-xl transition-all border border-gray-100 hover:border-primary/20 group">
              <div className="w-28 h-28 flex-shrink-0 relative rounded-[20px] overflow-hidden bg-gray-100">
                {dish.image ? (
                  <Image src={dish.image} alt={dish.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl">🍽️</div>
                )}
              </div>
              <div className="flex flex-col justify-center w-full">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-lg mb-1 leading-tight">{dish.name}</h4>
                  <span className="text-xs font-bold bg-gray-100 px-2 py-1 rounded text-gray-500">{dish.category.split(' ')[0]}</span>
                </div>

                <p className="text-xs text-gray-400 line-clamp-2 mb-3">{dish.description}</p>

                <div className="flex justify-between items-end mt-auto">
                  <span className="font-bold text-xl text-primary">
                    {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF', minimumFractionDigits: 0 }).format(dish.price)}
                  </span>
                  <a
                    href={getWhatsAppLink(`Commande : ${dish.name}`)}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors text-sm"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section >

      {/* --- ABOUT US SECTION (New) --- */}
      <section id="about" className="container mx-auto px-6 mb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16 bg-white p-8 lg:p-16 rounded-[40px] shadow-sm">
          <div className="lg:w-1/2 relative h-[400px] w-full">
            <div className="absolute inset-0 rounded-[30px] overflow-hidden">
              <Image
                src="/images/gambas_royales.jpg"
                alt="Notre Chef"
                fill
                className="object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-full shadow-xl animate-bounce-slow">
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-primary flex items-center justify-center flex-col">
                <span className="font-bold text-2xl text-primary">10+</span>
                <span className="text-xs uppercase font-bold tracking-widest text-center">Années<br />Exp.</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Notre Histoire</h4>
            <h2 className="text-4xl font-bold mb-6">La Passion du Goût,<br />L'Art de Recevoir.</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Fondé par amour pour la gastronomie africaine et internationale, "Les Délices Divines" est bien plus qu'un restaurant.
              C'est un lieu de rencontre où chaque plat raconte une histoire, celle de produits frais sélectionnés avec rigueur et sublimés par nos chefs.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Que ce soit pour un déjeuner d'affaires rapide ou un dîner romantique, nous mettons un point d'honneur à transformer votre repas en un moment inoubliable.
            </p>

            <div className="flex gap-8">
              <div>
                <h5 className="font-bold text-xl mb-1">100%</h5>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Fait Maison</p>
              </div>
              <div>
                <h5 className="font-bold text-xl mb-1">24/7</h5>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Support Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER (Completed) --- */}
      < footer className="mt-auto bg-[#1a1a1a] text-white pt-20 pb-10 rounded-t-[40px] mx-2 lg:mx-6" >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 font-bold text-2xl mb-6">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">D</span>
                Délices Divines
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                L'art de la gastronomie livré chez vous.
                Une expérience culinaire unique, fraîche et savoureuse.
              </p>
              <div className="flex gap-4">
                <a href={`tel:${menuData.contact.phone}`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white/80 hover:text-white" aria-label="Appeler">
                  {icons.phone}
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white/80 hover:text-white" aria-label="Facebook">
                  {icons.facebook}
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white/80 hover:text-white" aria-label="Instagram">
                  {icons.instagram}
                </a>
                <a href={getWhatsAppLink("Bonjour !")} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white/80 hover:text-white" aria-label="WhatsApp">
                  {icons.whatsapp}
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Navigation</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white">Accueil</a></li>
                <li><a href="#menu" className="hover:text-white">Notre Menu</a></li>
                <li><a href="#about" className="hover:text-white">À Propos</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span>📍</span>
                  {menuData.contact.address}
                </li>
                <li className="flex items-center gap-3">
                  <span>📞</span>
                  {menuData.contact.phone}
                </li>
                <li className="flex items-center gap-3">
                  <span>✉️</span>
                  {menuData.contact.email}
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="font-bold text-lg mb-6">Horaires</h4>
              <div className="bg-white/5 p-6 rounded-2xl">
                <div className="flex justify-between mb-3">
                  <span className="text-gray-400">Lun - Dim</span>
                  <span className="font-bold text-primary">11h - 23h</span>
                </div>
                <div className="text-xs text-center text-gray-500 mt-4 pt-4 border-t border-white/10">
                  Ouvert les jours fériés
                </div>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            © 2026 Les Délices Divines. Tous droits réservés.
          </div>
        </div>
      </footer >

      {/* --- FLOAT WHATSAPP --- */}
      < a
        href={getWhatsAppLink('Bonjour !')}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform animate-bounce hover:animate-none"
        title="Discuter sur WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
      </a >

    </div >
  );
}
