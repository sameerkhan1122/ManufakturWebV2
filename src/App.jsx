import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ShoppingCart, Menu, X, Check, Globe, Search, FlaskConical, ArrowLeft, MessageSquare, Building2 } from 'lucide-react';
import logoJPEG from './assets/logo.jpeg';
import productionVID from './assets/production.mp4';

const products = [
  { id: 'TR2', category: 'GLP-1', name: 'Tirzepatide', specs: '2mg/vial*10 vials', price: 29 },
  { id: 'TR5', category: 'GLP-1', name: 'Tirzepatide', specs: '5mg/vial*10 vials', price: 29 },
  { id: 'TR10', category: 'GLP-1', name: 'Tirzepatide', specs: '10mg/vial*10 vials', price: 40 },
  { id: 'TR15', category: 'GLP-1', name: 'Tirzepatide', specs: '15mg/vial*10 vials', price: 55 },
  { id: 'TR20', category: 'GLP-1', name: 'Tirzepatide', specs: '20mg/vial*10 vials', price: 66 },
  { id: 'RT2', category: 'GLP-1', name: 'Retatrutide', specs: '2mg/vial*10 vials', price: 33 },
  { id: 'RT5', category: 'GLP-1', name: 'Retatrutide', specs: '5mg/vial*10 vials', price: 33 },
  { id: 'RT10', category: 'GLP-1', name: 'Retatrutide', specs: '10mg/vial*10 vials', price: 47 },
  { id: 'CU50', category: 'Peptides', name: 'GHK-CU', specs: '50mg/vial*10 vials', price: 18 },
  { id: 'CU100', category: 'Peptides', name: 'GHK-CU', specs: '100mg/vial*10 vials', price: 25 },
  { id: 'SM2', category: 'GLP-1', name: 'Semaglutide', specs: '2mg/vial*10 vials', price: 29 },
  { id: 'SM5', category: 'GLP-1', name: 'Semaglutide', specs: '5mg/vial*10 vials', price: 29 },
  { id: 'SM10', category: 'GLP-1', name: 'Semaglutide', specs: '10mg/vial*10 vials', price: 40 },
  { id: 'BC2', category: 'Peptides', name: 'BPC 157', specs: '2mg/vial*10 vials', price: 22 },
  { id: 'BC5', category: 'Peptides', name: 'BPC 157', specs: '5mg/vial*10 vials', price: 35 },
  { id: 'BC10', category: 'Peptides', name: 'BPC 157', specs: '10mg/vial*10 vials', price: 55 },
  { id: 'BT2', category: 'Peptides', name: 'TB 500 (Thymosin B4 AceTate)', specs: '2mg/vial*10 vials', price: 35 },
  { id: 'BT5', category: 'Peptides', name: 'TB 500 (Thymosin B4 AceTate)', specs: '5mg/vial*10 vials', price: 66 },
  { id: 'H10', category: 'HGH', name: 'HGH 191 AA 97%', specs: '10iu/vial*10 vials', price: 46 },
  { id: 'H12', category: 'HGH', name: 'HGH 191 AA 97%', specs: '12iu/vial*10 vials', price: 62 },
  { id: 'HC1000', category: 'Peptides', name: 'HCG', specs: '1000iu/vial*10 vials', price: 40 },
  { id: 'HC5000', category: 'Peptides', name: 'HCG', specs: '5000iu/vial*10 vials', price: 96 },
  { id: 'CD2', category: 'Peptides', name: 'CJC 1295 DAC', specs: '2mg/vial*10 vials', price: 37 },
  { id: 'CND2', category: 'Peptides', name: 'CJC 1295 NO DAC', specs: '2mg/vial*10 vials', price: 37 },
  { id: 'IP2', category: 'Peptides', name: 'Ipamorelin', specs: '2mg/vial*10 vials', price: 22 },
  { id: 'IP10', category: 'Peptides', name: 'Ipamorelin', specs: '10mg/vial*10 vials', price: 55 },
  { id: 'TSM2', category: 'Peptides', name: 'Tesamorelin', specs: '2mg/vial*10 vials', price: 39 },
  { id: 'TSM10', category: 'Peptides', name: 'Tesamorelin', specs: '10mg/vial*10 vials', price: 132 },
  { id: 'G22', category: 'Peptides', name: 'GHRP-2', specs: '2mg/vial*10 vials', price: 21 },
  { id: 'G65', category: 'Peptides', name: 'GHRP-6', specs: '5mg/vial*10 vials', price: 26 },
  { id: 'BA3', category: 'Essentials', name: 'Bac water', specs: '3ml', price: 7 },
  { id: 'BA10', category: 'Essentials', name: 'Bac water', specs: '10ml', price: 11 },
  { id: 'jint', category: 'HGH', name: 'JINTROPIN', specs: '10iu/vial*10 vials', price: 65 },
  { id: 'hyge', category: 'HGH', name: 'HYGETROPIN', specs: '10iu/vial*10 vials', price: 65 }
];

