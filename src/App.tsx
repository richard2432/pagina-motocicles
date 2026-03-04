/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Gauge, Zap, Weight, Activity, ChevronRight, Bike, Info, Menu, X } from "lucide-react";

interface Spec {
  label: string;
  value: number;
  max: number;
  unit: string;
  icon: React.ReactNode;
  color: string;
}

interface FullSpecItem {
  label: string;
  value: string;
}

interface Motorcycle {
  id: string;
  name: string;
  brand: string;
  year: number;
  image: string;
  description: string;
  specs: Spec[];
  fullSpecs?: FullSpecItem[];
}

const MOTORCYCLES: Motorcycle[] = [
  {
    id: "4",
    name: "ZX636 Ninja",
    brand: "Kawasaki",
    year: 2003,
    image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=1000",
    description: "Every sportbike rider wants a clear 'advantage' – a technological edge the competition can't touch. The Ninja ZX636 features a 636cc DOHC inline four engine with electronic fuel injection, close-ratio gearbox, lightweight aluminum frame and revised Uni-Trak rear suspension.",
    specs: [
      { label: "Potencia", value: 118, max: 220, unit: "HP", icon: <Zap className="w-4 h-4" />, color: "bg-green-600" },
      { label: "Torque", value: 68.8, max: 150, unit: "Nm", icon: <Activity className="w-4 h-4" />, color: "bg-lime-500" },
      { label: "Peso", value: 174, max: 250, unit: "kg", icon: <Weight className="w-4 h-4" />, color: "bg-emerald-600" },
      { label: "Velocidad Máx", value: 266, max: 400, unit: "km/h", icon: <Gauge className="w-4 h-4" />, color: "bg-green-400" },
    ],
    fullSpecs: [
      { label: "Motor", value: "Four stroke, transverse four cylinder, DOHC, 4 valves per cylinder" },
      { label: "Cilindrada", value: "636 cc / 38.8 cu in" },
      { label: "Diámetro x Carrera", value: "68 x 43.8 mm" },
      { label: "Relación de Compresión", value: "12.8:1" },
      { label: "Sistema de Refrigeración", value: "Liquid cooled" },
      { label: "Sistema de Escape", value: "4-2-1" },
      { label: "Inducción", value: "Digital fuel injection with four 38mm throttle bodies" },
      { label: "Lubricación", value: "Wet sump" },
      { label: "Encendido", value: "Digital" },
      { label: "Arranque", value: "Electric" },
      { label: "Bujía", value: "NGK, CR9E" },
      { label: "Aceite de Motor", value: "Synthetic, 10W-40" },
      { label: "Embrague", value: "Wet, multiple discs, cable operated" },
      { label: "Transmisión", value: "6 Speed" },
      { label: "Transmisión Final", value: "Chain" },
      { label: "Chasis", value: "Aluminum, twin spar" },
      { label: "Suspensión Delantera", value: "41 mm cartridge fork with 12-way rebound and compression adjustability" },
      { label: "Suspensión Trasera", value: "Bottom-Link Uni-Trak with gas-charged shock, adjustable" },
      { label: "Frenos Delanteros", value: "2 x 300mm discs, 4 piston calipers" },
      { label: "Frenos Traseros", value: "Single 220mm disc, 1 piston caliper" },
      { label: "Neumático Delantero", value: "120/65 ZR17" },
      { label: "Neumático Trasero", value: "180/55 ZR17" },
      { label: "Capacidad de Combustible", value: "18 Litres / 4.8 gal" },
    ]
  },
  {
    id: "1",
    name: "S 1000 RR",
    brand: "BMW",
    year: 2024,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1000",
    description: "La superbike definitiva, diseñada para el circuito y perfeccionada para la carretera.",
    specs: [
      { label: "Potencia", value: 205, max: 220, unit: "HP", icon: <Zap className="w-4 h-4" />, color: "bg-blue-500" },
      { label: "Torque", value: 113, max: 150, unit: "Nm", icon: <Activity className="w-4 h-4" />, color: "bg-indigo-500" },
      { label: "Peso", value: 197, max: 250, unit: "kg", icon: <Weight className="w-4 h-4" />, color: "bg-slate-500" },
      { label: "Velocidad Máx", value: 303, max: 400, unit: "km/h", icon: <Gauge className="w-4 h-4" />, color: "bg-red-500" },
    ]
  },
  {
    id: "2",
    name: "Panigale V4 R",
    brand: "Ducati",
    year: 2024,
    image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=1000",
    description: "Pura adrenalina italiana. La expresión máxima de la tecnología de competición de Ducati.",
    specs: [
      { label: "Potencia", value: 218, max: 220, unit: "HP", icon: <Zap className="w-4 h-4" />, color: "bg-red-600" },
      { label: "Torque", value: 112, max: 150, unit: "Nm", icon: <Activity className="w-4 h-4" />, color: "bg-orange-500" },
      { label: "Peso", value: 193, max: 250, unit: "kg", icon: <Weight className="w-4 h-4" />, color: "bg-zinc-500" },
      { label: "Velocidad Máx", value: 315, max: 400, unit: "km/h", icon: <Gauge className="w-4 h-4" />, color: "bg-rose-600" },
    ]
  },
  {
    id: "3",
    name: "Ninja H2R",
    brand: "Kawasaki",
    year: 2024,
    image: "https://images.unsplash.com/photo-1614165933026-0750fbd7bda2?auto=format&fit=crop&q=80&w=1000",
    description: "Más allá de lo creíble. La única motocicleta sobrealimentada de producción en serie.",
    specs: [
      { label: "Potencia", value: 310, max: 350, unit: "HP", icon: <Zap className="w-4 h-4" />, color: "bg-green-500" },
      { label: "Torque", value: 165, max: 200, unit: "Nm", icon: <Activity className="w-4 h-4" />, color: "bg-emerald-500" },
      { label: "Peso", value: 216, max: 250, unit: "kg", icon: <Weight className="w-4 h-4" />, color: "bg-gray-500" },
      { label: "Velocidad Máx", value: 400, max: 450, unit: "km/h", icon: <Gauge className="w-4 h-4" />, color: "bg-lime-600" },
    ]
  }
];

