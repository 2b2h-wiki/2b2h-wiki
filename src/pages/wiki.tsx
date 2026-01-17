// TODO: Drastically improve wiki system, this shiz sucks
import MetaTitle from "../components/metaTitle";

export default function WikiHome() {
  return (
    <div class="relative w-full text-white bg-[#0b111a] min-h-screen font-serif selection:bg-[#e9a33b] selection:text-black">
      <MetaTitle title="Home | 2B2H Wiki" />

      <div class="fixed inset-0 bg-gradient-to-b from-[#1a2c44]/10 via-[#0b111a] to-[#0b111a] -z-10" />

      <div class="w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-20">
        <div class="flex flex-col lg:flex-row gap-12">
          <aside class="w-full lg:w-72 space-y-12">
            <div>
              <h3 class="text-[#5c6b7f] text-[9px] font-black uppercase tracking-[0.4em] mb-5 px-4 border-l border-[#2d3a4f]">
                Navigation
              </h3>
              <nav class="flex flex-col gap-1">
                <SidebarLink href="/wiki" label="Main Page" active />
                <SidebarLink href="#" label="Recent Changes (Soon)" disabled />
              </nav>
            </div>

            <div>
              <h3 class="text-[#5c6b7f] text-[9px] font-black uppercase tracking-[0.4em] mb-5 px-4 border-l border-[#2d3a4f]">
                History
              </h3>
              <nav class="flex flex-col gap-1">
                <SidebarLink href="/wiki/server" label="Main" />
                <SidebarLink href="/wiki/spawn" label="Spawn (Soon)"  disabled/>
                <SidebarLink href="#" label="Timeline (Soon)" disabled />
                <SidebarLink href="#" label="Famous Bases (Soon)" disabled />
              </nav>
            </div>

            <div>
              <h3 class="text-[#e9a33b]/60 text-[9px] font-black uppercase tracking-[0.4em] mb-5 px-4 border-l border-[#e9a33b]/40">
                Groups
              </h3>
              <nav class="flex flex-col gap-1">
                <SidebarLink href="#" label="Factions (Soon)" disabled />
                <SidebarLink href="#" label="Notable Players (Soon)" disabled />
              </nav>
            </div>
          </aside>

          <main class="flex-1 space-y-10">
            <header class="relative pb-10">
              <div class="flex items-center gap-5 mb-3">
                <div class="w-10 h-10 flex items-center justify-center bg-[#e9a33b]/10 rounded-sm border border-[#e9a33b]/20">
                  <span class="material-icons text-[#e9a33b] text-xl">
                    account_balance
                  </span>
                </div>
                <h1 class="text-4xl md:text-6xl font-black italic uppercase tracking-tight text-white drop-shadow-md">
                  Main Page
                </h1>
              </div>
              <p class="text-[#8a96a8] text-xs uppercase tracking-[0.3em] font-bold pl-16">
                The official community record of the oldest Hytale anarchy
                server.
              </p>
              <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#2d3a4f] via-[#2d3a4f]/20 to-transparent" />
            </header>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <WikiBox title="Featured Content" icon="star">
                <div class="flex flex-col items-center justify-center py-10 text-center space-y-5">
                  <div class="relative w-full aspect-video bg-[#0a0f16] border border-dashed border-[#2d3a4f] flex items-center justify-center overflow-hidden group">
                    <div class="absolute inset-0 bg-[radial-gradient(#1a2c44_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
                    <span class="material-icons text-[#2d3a4f] text-5xl group-hover:rotate-12 transition-transform duration-500">
                      history_edu
                    </span>
                    <div class="absolute bottom-3 left-3">
                    </div>
                  </div>

                  <div class="space-y-3 w-full">
                    <h4 class="text-[#8a96a8] text-xs font-black uppercase tracking-[0.3em]">
                      Waiting...
                    </h4>

                    <div class="space-y-2 px-4">
                      <div class="h-2 w-full bg-[#2d3a4f]/20 rounded-sm" />
                      <div class="h-2 w-3/4 bg-[#2d3a4f]/20 rounded-sm mx-auto" />
                    </div>

                    <p class="text-[10px] text-[#5c6b7f] uppercase tracking-widest leading-relaxed pt-2">
                      Server is still new! Not much has happened yet, let's see
                      what occurs 👀
                    </p>
                  </div>

                  <div class="pt-4 opacity-30 cursor-not-allowed">
                    <div class="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#5c6b7f]">
                      <span>Locked Record</span>
                      <span class="material-icons text-xs">lock</span>
                    </div>
                  </div>
                </div>
              </WikiBox>
              <WikiBox title="Server Stats" icon="leaderboard">
                <div class="flex flex-col items-center justify-center py-10 text-center space-y-4">
                  <div class="w-16 h-16 rounded-full border border-dashed border-[#2d3a4f] flex items-center justify-center mb-2">
                    <span class="material-icons text-[#2d3a4f] text-3xl">
                      analytics
                    </span>
                  </div>
                  <div class="space-y-1">
                    <h4 class="text-[#8a96a8] text-[11px] font-black uppercase tracking-widest">
                      Data Unavailable
                    </h4>
                    <p class="text-[10px] text-[#5c6b7f] uppercase tracking-wider leading-relaxed max-w-[200px]">
                      No statistics documented at this time.
                    </p>
                  </div>
                  <div class="pt-6 w-full">
                    <div class="h-[1px] w-full bg-[#2d3a4f]/30 mb-4" />
                    <p class="text-[9px] text-[#5c6b7f] italic font-sans uppercase tracking-widest">
                      Hopefully sometime :D
                    </p>
                  </div>
                </div>
              </WikiBox>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

const SidebarLink = (props: {
  href: string;
  label: string;
  active?: boolean;
  disabled?: boolean;
}) => (
  <a
    href={props.disabled ? "javascript:void(0)" : props.href}
    class={`px-5 py-3 text-[10px] font-black uppercase tracking-[0.25em] border-l-[3px] transition-all relative ${
      props.active
        ? "bg-white/[0.03] border-[#e9a33b] text-white"
        : props.disabled
        ? "border-transparent text-[#2d3a4f] cursor-not-allowed"
        : "border-transparent text-[#5c6b7f] hover:text-white hover:border-[#2d3a4f] hover:bg-white/[0.01]"
    }`}
  >
    {props.label}
  </a>
);
const WikiBox = (props: { title: string; icon: string; children: any }) => (
  <section class="relative bg-[#121a27]/50 backdrop-blur-sm border-t border-l border-[#2d3a4f] border-b-[4px] border-r-[4px] border-[#090d14] p-8 transition-all hover:bg-[#121a27]/80">
    <div class="flex items-center gap-3 mb-8 border-b border-[#2d3a4f]/50 pb-5">
      <span class="material-icons text-[#e9a33b] text-sm">{props.icon}</span>
      <h3 class="text-[10px] font-black uppercase tracking-[0.4em] text-[#8a96a8]">
        {props.title}
      </h3>
    </div>
    {props.children}
  </section>
);
