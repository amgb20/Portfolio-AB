import React, { useRef, useEffect } from "react";
import { personalDetails, socialMediaUrl } from "../Details";
import { fadeIn } from "../utils/gsapReducedMotion";

function Home() {
  const { name, tagline, img, img2 } = personalDetails;
  const { linkdein, github, googlescholar } = socialMediaUrl;
  const heroRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const tl = fadeIn([heroRef.current, imageRef.current]);
    return () => tl?.kill();
  }, []);

  return (
    <main className="container mx-auto max-width pt-6 md:pt-12 pb-12">
      <div className="md:flex justify-between items-center gap-10">
        <div ref={heroRef} className="md:w-1/2">
          <p className="font-mono text-sm text-accent-cyan mb-4">
            &gt; whoami
          </p>
          <h1 className="font-heading text-3xl md:text-5xl xl:text-6xl font-bold text-text-primary leading-tight">
            {name}
          </h1>
          <p className="font-mono text-base md:text-lg text-text-muted mt-4">
            {tagline}
          </p>
          <div className="border-t border-border-subtle my-6" />
          <div className="flex items-center gap-4">
            <a
              href={github}
              target="_blank"
              rel="noreferrer noopener"
              className="link-cyan"
            >
              GitHub
            </a>
            <span className="text-border-subtle">|</span>
            <a
              href={linkdein}
              target="_blank"
              rel="noreferrer noopener"
              className="link-cyan"
            >
              LinkedIn
            </a>
            <span className="text-border-subtle">|</span>
            <a
              href={googlescholar}
              target="_blank"
              rel="noreferrer noopener"
              className="link-cyan"
            >
              Scholar
            </a>
          </div>
          <img
            className="w-16 md:w-20 mt-6 opacity-80"
            src={img2}
            alt="University of Cambridge crest"
          />
        </div>
        <div ref={imageRef} className="md:w-1/2 mt-10 md:mt-0">
          <div className="card-engineering border-accent-cyan/30 p-2">
            <img
              className="w-full rounded-md"
              src={img}
              alt="Alexandre Benoit"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