const SpecBar: React.FC<{ spec: Spec }> = ({ spec }) => {
  const percentage = (spec.value / spec.max) * 100;
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-end mb-2">
        <div className="flex items-center gap-2 text-slate-400">
          {spec.icon}
          <span className="text-xs font-bold uppercase tracking-wider">{spec.label}</span>
        </div>
        <div className="text-right">
          <span className="text-xl font-black text-white">{spec.value}</span>
          <span className="text-xs text-slate-500 ml-1 font-medium">{spec.unit}</span>
        </div>
      </div>
      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${spec.color} shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
        />
      </div>
    </div>
  );
};

export default function App() {
  const [selectedId, setSelectedId] = useState(MOTORCYCLES[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const selectedBike = MOTORCYCLES.find(b => b.id === selectedId) || MOTORCYCLES[0];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-sans selection:bg-green-500 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center rotate-3 shadow-lg shadow-green-900/20">
              <Bike className="text-white w-6 h-6 -rotate-3" />
            </div>
            <div>
              <h1 className="font-black text-2xl tracking-tighter leading-none">MOTORCYCLE<span className="text-green-600">SPES</span></h1>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Technical Database</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-xs font-black uppercase tracking-widest text-slate-400">
            <a href="#" className="text-white hover:text-green-500 transition-colors">Catálogo</a>
            <a href="#" className="hover:text-green-500 transition-colors">Marcas</a>
            <a href="#" className="hover:text-green-500 transition-colors">Comparar</a>
            <div className="relative group">
              <Search className="w-5 h-5 cursor-pointer group-hover:text-green-500 transition-colors" />
            </div>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0b] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-2xl font-black uppercase tracking-tighter">
              <a href="#" onClick={() => setIsMenuOpen(false)}>Catálogo</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>Marcas</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>Comparar</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        {/* Hero / Showcase Section */}
        <section className="relative min-h-[calc(100vh-80px)] flex flex-col lg:flex-row overflow-hidden">
          {/* Left: Image & Info */}
          <div className="lg:w-3/5 relative flex flex-col p-6 lg:p-12 justify-end min-h-[50vh] lg:min-h-0">
            <div className="absolute inset-0 z-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedBike.id}
                  src={selectedBike.image}
                  alt={selectedBike.name}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b]/80 via-transparent to-transparent hidden lg:block" />
            </div>

            <div className="relative z-10">
              <motion.div
                key={`title-${selectedBike.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-green-600 text-[10px] font-black uppercase tracking-widest rounded-sm">
                    {selectedBike.brand}
                  </span>
                  <span className="text-slate-400 text-sm font-bold">{selectedBike.year}</span>
                </div>
                <h2 className="text-6xl lg:text-9xl font-black tracking-tighter mb-6 uppercase italic">
                  {selectedBike.name}
                </h2>
                <p className="max-w-md text-slate-300 text-sm leading-relaxed mb-8 font-medium">
                  {selectedBike.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-green-600 hover:text-white transition-all flex items-center gap-2">
                    Ficha Completa <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center gap-2">
                    Galería <Info className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Technical Specs Bars */}
          <div className="lg:w-2/5 bg-[#0f0f11] p-6 lg:p-12 border-l border-white/5 flex flex-col">
            <div className="mb-12">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-green-600 mb-2">Especificaciones</h3>
              <h4 className="text-3xl font-black uppercase italic tracking-tighter">Ficha Técnica</h4>
            </div>

            <div className="flex-grow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`specs-${selectedBike.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {selectedBike.specs.map((spec, i) => (
                    <SpecBar key={i} spec={spec} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Selector */}
            <div className="mt-12 pt-12 border-t border-white/5">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">Explorar Modelos</p>
              <div className="grid grid-cols-3 gap-4">
                {MOTORCYCLES.map((bike) => (
                  <button
                    key={bike.id}
                    onClick={() => setSelectedId(bike.id)}
                    className={`group relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      selectedId === bike.id ? "border-green-600 scale-105" : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img 
                      src={bike.image} 
                      alt={bike.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-2 left-2">
                      <p className="text-[8px] font-black uppercase tracking-tighter bg-black/80 px-1">{bike.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Full Specs Section (Emphasis on ZX636) */}
        {selectedBike.fullSpecs && (
          <section className="py-24 px-6 bg-[#0a0a0b] border-t border-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
                  Ficha Técnica <span className="text-green-600">Completa</span>
                </h2>
                <p className="text-slate-500 font-medium max-w-2xl">
                  Detalles exhaustivos del rendimiento y componentes de la {selectedBike.name} ({selectedBike.year}).
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
                {selectedBike.fullSpecs.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="border-b border-white/5 pb-4"
                  >
                    <p className="text-[10px] font-black uppercase tracking-widest text-green-600 mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-slate-200 leading-relaxed">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Categories / Brands Grid */}
        <section className="py-24 px-6 bg-[#0a0a0b] border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-black uppercase italic tracking-tighter">Marcas Populares</h2>
                <p className="text-slate-500 font-medium mt-2">Explora las especificaciones por fabricante.</p>
              </div>
              <button className="text-xs font-black uppercase tracking-widest text-green-600 hover:underline">Ver todas</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {["Yamaha", "Honda", "Kawasaki", "Suzuki", "Ducati", "BMW", "KTM", "Aprilia", "Triumph", "Harley", "Indian", "Royal Enfield"].map((brand, i) => (
                <div key={i} className="aspect-square bg-[#0f0f11] border border-white/5 rounded-2xl flex flex-col items-center justify-center group cursor-pointer hover:border-green-600/50 transition-all">
                  <div className="w-12 h-12 bg-white/5 rounded-full mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Bike className="w-6 h-6 text-slate-400 group-hover:text-green-600" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f0f11] border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center rotate-3">
                <Bike className="text-white w-5 h-5 -rotate-3" />
              </div>
              <h1 className="font-black text-xl tracking-tighter">MOTORCYCLE<span className="text-green-600">SPES</span></h1>
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-8">
              La base de datos técnica más completa para entusiastas de las dos ruedas. Compara, analiza y encuentra tu próxima máquina.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-6">Comunidad</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Foros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Eventos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Noticias</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-600">
          <p>© 2024 MOTORCYCLESPES. Built for speed.</p>
          <div className="flex gap-6">
            <a href="#">Instagram</a>
            <a href="#">Youtube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
