import { ArrowUpRight, BadgeCheck, RadioTower } from "lucide-react";

const Credentials = () => (
  <section id="credenciais" className="relative overflow-hidden border-y border-white/10 bg-[#0d0d0d] py-20 sm:py-24">
    <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
    <div className="container relative mx-auto px-4 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-kicker">Experiência, conhecimento e conexões</span>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
          Mídia, estratégia e <span className="text-gradient">conexões que ampliam possibilidades.</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/60">
          Desde 2019, conectando marcas a oportunidades de comunicação. Reunimos capacitação profissional, planejamento integrado e acesso a diferentes formatos de mídia.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-[#141414] p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary"><BadgeCheck size={22} /></span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-primary">Certificações e capacitação</p>
              <h3 className="mt-1 text-xl font-extrabold text-white">Formação em mídia</h3>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/55">
            Capacitação profissional em mídia programática e mídia híbrida, com formações realizadas no GAMA e na Globo.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="flex min-h-36 flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-5 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#ff1682] bg-[#ff1682]/10 text-xl font-black tracking-tight text-[#ff4b9c]">GAMA</div>
              <p className="mt-3 font-extrabold text-white">Ecossistema Programático</p>
              <p className="mt-1 text-xs text-white/45">Certificação GAMA</p>
            </div>
            <div className="flex min-h-36 flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-5 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#a855f7] bg-gradient-to-br from-[#ec4899]/20 to-[#7c3aed]/20 text-center text-[10px] font-black leading-tight text-white">master<br/>globo</div>
              <p className="mt-3 font-extrabold text-white">Mídia Híbrida</p>
              <p className="mt-1 text-xs text-white/45">Formação Globo</p>
            </div>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-white/40">
            Credenciais de formação profissional individual. Não representam certificação institucional ou credenciamento corporativo da S.Alfa MKT pela Globo.
          </p>
        </article>

        <article className="rounded-3xl border border-white/10 bg-[#141414] p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary"><RadioTower size={22} /></span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-primary">Ecossistema de mídia</p>
              <h3 className="mt-1 text-xl font-extrabold text-white">Conexões e oportunidades</h3>
            </div>
          </div>
          <div className="mt-7 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-lg font-black text-white">Globo</p>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/50">Veículo de mídia</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                A S.Alfa MKT utiliza carta de credenciamento emitida por anunciantes para autorizar sua representação comercial perante veículos, incluindo a Globo, conforme os poderes, assinaturas e prazos de cada documento.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-lg font-black text-white">MídiaMap</p>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">Plataforma do ecossistema</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                Plataforma criada para conectar anunciantes a inventários e oportunidades de mídia OOH e DOOH, facilitando a descoberta e o planejamento de campanhas em ambientes urbanos.
              </p>
              <a href="https://midiamap.studioalfamkt.online/" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-primary transition hover:text-white">
                Conheça o MídiaMap <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </article>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[.03] px-6 py-5 text-center">
        <p className="text-sm font-bold text-white">Planejamento de mídia 360°</p>
        <p className="mt-2 text-sm leading-relaxed text-white/55">
          Estratégias que podem integrar televisão, rádio, mídia exterior, painéis digitais, mídia impressa e canais digitais, de acordo com o objetivo, a praça, a disponibilidade e a negociação de cada campanha.
        </p>
      </div>
    </div>
  </section>
);

export default Credentials;
