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
      image: "https://instagram.fmvf3-1.fna.fbcdn.net/v/t51.82787-15/613560532_17897922171367179_5571590672783020455_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzgwNzc3MTc3NjMwNzI5ODM4NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=xgIUnL5yDhUQ7kNvwG3h8uh&_nc_oc=AdlA1R9lCXUV7DAXSQiPNTF2ZYp4ECAXUgpukcREgTyK9ulZs02jzFN0sA5OcLMOyBg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmvf3-1.fna&_nc_gid=tbLU6sPGDxfopyMXQhip1Q&oh=00_AfqeK4RVops4oCrs-yrNCv3v1jV62bVIfNR8Eg82atZbZg&oe=6970AE92",
     
    },
    {
      type: "video",
      src: "/images/video1.mp4",
   },
    {
      image: "https://instagram.fmvf3-1.fna.fbcdn.net/v/t51.82787-15/581463201_17891352963367179_5510458784088038129_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=Mzc2NjQ2MjU3MDQ2ODEyNTMwMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTE1Mi5zZHIuQzMifQ%3D%3D&_nc_ohc=3XuPDXQcPTYQ7kNvwG6EApU&_nc_oc=AdlF5uQ7FNExGsS9xoGho0-ayE2-0-YCIqy_TY26MQHxlbFxCdFC070v1k7JJ-uaRAY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmvf3-1.fna&_nc_gid=blzAX-HS4t4QjYgxtPDv_w&oh=00_AfqWMHgNjMzdBhA66k6TLJNJNfYffKTNV7BjQOgqeohR_w&oe=6970CE47",
    },
    {
      type: "video",
      src: "/images/video4.mp4",
    },
    {
      image: "https://instagram.fmvf3-1.fna.fbcdn.net/v/t51.82787-15/604527484_17896369515367179_61773805310505971_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=Mzc5ODU5NjQwMDQ0MzQwOTU4MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzMjR4MTE3NS5zZHIuQzMifQ%3D%3D&_nc_ohc=iCGCfJHRj2AQ7kNvwEQDhbz&_nc_oc=AdnXz06zmktnzQwjcB3yvo3ASW4FVhyF1IswIXmrf1vw09TyrwF4gEvAcx16zklj7Zc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmvf3-1.fna&_nc_gid=blzAX-HS4t4QjYgxtPDv_w&oh=00_Afpny0oIpTdk5kySB9NDGphEyX8HqNDBP59n9tn-E6CdiA&oe=6970C472",
      title: "",
      category: ""
    },
    {
      image: "https://instagram.fmvf3-1.fna.fbcdn.net/v/t51.82787-15/522120548_17877523458367179_1724113375873071029_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzY4MDQ0NjQxNjgwODMzNDYyMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTUwNS5zZHIuQzMifQ%3D%3D&_nc_ohc=P0LP28FoYHUQ7kNvwHiudiH&_nc_oc=Admjzl_P_SnaVkSOm-JX5cSiUKhhbH0MszcNwdV0t24cBdQu1T386rwqcopO27CAY3w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmvf3-1.fna&_nc_gid=blzAX-HS4t4QjYgxtPDv_w&oh=00_AfoCLafM8FI0sfVbUUsLvoOI6IujtMSiPAH23hOKO_PNHw&oe=6970B265",
     
    },
    {
      image: "https://instagram.fmvf3-1.fna.fbcdn.net/v/t51.82787-15/583278125_17891573112367179_54907654660231497_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=Mzc2Nzk1MTUwOTI2MzY1MjU2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=eajy3KeLeGIQ7kNvwGcI9kn&_nc_oc=Adnvr0rPjE7s_PUsQ_Q08UNVPw_1RHg_mIidFPbvfxKEEOjQ2M2H3v3OJRedJwZPpio&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmvf3-1.fna&_nc_gid=blzAX-HS4t4QjYgxtPDv_w&oh=00_AfplaoCksWY6zjC7WDeheWBcFJ588Gbtm8zdXKMo_hYB1g&oe=6970BCE3",
      title: "",
    },
    {
      type: "video",
      src: "/images/video.mp4",
    },
    {
      image: "https://instagram.fmvf3-1.fna.fbcdn.net/v/t51.82787-15/518887703_17876795286367179_6114892522096242172_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=MzY3NjE0NzE1MDUwOTY3ODAyNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTYzOS5zZHIuQzMifQ%3D%3D&_nc_ohc=Vzcvh5TtDkoQ7kNvwG6jfpP&_nc_oc=AdlCFWrpj_AhHnNnW72tyPRSC0NL6jwTlZ6nJ-Do5fRpfvtOweNGyrmeAlBO4v8ssh8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmvf3-1.fna&_nc_gid=blzAX-HS4t4QjYgxtPDv_w&oh=00_AfoB9jXwg7_zacYBXg0tqXjItaX9hwCzDDRG3McYlZwRCw&oe=6970BD51",
      title: "",
    },
    {     
      type: "video",
      src: "/images/video3.mp4",   
    },
    {
      image: "https://instagram.fmvf3-1.fna.fbcdn.net/v/t51.75761-15/502549758_17874915687367179_5330774864422515107_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzY2NTE0NjI2NjU0NDMxMjA5NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTY5MC5zZHIuQzMifQ%3D%3D&_nc_ohc=QtaRU6CQpJoQ7kNvwE9FR0o&_nc_oc=AdnWhKLM39F75CjjNBC9El5-hHdwUTeVARfmagBi43NPs4hYZCWD4ATLDATMBY9Uvus&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmvf3-1.fna&_nc_gid=fJV2ApcQSt-ZmP8qOUWV_w&oh=00_AfqnnTR7AjrGgvwFC8jrbKeMmgVJp4N5RfG8KLl9tQ6I0w&oe=6970D67D",  
      title: "",
    },
    {
      type: "video",  
      src: "/images/video2.mp4",
    },
    {
      image: "https://instagram.fmvf3-1.fna.fbcdn.net/v/t51.75761-15/487816842_17863442256367179_4038212684364990281_n.webp?_nc_cat=104&ig_cache_key=MzU5OTkzNDA5ODU2MDcyMzkwOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQzOC5zZHIuQzMifQ%3D%3D&_nc_ohc=mvvTyb5Ym9QQ7kNvwGNCmi0&_nc_oc=Adn97PGbKWFAMJrRKo4o3rodH4ZEJvHOz15vuZ0CaoF8snCT9AfcmguyHwczzdCzN_8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmvf3-1.fna&_nc_gid=fJV2ApcQSt-ZmP8qOUWV_w&oh=00_AfriJI4B9KGB2xDkluZhFvC2b7gAAsplDX-meFLkVjqhtg&oe=6970B153",
    },
    {
      image: "https://instagram.fmvf3-1.fna.fbcdn.net/v/t51.75761-15/479485929_17856903966367179_812923010137066063_n.webp?_nc_cat=105&ig_cache_key=MzU2NTk4OTA0NjU0NDE5NDg4MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4NC5zZHIuQzMifQ%3D%3D&_nc_ohc=gSG5ylJBxx4Q7kNvwGhAdyK&_nc_oc=Adm_qfV965Zf6LP040kR09RoRrHgWRWVeKzFQC0okcInb44MHTDBxE4SpcrrGXciMpk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmvf3-1.fna&_nc_gid=fJV2ApcQSt-ZmP8qOUWV_w&oh=00_Afo_fFC29FYjwXR7tbGgBwfb3MPpIXCqq37E7SWHEit7sA&oe=6970AFE8",
    
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
            <p className="text-xl text-gray-600">Clique nos vídeos para assistir em tela cheia</p>
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