const popularNames = [
  "Tirzepatide", "Retatrutide", "Semaglutide", "GHK-CU", "BPC 157", 
  "TB 500 (Thymosin B4 AceTate)", "HGH 191 AA 97%", "HCG", "CJC 1295 DAC", 
  "CJC 1295 NO DAC", "Ipamorelin", "Tesamorelin", "GHRP-2", "GHRP-6", 
  "JINTROPIN", "HYGETROPIN", "Bac water"
];

const t = {
  en: {
    hero: "Advanced Peptide & HGH Manufacturing",
    subhero: "Direct manufacturer without middlemen. Expanding from South America to Europe.",
    shop: "Our Catalog",
    about: "About Us",
    contact: "Contact Us",
    cart: "Cart",
    checkout: "Proceed to Checkout via WhatsApp",
    total: "Total",
    empty: "Your cart is empty",
    addToCart: "Add to Cart",
    disclaimer: "For research purposes only. Not for human consumption.",
    search: "Search products...",
    address: "Guangzhou, Guangdong, China / South America Operations",
    rights: "All rights reserved.",
    viewOptions: "View Options",
    optionsAvailable: "variants available",
    startingAt: "Starting at",
    dosage: "Select Dosage / Size",
    quantity: "Quantity",
    backToCatalog: "Back to Catalog",
    aboutTitle: "Direct Manufacturing Without Middlemen",
    aboutText1: "Manufaktur is a premier direct manufacturing facility. Operating completely without intermediaries, we ensure unmatched quality control and direct factory pricing.",
    aboutText2: "Having established a dominant and trusted market presence across South America, we are now expanding our high-grade supply chain directly into the European market.",
    contactTitle: "Get in Touch With Us",
    contactSub: "Our team is ready to assist you with any inquiries and orders.",
    whatsappLabel: "WhatsApp Direct Chat",
    facilityMediaTitle: "Inside Our Facility: Production & Cleanrooms",
    remove: "Remove"
  },
  de: {
    hero: "Direkte Peptid- & HGH-Manufaktur",
    subhero: "Ohne Zwischenmann. Erfolgreich in Südamerika etabliert, jetzt neu in Europa.",
    shop: "Unser Katalog",
    about: "Über uns",
    contact: "Kontakt",
    cart: "Warenkorb",
    checkout: "Zur Kasse via WhatsApp",
    total: "Gesamt",
    empty: "Ihr Warenkorb ist leer",
    addToCart: "In den Warenkorb",
    disclaimer: "Nur für Forschungszwecke. Nicht für den menschlichen Verzehr bestimmt.",
    search: "Produkte suchen...",
    address: "Südamerika Operations / Europa Expansion",
    rights: "Alle Rechte vorbehalten.",
    viewOptions: "Optionen ansehen",
    optionsAvailable: "Varianten verfügbar",
    startingAt: "Ab",
    dosage: "Dosierung / Größe wählen",
    quantity: "Menge",
    backToCatalog: "Zurück zum Katalog",
    aboutTitle: "Direkte Manufaktur Ohne Zwischenmann",
    aboutText1: "Manufaktur ist eine direkte Produktionsstätte ohne Zwischenhändler. Wir garantieren höchste Qualitätsstandards und direkte Fabrikpreise.",
    aboutText2: "Nachdem wir uns in Südamerika bereits fest als verlässlicher Partner etabliert haben, expandieren wir nun gezielt auf den europäischen Markt.",
    contactTitle: "Kontaktieren Sie Uns",
    contactSub: "Unser Team steht für jegliche Rückfragen und Bestellungen bereit.",
    whatsappLabel: "WhatsApp Direkt-Chat",
    facilityMediaTitle: "Einblicke in Unsere Produktion & Reinräume",
    remove: "Entfernen"
  }
};

