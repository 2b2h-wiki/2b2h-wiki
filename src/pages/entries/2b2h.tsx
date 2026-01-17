import MetaTitle from "../../components/metaTitle";

export default function ServerWiki() {
  return (
    <div class="relative w-full text-white bg-[#0b111a] min-h-screen font-serif selection:bg-[#e9a33b] selection:text-black">
      <MetaTitle title="Server | 2B2H Wiki" />

      <header class="relative w-full h-[60vh] flex items-end overflow-hidden border-b border-[#2d3a4f]">
        <div
          class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 z-0 grayscale-[50%]"
          style={{
            "background-image":
              "url('https://cdn.discordapp.com/attachments/1460322314951594137/1461705303543517388/a1kcXq6.png?ex=696c2f65&is=696adde5&hm=ceab1fd674d35b245ef1fb5ffe15b690ac1571e8b2f8ebb49a192e40c58a751f&')",
          }}
        />
        <div class="absolute inset-0 bg-[#1a2c44] opacity-20" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0b111a] via-transparent to-transparent z-10" />

        <div class="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16 z-20">
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-[#e9a33b] text-black text-[10px] font-black uppercase tracking-[0.3em] px-2 py-0.5">
              Main
            </span>
            <span class="text-[#5c6b7f] text-[10px] font-black uppercase tracking-[0.3em]">
              Server Info
            </span>
          </div>
          <h1 class="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white drop-shadow-2xl">
            2B2H.NET
          </h1>
        </div>
      </header>

      <div class="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        <div class="flex flex-col lg:flex-row gap-16">
          <article class="flex-1 space-y-16">
            <section class="space-y-6">
              <p class="text-xl text-[#8a96a8] leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-[#e9a33b] first-letter:mr-3 first-letter:float-left">
                2B2H is the OLDEST anarchy server for Hytale. With no rules, no
                staff intervention, and no resets! Every block placed and every
                war fought is recorded here in the permanent archive.
              </p>
            </section>

            <section class="space-y-8">
              <h2 class="text-2xl font-black uppercase tracking-[0.2em] text-white border-b border-[#2d3a4f] pb-4">
                Server Info
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="p-6 bg-[#121a27]/50 border-l-4 border-[#e9a33b] flex flex-col justify-between">
                  <div>
                    <span class="text-[9px] font-black text-[#5c6b7f] uppercase tracking-widest">
                      Connection Address
                    </span>
                    <h3 class="text-2xl font-black text-white tracking-tighter uppercase">
                      2B2H.NET
                    </h3>
                  </div>
                  <p class="mt-4 text-[10px] text-[#5c6b7f] uppercase font-bold">
                    Client: Standard Hytale
                  </p>
                </div>

                <a
                  href="https://discord.gg/2b2h"
                  target="_blank"
                  class="p-6 bg-[#121a27]/50 border-l-4 border-[#5865F2] hover:bg-[#5865F2]/10 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span class="text-[9px] font-black text-[#5c6b7f] uppercase tracking-widest">
                      Community Hub
                    </span>
                    <h3 class="text-2xl font-black text-white tracking-tighter uppercase group-hover:text-[#5865F2]">
                      Official Discord
                    </h3>
                  </div>
                  <p class="mt-4 text-[10px] text-[#5c6b7f] uppercase font-bold tracking-widest">
                    Join for updates & news →
                  </p>
                </a>
              </div>
            </section>

            <section class="space-y-8">
              <h2 class="text-2xl font-black uppercase tracking-[0.2em] text-white border-b border-[#2d3a4f] pb-4">
                Server Philosophy
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="space-y-4">
                  <h4 class="text-[#e9a33b] text-sm font-black uppercase tracking-widest">
                    Absence of Rules
                  </h4>
                  <p class="text-[#8a96a8] leading-relaxed text-sm">
                    Zero rules, zero moderation. It's up to the community to
                    make the server what it is — Whether complete chaos or
                    peaceful. (We all know not peaceful)
                  </p>
                </div>
                <div class="space-y-4">
                  <h4 class="text-[#e9a33b] text-sm font-black uppercase tracking-widest">
                    Unending Timeline
                  </h4>
                  <p class="text-[#8a96a8] leading-relaxed text-sm">
                    The world map is never reset. Every block placed or
                    destroyed remains part of the server's history forever.
                  </p>
                </div>
              </div>
            </section>
          </article>

          <aside class="w-full lg:w-96">
            <div class="sticky top-32 bg-[#121a27] border-t border-l border-[#2d3a4f] border-b-[4px] border-r-[4px] border-[#090d14] p-8 shadow-2xl space-y-10">
              <div class="space-y-6">
                <div class="flex items-center gap-3">
                  <div class="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#2d3a4f]" />
                  <h3 class="text-[#5c6b7f] text-[9px] font-black uppercase tracking-[0.4em] italic">
                    2B2H Owner
                  </h3>
                  <div class="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#2d3a4f]" />
                </div>

                <div class="relative group">
                  <div class="relative w-full aspect-square bg-[#0a0f16] border border-[#2d3a4f] p-1 overflow-hidden shadow-inner">
                    <img
                      src="https://cdn.discordapp.com/avatars/1131664462076715008/05914e28647a5e081a2514afc1fceb67.webp"
                      class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                      alt="Discord PFP"
                    />
                    <div class="absolute top-4 left-4 flex items-center gap-1.5 bg-[#0b111a]/90 backdrop-blur-md border border-[#e9a33b]/40 px-2 py-1 shadow-xl">
                      <span class="material-icons text-[#e9a33b] text-[10px]">
                        verified_user
                      </span>
                    </div>
                  </div>

                  <div class="mt-4 space-y-3">
                    <div class="flex flex-col border-l-2 border-[#e9a33b] pl-4 py-1">
                      <span class="text-[9px] font-black uppercase tracking-widest text-[#5c6b7f]">
                        Discord
                      </span>
                      <span class="text-xl font-black italic uppercase tracking-tighter text-white">
                        bustedshort
                      </span>
                    </div>

                    <div class="grid grid-cols-2 gap-2 pt-2">
                      <div class="bg-[#0a0f16] border border-[#2d3a4f]/50 p-2 text-center">
                        <p class="text-[7px] font-black text-[#5c6b7f] uppercase tracking-widest mb-1">
                          Accounts
                        </p>
                        <div class="space-y-0.5">
                          <p class="text-[9px] font-bold text-[#e9a33b] uppercase tracking-tighter">
                            Extinguish (Op)
                          </p>
                          <p class="text-[9px] font-bold text-white/60 uppercase tracking-tighter">
                            Lafufu
                          </p>
                          <p class="text-[9px] font-bold text-white/60 uppercase tracking-tighter">
                            mofusand
                          </p>
                        </div>
                      </div>
                      <div class="bg-[#0a0f16] border border-[#2d3a4f]/50 p-2 text-center flex flex-col justify-center">
                        <p class="text-[7px] font-black text-[#5c6b7f] uppercase tracking-widest mb-1">
                          Role
                        </p>
                        <p class="text-[10px] font-bold text-white uppercase tracking-tighter">
                          Founder
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="space-y-3 pt-6 border-t border-[#2d3a4f]">
                <InfoRow label="Status" value="Online" color="#10b981" />
                <InfoRow label="Founded" value="Jan 2026" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

const InfoRow = (props: { label: string; value: string; color?: string }) => (
  <div class="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
    <span class="text-[#5c6b7f]">{props.label}</span>
    <span style={{ color: props.color || "white" }} class="text-white">
      {props.value}
    </span>
  </div>
);
