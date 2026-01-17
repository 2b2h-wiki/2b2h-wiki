import { type Component } from 'solid-js';

const Footer: Component = () => {
  return (
    <footer class="w-full bg-[#0b111a] border-t border-white/5 selection:bg-[#e9a33b] selection:text-black">
      <div class="max-w-7xl mx-auto px-8 py-20 flex flex-col items-center text-center">
        
        <div class="group flex flex-col items-center mb-12">
          <div class="mt-4 flex flex-col items-center">
             <h2 class="text-white text-2xl font-black uppercase tracking-[0.3em] italic leading-none">
               2B2H.NET
             </h2>
             <p class="text-[#5c6b7f] text-[9px] font-black uppercase tracking-[0.5em] mt-2 translate-x-[0.25em]">
               Wiki Project
             </p>
          </div>
        </div>

          <div class="space-y-3">
            <p class="text-[9px] text-[#5c6b7f] font-bold uppercase tracking-[0.25em]">
              &copy; 2026 2B2H WIKI. ALL RIGHTS RESERVED.
            </p>
            <p class="text-[8px] text-[#5c6b7f]/50 uppercase tracking-[0.15em] leading-relaxed max-w-xl">
              Maintained by <span class="text-[#8a96a8]">Praevail</span>. This site is a community archive and is not affiliated with 2B2H.net or Hypixel Studios.
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;