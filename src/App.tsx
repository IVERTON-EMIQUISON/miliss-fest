import React, { useState } from "react";
import {PartyPopper, Sparkles, Calendar, Users, Heart, Gift, Phone, Mail, Instagram, Facebook, Menu, X, Package, Boxes, Crown, Baby, Play} from 'lucide-react';
import { HeroCarousel } from "./components/HeroCarousel";
import { WhatsAppFloating } from "./components/WhatsAppFloating";
import { iframe } from "framer-motion/client";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null); // Estado para o vídeo selecionado
  const [formData, setFormData] = useState({ name: "",  eventType: "", message: "" });

type PartyType = {
  title: string;
  image?: string;
  price?: string;
  items?: string[];
};

const partyTypes: PartyType[] = [
  {
    
    title: " Kit 1 – Econômico",
    image: "/images/kits1.jpeg",
    price: "R$ 150",
    items: [
      "Painel redondo",
      "Trio de cilindros",
      "Tapete",
      "Capa painel redondo",
      "Trio de capas cilindros",
      "Bandejas e Jarro de flores"
    ]
  },
  {
   
    title: "Kit 2 – Custo-Benefício",
    image: "/images/kits2.jpeg",
    price: "R$ 170",
    items: [
      "Painel redondo",
      "Trio de cilindros",
      "Tapete",
      "Capa painel redondo",
      "Trio  de capas cilindros",
      "Escadinha",
      "Bandejas e jarro de flores."
    ]
  },
  {
    
    title: "Kit 3 – Médio",
    image: "/images/kits3.jpeg",
    price: "R$ 190",
    items: [
      "Painel redondo",
      "Painel romano",
      "trio de cilindros",
      "Tapete",
      "Capa painel redondo",
      "Capa painel romano",
      "Trio de capas cilindros",
      "Escadinha",
      "Bandeja e Jarro de flores",
      "Displays"
    ]
  },
  {
   
    title: "Kit 4 Intermediário",
    image: "/images/kits4.jpeg",
    price: "R$ 250",
    items: [
      "Painel redondo",
      "Painel romano",
      "Trio de cilindros",
      "Tapete",
      "Capa painel redondo",
      "Capa painel romano",
      "Trio de capas cilindros",
      "Escadinha",
      "Banco (opcional)",
      "Bandejas e jarro de flores",
      "Displays",
    ]
  },
  {
   
    title: "Kit 5 - Premium",
    image: "/images/kits5.jpeg",
    price: "R$ 300",
    items: [
      "Painel redondo",
      "Painel romano",
      "Trio de cilindros",
      "Tapete",
      "Capa painel redondo",
      "Capa painel romano",
      "Trio de capas cilindros",
      "Escadinha",
      "Banco (opcional)",
      "Mesa quadrada",
      "Bandejas e jarro de flores",
      "Displays",
    ]
  },
  
];
  const portfolio = [
    {
      image: "/images/festa1.jpeg",
     
    },
    {
      type: "video",
      src: "/images/video1.mp4",
   },
    {
      image: "/images/festa2.png",
    },
    {
      type: "video",
      src: "/images/video4.mp4",
    },
    {
      image: "/images/festa3.jpeg",
      title: "",
      category: ""
    },
    {
      image: "/images/festa4.jpeg",
      title: "",
      category: ""
    },
    {
      type: "video",
      src: "/images/video5.mp4",
    },
    {
      image: "/images/festa5.jpeg",
      title: "",
      category: ""
    },
    {
      type: "video",
      src: "/images/video.mp4",
    },
    {
      image: "/images/festa6.jpg",
      title: "",
    },
    {     
      type: "video",
      src: "/images/video3.mp4",   
    },
    {
      image: "/images/festa7.jpeg",
      title: "",
    },
    {
      type: "video",  
      src: "/images/video2.mp4",
    },
    {
      image: "/images/festa8.png",
    },
    {
      image: "/images/festa9.jpeg",
    
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    alert("Obrigado pelo contato! Retornaremos em breve.");
    setFormData({ name: "",  eventType: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <WhatsAppFloating />
      {/* Header/Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <PartyPopper className="w-8 h-8 text-[#FF1B8D]" />
              <span className="text-2xl font-bold text-[#1a1a2e]">Miliss Fest</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 dis">
              <a href="#home" className="text-[#1a1a2e] hover:text-[#FF1B8D] transition-colors">Início</a>
              <a href="#services" className="text-[#1a1a2e] hover:text-[#FF1B8D] transition-colors">Kits de festa</a> 
              <a href="#portfolio" className="text-[#1a1a2e] hover:text-[#FF1B8D] transition-colors">trabalhos</a>
              <a href="#contact" className="text-[#1a1a2e] hover:text-[#FF1B8D] transition-colors">Contato</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#1a1a2e]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-3 bg-centered border-t border-gray-200 text-center">
              <a href="#home" className="block text-[#1a1a2e] hover:text-[#FF1B8D] transition-colors">Início</a>
              <a href="#portfolio" className="block text-[#1a1a2e] hover:text-[#FF1B8D] transition-colors">Trabalhos</a>
              <a href="#services" className="block text-[#1a1a2e] hover:text-[#FF1B8D] transition-colors">Kits de festa</a>
              <a href="#contact" className="block text-[#1a1a2e] hover:text-[#FF1B8D] transition-colors">Contato</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFE5F1] via-white to-[#FFF4D6] opacity-50"></div>
        <div className="relative w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a2e] leading-tight">
                  Transformamos Sonhos em 
                  <span className="text-[#FF1B8D]"> Festas Inesquecíveis</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Organizamos eventos personalizados com dedicação, criatividade e atenção a cada detalhe para tornar seu momento único e especial.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#contact" 
                    className="bg-[#FF1B8D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e01678] transition-all hover:scale-105 shadow-lg"
                  >
                    Solicitar Orçamento
                  </a>
                  <a 
                    href="#portfolio" 
                    className="bg-white text-[#FF1B8D] px-8 py-3 rounded-full font-semibold border-2 border-[#FF1B8D] hover:bg-[#FFE5F1] transition-all"
                  >
                    Ver Trabalhos
                  </a>
                </div>
               
              </div>
              <div className="relative">
                <HeroCarousel />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                  <Sparkles className="w-8 h-8 text-[#FFB800] mb-2" />
                  <div className="font-bold text-[#1a1a2e]">Decorações Exclusivas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-[#FFE5F1]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
              Kits de Festa Personalizados
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o tipo de festa que deseja e deixe o resto conosco
            </p>
          </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partyTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 overflow-hidden flex flex-col"
            >
              <img
                src={type.image}
                alt={type.title}
                className="w-full h-400 object-cover"
              />

              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">
                  {type.title}
                </h3>

                <p className="text-xl font-bold text-[#FF1B8D] mb-4">
                  {type.price}
                </p>

                <span className="font-semibold text-[#1a1a2e] mb-2">Inclui:</span>

                <ul className="list-disc list-inside text-gray-600 mb-6">
                  {type.items?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                {/* BOTÃO SEMPRE EMBAIXO */}
                <a
                  href={`https://wa.me/5584998302660?text=Olá! Gostaria de reservar o ${type.title}`}
                  target="_blank"
                  className="mt-auto block text-center bg-[#25D366] text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
                >
                  Reservar no WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a2e] mb-4">Nossos Trabalhos</h2>
            <p className="text-xl text-gray-600"> Conheça alguns dos nossos trabalhos em decorações de festas personalizadas </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                onClick={() => item.type === "video" && setSelectedVideo(item.src)}
              >
                {item.type === "video" ? (
                  <div className="relative w-full h-80">
                   <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                      <div className="bg-white/90 p-4 rounded-full shadow-xl transform group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-[#FF1B8D] fill-[#FF1B8D]" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img src={item.image} alt={item.title} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <div className="text-sm font-semibold text-white/80 mb-1">{item.category}</div>
                  <div className="text-xl font-bold text-white">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedVideo && (
      <div className="fixed inset-0 z-[100]  bg-black/95 flex items-center justify-center">
        
        <button
          onClick={() => setSelectedVideo(null)}
           className="absolute top-4 right-4 z-10 text-white text-3xl"
        >
          ✕
        </button>
          <video
            src={selectedVideo}
            className="w-full h-full rounded-xl"
            controls
            autoPlay
            playsInline
          />
       
      </div>
    )}
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#FF1B8D] to-[#FFB800]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Vamos Criar Sua Festa?
            </h2>
            <p className="text-xl text-white/90">
              Entre em contato e solicite um orçamento personalizado
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">Nome</label>
                  <input 
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF1B8D] focus:ring-2 focus:ring-[#FF1B8D]/20 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">Tipo de Evento</label>
                  <select
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF1B8D] focus:ring-2 focus:ring-[#FF1B8D]/20 outline-none transition-all"
                  >
                    <option value="">Selecione...</option>
                    <option value="kit 1 - econômico">kit 1 - Econômico</option>
                    <option value="Kit 2 - Custo-Benefício">Kit 2 - Custo-Benefício</option>
                    <option value="Kit 3 - Médio">Kit 3 - Médio</option>
                    <option value="kit 4 - Intermediário">kit 4 - Intermediário</option>
                    <option value="kit 5 - Premium">Kit 5 - Premium</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">Mensagem</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF1B8D] focus:ring-2 focus:ring-[#FF1B8D]/20 outline-none transition-all"
                  placeholder="Conte-nos sobre sua festa dos sonhos..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF1B8D] to-[#FFB800] text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Enviar Solicitação
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-3 text-center items-center">
                    <Instagram className="w-6 h-6 text-[#FF1B8D] hover:scale-110 transition-transform cursor-pointer" onClick={() => window.open("https://www.instagram.com/melissfest/", "_blank")} />
                  </div>
                  <div className="text-sm font-semibold text-[#1a1a2e]">Rede Social</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <PartyPopper className="w-8 h-8 text-[#FF1B8D]" />
              <span className="text-2xl font-bold">Miliss Fest</span>
            </div>
            <div className="text-center text-white/80 ">
              © 2026 Desenvolvido por Iverton. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