const groupedProductsList = Object.values(products.reduce((acc, p) => {
  if (!acc[p.name]) {
    acc[p.name] = {
      id: p.name.replace(/\s+/g, '-').toLowerCase(),
      name: p.name,
      category: p.category,
      variants: []
    };
  }
  acc[p.name].variants.push(p);
  return acc;
}, {}));

groupedProductsList.forEach(gp => gp.variants.sort((a, b) => a.price - b.price));
groupedProductsList.sort((a, b) => {
  const indexA = popularNames.indexOf(a.name);
  const indexB = popularNames.indexOf(b.name);
  if (indexA !== -1 && indexB !== -1) return indexA - indexB;
  if (indexA !== -1) return -1;
  if (indexB !== -1) return 1;
  return a.name.localeCompare(b.name);
});

const VialGraphic = ({ name, size = "md" }) => {
  const isLarge = size === "lg";
  return (
    <div className={`relative flex items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 overflow-hidden ${isLarge ? 'w-full h-64 rounded-2xl' : 'w-full h-48 rounded-xl'}`}>
      <svg className={`${isLarge ? 'w-36 h-52' : 'w-24 h-36'} drop-shadow-md z-10`} viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="35" y="5" width="30" height="15" rx="3" fill="#334155" />
        <rect x="38" y="20" width="24" height="8" fill="#64748b" />
        <rect x="15" y="28" width="70" height="115" rx="10" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
        <rect x="20" y="45" width="60" height="85" rx="4" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="20" y="45" width="60" height="20" rx="4" fill="#1d4ed8" />
        <text x="50" y="58" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle">MANUFAKTUR</text>
        <foreignObject x="22" y="70" width="56" height="55">
          <div xmlns="http://www.w3.org/1999/xhtml" className="flex items-center justify-center h-full text-center px-1">
            <span className="text-[9px] font-extrabold text-slate-800 leading-tight uppercase line-clamp-3">
              {name}
            </span>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('en'); // Default language set to English
  const [search, setSearch] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('home');
  const searchRef = useRef(null);

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const [activeProduct, setActiveProduct] = useState(null); 
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const content = t[lang] || t.en;

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    return groupedProductsList.filter(gp => 
      gp.name.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 6);
  }, [search]);

  const filteredProducts = useMemo(() => {
    return groupedProductsList.filter(gp => {
      return gp.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsSearchOpen(false);
    setIsMobileSearchOpen(false);
    setActiveProduct(null);
    setCurrentTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setActiveProduct(null);
    setCurrentTab('home');
    setSearch('');
    setIsMobileSearchOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProductFromDropdown = (group) => {
    setSearch('');
    setIsSearchOpen(false);
    setIsMobileSearchOpen(false);
    setCurrentTab('home');
    setActiveProduct(group);
    setSelectedVariant(group.variants[0]);
    setSelectedQuantity(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + quantity } : item);
      }
      return [...prev, { ...product, qty: quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    let message = "Hello, I would like to buy the following products:\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.specs}) - Qty: ${item.qty} - Price: $${item.price * item.qty}\n`;
    });
    message += `\nTotal: $${cartTotal}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/85244217796?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 flex flex-col justify-between">
      <div>
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center gap-2 sm:gap-4">
              <a href="#" onClick={handleLogoClick} className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="bg-blue-700 p-2 rounded-lg">
                  <FlaskConical className="text-white" size={24} />
                </div>
                <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">MANUFAKTUR</span>
              </a>
              
              {/* Desktop Search Bar */}
              <div className="flex-1 max-w-md mx-4 hidden md:block relative" ref={searchRef}>
                <form onSubmit={handleSearchSubmit} className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-slate-400" />
                  </div>
                  <input
                    type="text"
                    placeholder={content.search}
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setIsSearchOpen(true);
                    }}
                    onFocus={() => setIsSearchOpen(true)}
                    className="block w-full pl-10 pr-10 py-2 border border-slate-300 rounded-full leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-700 focus:border-blue-700 sm:text-sm transition-all"
                  />
                  <button type="submit" className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-blue-700">
                    <Search size={16} />
                  </button>
                </form>

                {isSearchOpen && search.trim().length > 0 && (
                  <div className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50">
                    {searchResults.length > 0 ? (
                      <ul>
                        {searchResults.map((group) => (
                          <li key={group.id}>
                            <button
                              type="button"
                              onClick={() => handleSelectProductFromDropdown(group)}
                              className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center justify-between border-b border-slate-100 last:border-none"
                            >
                              <span className="font-semibold text-slate-900">{group.name}</span>
                              <span className="text-xs text-blue-700 font-medium bg-blue-50 px-2 py-1 rounded">
                                {group.variants.length} {content.optionsAvailable}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="p-4 text-center text-slate-500 text-sm">
                        No results found
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Desktop Nav Items */}
              <div className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={() => { setActiveProduct(null); setCurrentTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`font-medium transition-colors ${currentTab === 'home' && !activeProduct ? 'text-blue-700 font-bold' : 'text-slate-600 hover:text-blue-700'}`}
                >
                  {content.shop}
                </button>
                <button 
                  onClick={() => { setActiveProduct(null); setCurrentTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`font-medium transition-colors ${currentTab === 'about' ? 'text-blue-700 font-bold' : 'text-slate-600 hover:text-blue-700'}`}
                >
                  {content.about}
                </button>
                <button 
                  onClick={() => { setActiveProduct(null); setCurrentTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`font-medium transition-colors ${currentTab === 'contact' ? 'text-blue-700 font-bold' : 'text-slate-600 hover:text-blue-700'}`}
                >
                  {content.contact}
                </button>
                
                <div className="relative">
                  <button 
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className="flex items-center gap-2 text-slate-600 hover:text-blue-700 font-medium focus:outline-none transition-colors"
                  >
                    <Globe size={18} />
                    {lang.toUpperCase()}
                  </button>
                  
                  {isLangMenuOpen && (
                    <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg border border-slate-100 py-1 z-50">
                      {Object.keys(t).map((l) => (
                        <button
                          key={l}
                          onClick={() => { setLang(l); setIsLangMenuOpen(false); }}
                          className={`block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors ${lang === l ? 'font-bold text-blue-700' : 'text-slate-700'}`}
                        >
                          {l.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-2 text-slate-600 hover:text-blue-700 transition-colors"
                >
                  <ShoppingCart size={24} />
                  {cartItemCount > 0 && (
                    <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                      {cartItemCount}
                    </span>
                  )}
                </button>
              </div>

              {/* Mobile Header Controls */}
              <div className="md:hidden flex items-center gap-2">
                <button 
                  onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                  className="p-2 text-slate-600 hover:text-blue-700"
                >
                  <Search size={22} />
                </button>
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-2 text-slate-600 hover:text-blue-700"
                >
                  <ShoppingCart size={24} />
                  {cartItemCount > 0 && (
                    <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </button>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
                  {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
              </div>
            </div>
          </div>

          {/* Expandable Mobile Search Bar */}
          {isMobileSearchOpen && (
            <div className="md:hidden px-4 pb-4 bg-white border-b border-slate-100">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder={content.search}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-full text-sm bg-slate-50 focus:outline-none focus:ring-1 focus:ring-blue-700"
                />
                <Search size={18} className="absolute left-3 top-2.5 text-slate-400" />
              </form>
            </div>
          )}

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-lg">
              <button 
                onClick={() => { setActiveProduct(null); setCurrentTab('home'); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`block w-full text-left font-medium py-2 ${currentTab === 'home' && !activeProduct ? 'text-blue-700 font-bold' : 'text-slate-700'}`}
              >
                {content.shop}
              </button>
              <button 
                onClick={() => { setActiveProduct(null); setCurrentTab('about'); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`block w-full text-left font-medium py-2 ${currentTab === 'about' ? 'text-blue-700 font-bold' : 'text-slate-700'}`}
              >
                {content.about}
              </button>
              <button 
                onClick={() => { setActiveProduct(null); setCurrentTab('contact'); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`block w-full text-left font-medium py-2 ${currentTab === 'contact' ? 'text-blue-700 font-bold' : 'text-slate-700'}`}
              >
                {content.contact}
              </button>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">Language</span>
                <div className="flex gap-2">
                  {Object.keys(t).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setIsMobileMenuOpen(false); }}
                      className={`px-3 py-1 text-sm rounded ${lang === l ? 'bg-blue-700 text-white font-bold' : 'bg-slate-100 text-slate-700'}`}
                    >
                      {l.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>

        {currentTab === 'home' && !activeProduct && !search.trim() && (
          <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center md:text-left max-w-3xl">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                  {content.hero}
                </h1>
                <p className="text-base sm:text-xl text-slate-300 mb-8">
                  {content.subhero}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a href="#catalog" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-colors text-center shadow-lg">
                    {content.shop}
                  </a>
                  <button onClick={() => { setCurrentTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-lg transition-colors border border-slate-700">
                    {content.about}
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        <main id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {currentTab === 'about' ? (
            <div className="max-w-4xl mx-auto py-8">
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">{content.aboutTitle}</h1>
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">{content.aboutText1}</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-12 mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-700">
                    <Building2 size={28} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Direct Expansion into Europe</h2>
                    <p className="text-xs sm:text-sm text-slate-500">From South America to the global market</p>
                  </div>
                </div>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">{content.aboutText2}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center">{content.facilityMediaTitle}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm overflow-hidden">
                    <img src={logoJPEG} alt="Manufaktur Facility" className="w-full h-56 object-cover rounded-xl mb-3 shadow" />
                    <span className="text-slate-700 font-semibold text-sm">Manufaktur Facility & Logo</span>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm overflow-hidden">
                    <video src={productionVID} autoPlay loop muted playsInline className="w-full h-56 object-cover rounded-xl mb-3 shadow" />
                    <span className="text-slate-700 font-semibold text-sm">Cleanroom Synthesis & Production</span>
                  </div>
                </div>
              </div>
            </div>
          ) : currentTab === 'contact' ? (
            <div className="max-w-xl mx-auto py-8">
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">{content.contactTitle}</h1>
                <p className="text-base sm:text-lg text-slate-600">{content.contactSub}</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col items-center text-center">
                <div className="bg-green-50 p-4 rounded-full text-green-600 mb-4"><MessageSquare size={28} /></div>
                <h3 className="font-bold text-slate-900 mb-2">{content.whatsappLabel}</h3>
                <a href="https://wa.me/85244217796" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline text-lg">+852 4421 7796</a>
              </div>
            </div>
          ) : !activeProduct ? (
            <>
              <div className="flex items-center justify-between mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{content.shop}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(group => (
                  <div key={group.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                    <div className="cursor-pointer" onClick={() => { setActiveProduct(group); setSelectedVariant(group.variants[0]); setSelectedQuantity(1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                      <VialGraphic name={group.name} size="md" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{group.name}</h3>
                      <p className="text-sm text-slate-500 mb-4">{group.variants.length} {content.optionsAvailable}</p>
                      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="text-sm font-medium text-slate-500">
                          {content.startingAt} <br/><span className="text-xl font-extrabold text-blue-700">${group.variants[0].price}</span>
                        </div>
                        <button onClick={() => { setActiveProduct(group); setSelectedVariant(group.variants[0]); setSelectedQuantity(1); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="px-3 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-600 hover:text-white transition-colors text-sm font-semibold">
                          {content.viewOptions}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="mb-6 sm:mb-8">
                <button onClick={() => setActiveProduct(null)} className="inline-flex items-center gap-2 text-white font-bold bg-blue-700 hover:bg-blue-800 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all shadow-md text-sm sm:text-base">
                  <ArrowLeft size={18} />
                  {content.backToCatalog}
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-slate-50 p-6 sm:p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-200">
                  <div className="w-full max-w-sm"><VialGraphic name={activeProduct.name} size="lg" /></div>
                </div>
                <div className="md:w-1/2 p-6 sm:p-10 flex flex-col">
                  <div className="uppercase tracking-wide text-xs font-bold text-blue-700 mb-2">{activeProduct.category}</div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">{activeProduct.name}</h2>
                  <p className="text-slate-500 text-sm sm:text-base mb-6 sm:mb-8">{content.disclaimer}</p>
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">{content.dosage}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeProduct.variants.map(variant => (
                        <button key={variant.id} onClick={() => setSelectedVariant(variant)} className={`text-left p-3 rounded-lg border-2 transition-all ${selectedVariant?.id === variant.id ? 'border-blue-700 bg-blue-50' : 'border-slate-200'}`}>
                          <div className="font-semibold text-slate-900 text-sm sm:text-base">{variant.specs.split('*')[0].trim()}</div>
                          <div className="text-xs sm:text-sm text-slate-500 mt-1 flex justify-between">
                            <span>{variant.specs.split('*')[1]?.trim() || variant.specs}</span>
                            <span className="font-bold text-blue-700">${variant.price}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-end sm:items-center gap-6">
                    <div className="w-full sm:flex-1">
                      <div className="text-sm text-slate-500 mb-2">{content.total}: <span className="font-bold text-xl text-slate-900">${(selectedVariant?.price || 0) * selectedQuantity}</span></div>
                      <button onClick={() => addToCart(selectedVariant, selectedQuantity)} className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-800 transition-colors">
                        <ShoppingCart size={20} />
                        {content.addToCart}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      </div>

      <footer className="bg-slate-900 text-slate-400 py-10 sm:py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xl font-bold text-white">MANUFAKTUR</span>
          <p className="text-xs sm:text-sm">© {new Date().getFullYear()} Manufaktur B2B. {content.rights}</p>
        </div>
      </footer>

      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col">
            <div className="p-5 sm:p-6 border-b flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold">{content.cart} ({cartItemCount})</h2>
              <button onClick={() => setIsCartOpen(false)}><X size={20} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b pb-4">
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">{item.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-500">{item.specs} x {item.qty}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-sm sm:text-base">${item.price * item.qty}</span>
                    <button onClick={() => removeFromCart(item.id)} className="block text-xs text-red-500 mt-1">{content.remove}</button>
                  </div>
                </div>
              ))}
            </div>
            {cart.length > 0 && (
              <div className="p-5 sm:p-6 border-t bg-slate-50">
                <div className="flex justify-between font-bold text-base sm:text-lg mb-4"><span>Total:</span><span>${cartTotal}</span></div>
                <button onClick={handleWhatsAppCheckout} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors shadow-lg text-sm sm:text-base">
                  <MessageSquare size={20} />
                  {content.checkout}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
