import { type Component, createSignal, Show } from 'solid-js';
import { A } from '@solidjs/router';

const Navbar: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <header class="fixed top-0 left-0 w-full z-[100]">
      <nav class="relative w-full bg-[#121a27]/95 backdrop-blur-md border-b border-[#2d3a4f] shadow-2xl">
        <div class="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center h-16 relative">
          
          <div class="absolute top-0 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 md:-top-4 z-[110]">
            <A href="/" class="block transition-transform hover:scale-105 active:scale-95">
              <img 
                src="/assets/2b2h.webp" 
                alt="2B2H" 
                class="w-14 h-14 md:w-20 md:h-20 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] object-contain" 
              />
            </A>
          </div>

          <div class="hidden md:flex items-center ml-24 lg:ml-32 h-full">
            <A href="/" class="px-6 h-full flex items-center border-x border-[#2d3a4f] hover:bg-white/5 transition-colors group">
              <span class="material-icons text-[#8a96a8] group-hover:text-[#e9a33b] text-[20px]">home</span>
            </A>
            <ul class="flex items-center h-full">
              <li><NavLink href="/wiki">Wiki</NavLink></li>
            </ul>
          </div>

          <div class="ml-auto flex items-center gap-4">
            <div class="hidden md:block">
              <DiscordButton />
            </div>

            <div class="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen())}
                class="text-white p-2 hover:text-[#e9a33b] transition-colors"
                aria-label="Toggle Menu"
              >
                <span class="material-icons text-[32px]">{isOpen() ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>

        <Show when={isOpen()}>
          <div class="md:hidden bg-[#0f1722] border-t border-[#e9a33b]/30 flex flex-col animate-in fade-in slide-in-from-top-4 duration-300">
            <MobileNavLink href="/" label="Home" />
            <MobileNavLink href="/wiki" label="Wiki" />
            <div class="p-6 bg-[#0a0f16] border-t border-white/5">
              <DiscordButton isFullWidth />
            </div>
          </div>
        </Show>
      </nav>
    </header>
  );
};

const DiscordButton = (props: { isFullWidth?: boolean }) => (
  <A href="https://discord.gg/2b2h" class={`relative bg-gradient-to-r from-[#2b5a83] to-[#346e9e] px-8 py-2.5 group block border-b-2 border-r-2 border-[#090d14] transition-all active:scale-95 ${props.isFullWidth ? 'w-full py-4' : ''}`}>
    <div class="absolute inset-0.5 border border-[#e9a33b]/40 group-hover:border-[#e9a33b] transition-colors" />
    <span class="relative text-white text-[11px] font-black uppercase tracking-[0.2em] drop-shadow-md">
      Discord
    </span>
  </A>
);

const NavLink = (props: { href: string, children: any }) => (
  <A 
    href={props.href} 
    activeClass="text-[#e9a33b] bg-white/5"
    inactiveClass="text-[#8a96a8] hover:text-white"
    class="px-8 h-16 flex items-center text-[10px] font-black uppercase tracking-[0.2em] border-r border-[#2d3a4f] transition-all no-underline"
  >
    {props.children}
  </A>
);

const MobileNavLink = (props: { href: string, label: string }) => (
  <A 
    href={props.href} 
    class="flex items-center px-8 py-5 border-b border-white/5 uppercase font-black text-[12px] tracking-[0.2em] text-[#8a96a8] active:text-[#e9a33b] active:bg-white/5"
  >
    <span class="material-icons text-[#e9a33b] mr-4 text-[18px]">chevron_right</span>
    {props.label}
  </A>
);

export default Navbar;