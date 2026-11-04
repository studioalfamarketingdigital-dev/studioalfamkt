import { Play, Youtube } from "lucide-react";

const videos = [
  {
    id: "EYr-Sstyz7Y",
    title: "Vídeo da Studio Alfa MKT",
    description: "Assista ao conteúdo publicado pela Studio Alfa MKT no YouTube.",
  },
];

const Videos = () => (
  <section id="videos" className="py-16 sm:py-20 lg:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
        <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">Studio Alfa em vídeo</span>
        <h2 className="mt-4 mb-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
          Conheça nosso trabalho <span className="text-gradient">em movimento</span>
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          Campanhas, projetos e conteúdos que mostram como pensamos e executamos comunicação.
        </p>
      </div>
      <div className="mx-auto max-w-5xl">
        {videos.map((video) => (
          <article key={video.id} className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            <div className="aspect-video w-full bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                title={video.title}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div className="min-w-0">
                <h3 className="mb-2 text-lg font-bold sm:text-xl">{video.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{video.description}</p>
              </div>
              <a href={`https://youtu.be/${video.id}`} target="_blank" rel="noopener noreferrer" className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto">
                <Play className="h-4 w-4" /> Assistir no YouTube
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-7 text-center">
        <a href="https://www.youtube.com/@studioalfamkt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
          <Youtube className="h-5 w-5" /> Ver mais vídeos no YouTube
        </a>
      </div>
    </div>
  </section>
);

export default Videos;
