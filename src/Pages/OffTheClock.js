import React from "react";
import { offTheClock, galleryImages, contactDetails } from "../Details";
import PageHeader from "../Components/ui/PageHeader";
import Button from "../Components/ui/Button";
import Seo from "../Components/Seo";

function GalleryRow({ images, duration, reverse }) {
  const loop = [...images, ...images];
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-bg to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-bg to-transparent sm:w-24" />
      <div className="group overflow-hidden">
        <div
          className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused]"
          style={{
            animationDuration: `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {loop.map((img, i) => (
            <div
              key={i}
              className="h-40 w-56 shrink-0 overflow-hidden rounded-2xl shadow-soft sm:h-52 sm:w-72"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function OffTheClock() {
  const { intro, collaborate, travel, countries, sports } = offTheClock;
  const midpoint = Math.ceil(galleryImages.length / 2);
  const galleryRowTop = galleryImages.slice(0, midpoint);
  const galleryRowBottom = galleryImages.slice(midpoint);

  return (
    <>
      <Seo
        title="Off the Clock"
        description="Beyond research and engineering: Alexandre Benoit on building products, a researcher's curiosity, sport (tennis, karting, guitar, boxing, skating) and a passion for travel across 37+ countries."
        path="/off-the-clock"
      />

      <PageHeader
        label="Off the Clock"
        title="Off the Clock"
        subtitle="Who I am when I'm not training models — building, moving, playing, and exploring the world."
      />

      {/* Builder / researcher narrative */}
      <section className="pb-16 pt-6">
        <div className="app-container">
          <div className="card p-6 md:p-10">
            <span className="section-label">Builder &amp; researcher</span>
            <p className="mt-4 text-lg leading-relaxed text-text-primary">
              {intro}
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              {collaborate}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={`mailto:${contactDetails.email_2}`} variant="primary">
                Contact me
              </Button>
              <Button to="/projects" variant="secondary">
                See what I build
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sport */}
      <section className="section-pad">
        <div className="app-container-wide">
          <h2 className="mb-8 text-center font-serif text-2xl font-bold text-text-primary md:text-3xl">
            A life in motion
          </h2>
          <p className="section-subtitle mb-10 text-center">
            Sport keeps me sharp. Tennis is my main game, but I'm just as happy on
            a kart, behind a guitar, in the ring, or on a board.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {sports.map((s) => (
              <div
                key={s.name}
                className="card card-hoverable flex flex-col items-center justify-center gap-3 p-6 text-center"
              >
                <span className="text-4xl" aria-hidden="true">
                  {s.emoji}
                </span>
                <span className="font-serif text-lg font-bold text-text-primary">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel */}
      <section className="section-pad bg-bg-alt/70 pt-0 backdrop-blur-sm">
        <div className="app-container">
          <div className="card flex flex-col items-center gap-4 p-8 text-center md:p-12">
            <span className="section-label">Passport</span>
            <div className="font-serif text-5xl font-bold text-accent md:text-6xl">
              {countries}
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-text-light">
              countries explored
            </p>
            <p className="mt-2 max-w-xl text-base leading-relaxed text-text-muted">
              {travel}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad pt-0">
        <div className="app-container-wide">
          <h2 className="mb-3 text-center font-serif text-2xl font-bold text-text-primary md:text-3xl">
            Snapshots
          </h2>
          <p className="section-subtitle mb-10 text-center">
            A few frames from the road, the court, and everywhere in between.
          </p>
          <div className="flex flex-col gap-4">
            <GalleryRow images={galleryRowTop} duration={38} />
            <GalleryRow images={galleryRowBottom} duration={44} reverse />
          </div>
        </div>
      </section>
    </>
  );
}
