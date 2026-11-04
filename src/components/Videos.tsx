import { Play, Youtube } from "lucide-react";

const videos = [
  {
    id: "EYr-Sstyz7Y",
    title: "Studio Alfa MKT — vídeo institucional",
    description: "Conheça um pouco mais do nosso trabalho, posicionamento e visão de comunicação.",
  },
];

const Videos = () => (
  <section id="videos" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-primary font-semibold uppercase tracking-wider text-sm">Studio Alfa em vídeo</span>
        <h2 className="text-3xl md:text-5xl font-black mt-4 mb-5">Conheça nosso trabalho <span className="text-gradient">em movimento</span></h2>
        <p className="text-muted-foreground text-lg">Campanhas, projetos e conteúdos que mostram como pensamos e executamos comunicação.</p>
      </div>
      <div className="max-w-5xl mx-auto grid gap-8">
        {videos.map((video) => (
          <article key={video.id} className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                title={video.title}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div><h3 className="text-xl font-bold mb-2">{video.title}</h3><p className="text-muted-foreground">{video.description}</p></div>
              <a href={`https://youtu.be/${video.id}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground font-semibold px-5 py-3 shrink-0"><Play className="w-4 h-4" /> Assistir no YouTube</a>
            </div>
          </article>
        ))}
      </div>
      <div className="text-center mt-8"><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"><Youtube className="w-5 h-5" /> Ver mais vídeos no YouTube</a></div>
    </div>
  </section>
);

export default Videos;
