import React, { useState } from "react";
import {PartyPopper, Sparkles, Calendar, Users, Heart, Gift, Phone, Mail, Instagram, Facebook, Menu, X} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", eventType: "", message: "" });

  const partyTypes = [
    {
      icon: Gift,
      title: "Aniversários",
      description: "Festas infantis e adultos com decorações personalizadas e temáticas únicas"
    },
    {
      icon: Heart,
      title: "Casamentos",
      description: "Celebrações elegantes e românticas para o dia mais especial da sua vida"
    },
    {
      icon: Users,
      title: "Eventos Corporativos",
      description: "Confraternizações, lançamentos de produtos e celebrações empresariais"
    },
    {
      icon: Sparkles,
      title: "Chá de Bebê",
      description: "Decorações encantadoras para celebrar a chegada do seu bebê"
    },
    {
      icon: Calendar,
      title: "Formaturas",
      description: "Festas memoráveis para celebrar conquistas acadêmicas"
    },
    {
      icon: PartyPopper,
      title: "Festas Temáticas",
      description: "Qualquer tema que você imaginar, nós transformamos em realidade"
    }
  ];

  const portfolio = [
    {
      image: "https://static.lumi.new/16/1667ff50fd6a95c7bf6613b96d0df9d6.png",
      title: "Aniversário Rosa & Dourado",
      category: "Aniversário"
    },
    {
      image: "https://static.lumi.new/06/06f3fbc70e17cac8b561050efb916fa6.png",
      title: "Casamento Elegante",
      category: "Casamento"
    },
    {
      image: "https://static.lumi.new/c2/c2607dea1d054eca8d1a470726d7c961.png",
      title: "Evento Corporativo",
      category: "Corporativo"
    },
    {
      image: "https://static.lumi.new/8f/8f7ea00a70c2a181f2b7831df6d4504d.png",
      title: "Festa Infantil Temática",
      category: "Infantil"
    },
    {
      image: "https://static.lumi.new/40/400d64ec9d85f216fd18726c064164f1.png",
      title: "Chá de Bebê Delicado",
      category: "Chá de Bebê"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Organizaram o aniversário da minha filha e foi simplesmente perfeito! Cada detalhe foi pensado com carinho.",
      rating: 5
    },
    {
      name: "João Santos",
      text: "Profissionais excelentes! Nosso casamento ficou lindo, exatamente como sonhamos.",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Super recomendo! Transformaram nosso evento corporativo em algo memorável.",
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    alert("Obrigado pelo contato! Retornaremos em breve.");
    setFormData({ name: "", email: "", phone: "", eventType: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <PartyPopper className="w-8 h-8 text-[#FF1B8D]" />
              <span className="text-2xl font-bold text-[#1a1a2e]">Party Dreams</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-[#1a1a2e] hover:text-[#FF1B8D] transition-colors">Início</a>
              <a href="#portfolio" className="text-[#1a1a2e] hover:text-[#FF1B8D] transition-colors">Portfólio</a>
              <a href="#services" className="text-[#1a1a2e] hover:text-[#FF1B8D] transition-colors">Serviços</a>
              <a href="#testimonials" className="text-[#1a1a2e] hover:text-[#FF1B8D] transition-colors">Depoimentos</a>
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
            <div className="md:hidden py-4 space-y-3">
              <a href="#home" className="block text-[#1a1a2e] hover:text-[#FF1B8D] transition-colors">Início</a>
              <a href="#portfolio" className="block text-[#1a1a2e] hover:text-[#FF1B8D] transition-colors">Portfólio</a>
              <a href="#services" className="block text-[#1a1a2e] hover:text-[#FF1B8D] transition-colors">Serviços</a>
              <a href="#testimonials" className="block text-[#1a1a2e] hover:text-[#FF1B8D] transition-colors">Depoimentos</a>
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
                    Ver Portfólio
                  </a>
                </div>
                <div className="flex gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FF1B8D]">150+</div>
                    <div className="text-sm text-gray-600">Festas Organizadas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FFB800]">98%</div>
                    <div className="text-sm text-gray-600">Satisfação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FF1B8D]">5+</div>
                    <div className="text-sm text-gray-600">Anos de Experiência</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://static.lumi.new/d8/d8908c9af2e703a24b84a598167642a9.png" 
                  alt="Festa elegante" 
                  className="rounded-3xl shadow-2xl w-full h-auto"
                />
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
              Tipos de Festas que Organizamos
            </h2>
            <p className="text-xl text-gray-600">
              Especializados em criar experiências únicas para cada tipo de celebração
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partyTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
                >
                  <div className="bg-gradient-to-br from-[#FF1B8D] to-[#FFB800] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
              Nosso Portfólio
            </h2>
            <p className="text-xl text-gray-600">
              Algumas das festas que organizamos com amor e dedicação
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-sm font-semibold mb-1">{item.category}</div>
                    <div className="text-xl font-bold">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-[#FFE5F1]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600">
              Depoimentos de quem confiou em nosso trabalho
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#FFB800] text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="font-bold text-[#1a1a2e]">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                <div>
                  <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">Email</label>
                  <input 
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF1B8D] focus:ring-2 focus:ring-[#FF1B8D]/20 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">Telefone</label>
                  <input 
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF1B8D] focus:ring-2 focus:ring-[#FF1B8D]/20 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">Tipo de Evento</label>
                  <select
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF1B8D] focus:ring-2 focus:ring-[#FF1B8D]/20 outline-none transition-all"
                  >
                    <option value="">Selecione...</option>
                    <option value="aniversario">Aniversário</option>
                    <option value="casamento">Casamento</option>
                    <option value="corporativo">Evento Corporativo</option>
                    <option value="cha-bebe">Chá de Bebê</option>
                    <option value="formatura">Formatura</option>
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
                  <Phone className="w-6 h-6 text-[#FF1B8D]" />
                  <div className="text-sm font-semibold text-[#1a1a2e]">Telefone</div>
                  <div className="text-sm text-gray-600">(11) 99999-9999</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Mail className="w-6 h-6 text-[#FF1B8D]" />
                  <div className="text-sm font-semibold text-[#1a1a2e]">Email</div>
                  <div className="text-sm text-gray-600">contato@partydreams.com</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-3">
                    <Instagram className="w-6 h-6 text-[#FF1B8D] hover:scale-110 transition-transform cursor-pointer" />
                    <Facebook className="w-6 h-6 text-[#FF1B8D] hover:scale-110 transition-transform cursor-pointer" />
                  </div>
                  <div className="text-sm font-semibold text-[#1a1a2e]">Redes Sociais</div>
                  <div className="text-sm text-gray-600">@partydreams</div>
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
              <span className="text-2xl font-bold">Party Dreams</span>
            </div>
            <div className="text-center text-white/80">
              © 2024 Party Dreams - Organização de Festas. Todos os direitos reservados.
            </div>
            <div className="flex gap-4">
              <Instagram className="w-6 h-6 hover:text-[#FF1B8D] transition-colors cursor-pointer" />
              <Facebook className="w-6 h-6 hover:text-[#FF1B8D] transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
