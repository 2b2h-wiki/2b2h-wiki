import MetaTitle from "../components/metaTitle";

export default function Home() {
  return (
    <div class="relative w-full text-white bg-[#0b111a] min-h-screen font-serif selection:bg-[#e9a33b] selection:text-black overflow-x-hidden">
      <MetaTitle title="2B2H Wiki | The Oldest Hytale Anarchy Record" />

      <div class="absolute inset-0 bg-gradient-to-b from-[#1a2c44] via-[#0b111a] to-[#0b111a] h-[900px] -z-10 opacity-70" />
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none -z-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />

      <div class="w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-40 pb-32">
        
        <section class="flex flex-col items-center text-center mb-24">
          <div class="mb-10 p-1 bg-[#121a27] border-t border-l border-[#3d4b63] border-b-[6px] border-r-[6px] border-[#05070a] shadow-2xl transition-all duration-700 hover:scale-105 active:scale-95">
             <img 
               src="/assets/2b2h.webp" 
               alt="2B2H Logo" 
               class="w-44 h-44 md:w-52 md:h-52 grayscale hover:grayscale-0 transition-all duration-1000 object-contain" 
             />
          </div>
          
          <h1 class="text-6xl md:text-9xl font-black italic uppercase tracking-tighter text-white drop-shadow-[0_8px_0px_rgba(5,7,10,1)] mb-4">
            2B2H.NET
          </h1>
          
          <div class="flex items-center gap-6">
            <div class="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent via-[#e9a33b]/40 to-transparent" />
            <p class="text-[#8a96a8] uppercase tracking-[0.6em] font-bold text-[10px] md:text-xs">
              Since 2026
            </p>
            <div class="h-[1px] w-16 md:w-24 bg-gradient-to-l from-transparent via-[#e9a33b]/40 to-transparent" />
          </div>
        </section>

        <main class="space-y-12">
          <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <QuickLink href="https://discord.gg/2b2h" icon="forum" label="Join Discord" description="Communicate with the masses." isExternal />
            <QuickLink href="wiki" icon="book" label="Wiki" description="2B2H Wiki" />
          </section>
        </main>
      </div>
    </div>
  );
}

const QuickLink = (props: { href: string; icon: string; label: string; description: string; isExternal?: boolean }) => (
  <a 
    href={props.href} 
    target={props.isExternal ? "_blank" : undefined}
    rel={props.isExternal ? "noopener noreferrer" : undefined}
    class="group relative flex flex-col items-center justify-center p-8 bg-[#121a27] border-t border-l border-[#2d3a4f] border-b-[4px] border-r-[4px] border-[#090d14] transition-all duration-300 hover:-translate-y-1 hover:border-[#e9a33b]/40"
  >
    <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span class="material-icons text-[#e9a33b] text-sm">{props.isExternal ? 'open_in_new' : 'north_east'}</span>
    </div>

    <div class="mb-4 flex items-center justify-center w-12 h-12 bg-[#0a0f16] border border-[#2d3a4f] group-hover:border-[#e9a33b]/30 transition-colors">
      <span class="material-icons text-[#8a96a8] group-hover:text-[#e9a33b] transition-colors duration-300">
        {props.icon}
      </span>
    </div>

    <span class="text-[12px] font-black uppercase tracking-[0.2em] text-[#e9a33b] mb-2 text-center transition-all">
      {props.label}
    </span>
    
    <span class="text-[9px] font-bold uppercase tracking-widest text-[#5c6b7f] text-center group-hover:text-[#8a96a8] transition-colors">
      {props.description}
    </span>
  </a>
);