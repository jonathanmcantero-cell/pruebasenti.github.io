import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  Mail, 
  MapPin, 
  Truck, 
  ShieldCheck, 
  Sparkles, 
  Droplet, 
  Star, 
  Package 
} from 'lucide-react';
import { useState, ReactNode } from 'react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [logoError, setLogoError] = useState(false);
  const waLink = "https://wa.me/543516414867";

  return (
    <div className="relative min-h-screen bg-ink-950 text-white font-sans p-4 md:p-10 border-[8px] border-black flex flex-col selection:bg-gold-500 selection:text-black">
      
      <header className="flex justify-between items-center border-b border-gold-500/25 pb-5 mb-8 shrink-0">
        <div className="font-serif text-[24px] tracking-[4px] uppercase text-gold-500">Sentí Aura</div>
        <nav className="hidden md:flex gap-[30px] text-[11px] uppercase tracking-[2px] text-white">
          <span>Inicio</span>
          <span>Fragancias</span>
          <span>Nosotros</span>
          <span>Contacto</span>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center mb-10 shrink-0">
        <FadeIn className="flex flex-col items-center max-w-3xl mx-auto">
          {!logoError ? (
            <img 
              src="logo.png" 
              alt="Sentí Aura Logo" 
              onError={() => setLogoError(true)}
              className="w-16 h-16 object-contain mb-4"
              referrerPolicy="no-referrer"
            />
          ) : null}
          
          <h1 className="font-serif text-[50px] md:text-[82px] font-light tracking-[-2px] mb-[10px]">
            Sentí Aura
          </h1>
          <p className="font-serif italic text-[18px] text-white/60 mb-[20px]">
            “Perfumes que hablan por vos 🖤”
          </p>
          
          <a href={waLink} target="_blank" rel="noopener noreferrer" 
             className="inline-block px-[32px] py-[12px] border border-gold-500 text-gold-500 uppercase text-[12px] tracking-[2px] transition-colors duration-300 hover:bg-gold-500 hover:text-black">
             Comprar ahora → WhatsApp
          </a>
        </FadeIn>
      </section>

      {/* Main Grid mapping from the Theme */}
      <main className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.5fr_1fr] gap-10 flex-grow mb-10 w-full max-w-[1200px] mx-auto">
        
        {/* Column 1: About & Trust */}
        <div className="flex flex-col gap-10">
          {/* About */}
          <section>
            <FadeIn>
              <h3 className="font-serif text-gold-500 text-[16px] mb-[15px] uppercase tracking-[1px] border-b border-gold-500/25 pb-[8px]">Sobre la marca</h3>
              <p className="text-[13px] leading-[1.6] text-white/60 mb-[10px]">
                ¡Hola! Bienvenido a Sentí Aura. Te ayudo a encontrar tu perfume ideal sin comprar a ciegas.
              </p>
              <p className="text-[13px] leading-[1.6] text-white/60 mb-[10px]">
                Podés empezar con nuestro kit 3x5ml, probarlos y elegir con seguridad.
              </p>
            </FadeIn>
          </section>

          {/* Trust */}
          <section>
            <FadeIn>
              <h3 className="font-serif text-gold-500 text-[16px] mb-[15px] uppercase tracking-[1px] border-b border-gold-500/25 pb-[8px]">Elegí con seguridad</h3>
              <div className="text-[12px] font-bold text-white flex items-center gap-[8px] mb-[8px] before:content-['✓'] before:text-gold-500">No compres a ciegas</div>
              <div className="text-[12px] font-bold text-white flex items-center gap-[8px] mb-[8px] before:content-['✓'] before:text-gold-500">Probá antes de elegir</div>
              <div className="text-[12px] font-bold text-white flex items-center gap-[8px] mb-[8px] before:content-['✓'] before:text-gold-500">Elegí con seguridad</div>
            </FadeIn>
          </section>
        </div>

        {/* Column 2: Products */}
        <div className="flex flex-col gap-10">
          <section>
            <FadeIn>
              <h3 className="font-serif text-gold-500 text-[16px] mb-[15px] uppercase tracking-[1px] border-b border-gold-500/25 pb-[8px]">Catálogo Exclusivo</h3>
              <div className="flex flex-col">
                <ProductCard 
                  title="Fragancias Árabe Premium" 
                  subtitle="Importadas • Lujo"
                  icon={<Star className="w-5 h-5 text-gold-500" strokeWidth={1.5} />}
                  delay={0.1}
                  href="https://wa.me/543516414867?text=Hola!%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20las%20fragancias%20%C3%A1rabes%20premium%20%E2%9C%A8"
                />
                <ProductCard 
                  title="Decants Exclusivos" 
                  subtitle="Muestras de 10ml"
                  icon={<Droplet className="w-5 h-5 text-gold-500" strokeWidth={1.5} />}
                  delay={0.2}
                  href="https://wa.me/543516414867?text=Hola!%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20los%20decants%20exclusivos%20%E2%9C%A8"
                />
                <ProductCard 
                  title="Perfumes Personalizados"
                  subtitle="Tu esencia única"
                  icon={<Sparkles className="w-5 h-5 text-gold-500" strokeWidth={1.5} />}
                  delay={0.3}
                  href="https://wa.me/543516414867?text=Hola!%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20los%20perfumes%20personalizados%20%E2%9C%A8"
                />
                <ProductCard 
                  title="Kit 3x5ml (Recomendado)" 
                  subtitle="Tu puerta al mundo Aura"
                  icon={<Package className="w-5 h-5 text-gold-500" strokeWidth={1.5} />}
                  featured={true}
                  delay={0.4}
                  href="https://wa.me/543516414867?text=Hola!%20Me%20gustar%C3%ADa%20pedir%20el%20Kit%203x5ml%20%E2%9C%A8"
                />
              </div>
            </FadeIn>
          </section>
        </div>

        {/* Column 3: Delivery & Contact */}
        <div className="flex flex-col gap-10">
          {/* Delivery */}
          <section>
            <FadeIn>
              <h3 className="font-serif text-gold-500 text-[16px] mb-[15px] uppercase tracking-[1px] border-b border-gold-500/25 pb-[8px]">Entregas</h3>
              <ul className="text-[13px] leading-[1.6] text-white/60 space-y-[10px]">
                <li className="flex gap-2 items-center"><MapPin className="w-4 h-4 text-gold-500 shrink-0" /> Córdoba Capital</li>
                <li className="flex gap-2 items-center"><Truck className="w-4 h-4 text-gold-500 shrink-0" /> Entregas en el día</li>
                <li className="flex gap-2 items-center"><Package className="w-4 h-4 text-gold-500 shrink-0" /> Envíos en Córdoba</li>
                <li className="flex gap-2 items-center"><ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" /> Punto de retiro céntrico</li>
              </ul>
            </FadeIn>
          </section>

          {/* Contact */}
          <section>
            <FadeIn>
              <h3 className="font-serif text-gold-500 text-[16px] mb-[15px] uppercase tracking-[1px] border-b border-gold-500/25 pb-[8px]">Pedí el tuyo ahora</h3>
              <p className="text-[13px] leading-[1.6] text-white/60 mb-4">Contactanos para asesoría personalizada ✨</p>
              
              <div className="flex flex-col gap-2">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-gold-500 hover:text-gold-500 transition-colors text-[11px] uppercase tracking-[1px]">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a href="https://www.instagram.com/senti.aura/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-gold-500 hover:text-gold-500 transition-colors text-[11px] uppercase tracking-[1px]">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
                <a href="mailto:sentiaura.store@gmail.com" className="flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-gold-500 hover:text-gold-500 transition-colors text-[11px] uppercase tracking-[1px]">
                  <Mail className="w-4 h-4" /> Correo
                </a>
              </div>
            </FadeIn>
          </section>
        </div>

      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-gold-500/25 pt-[50px] pb-[10px] flex flex-col gap-10 shrink-0">
        <FadeIn className="text-center w-full">
          <h2 className="font-serif italic text-[32px] md:text-[48px] font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 drop-shadow-[0_0_25px_rgba(212,175,55,0.25)] leading-tight">
            “Sentí tu esencia. Sentí Aura.”
          </h2>
        </FadeIn>
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left pt-[20px] border-t border-white/5">
          <div className="font-serif text-[14px] tracking-[4px] uppercase text-gold-500/30">
            Sentí Aura
          </div>
          <div className="text-[11px] text-white/60 leading-[1.8] text-center md:text-right">
            Instagram: @senti.aura<br/>
            Email: sentiaura.store@gmail.com<br/>
            WhatsApp: +54 351 641 4867
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[40px] right-[40px] bg-[#25D366] text-white w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold shadow-[0_4px_15px_rgba(0,0,0,0.3)] z-50 hover:bg-[#20bd5a] transition-colors"
        title="Chatea con nosotros"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}

// Subcomponents
function ProductCard({ title, subtitle, icon, featured = false, delay = 0, href }: { title: string, subtitle?: string, icon: ReactNode, featured?: boolean, delay?: number, href?: string }) {
  const content = (
    <div className={`p-[15px] mb-[10px] flex justify-between items-center transition-colors group ${
      featured ? 'border border-gold-500 bg-gold-500/[0.05]' : 'border border-gold-500/25 bg-white/[0.03] hover:bg-white/[0.05]'
    }`}>
      <div className="flex flex-col">
        <h4 className={`text-[14px] text-white m-0 tracking-wide font-medium transition-colors ${href ? 'group-hover:text-gold-500' : ''}`}>{title}</h4>
        {subtitle && <span className="text-[11px] text-gold-500 mt-1 block">{subtitle}</span>}
      </div>
      <div className="flex flex-col items-end gap-2 shrink-0">
        <div className={`opacity-70 transition-all duration-300 ${href ? 'group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]' : 'group-hover:opacity-100'}`}>
          {icon}
        </div>
        {featured && (
          <span className="text-gold-500 text-[10px] uppercase font-bold tracking-[1px] mt-1">★ DESTACADO</span>
        )}
      </div>
    </div>
  );

  return (
    <div className="h-full">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
