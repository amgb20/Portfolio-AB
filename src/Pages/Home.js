import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img, img2 } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  const myimageref2 = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
        )
        .from(
          myimageref2.current,
          {
            x: "200%",
            delay: 0.5,
            opacity: 0,
            duration: 2,
            ease: "Power3.easeOut",
          },
          "<"
      );
      return () => tl.kill();
  }, []);

  return (
    <main className="container mx-auto max-width min-h-[calc(100vh-200px)] flex items-center py-8 md:py-12 lg:py-16">
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12">
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <div ref={h11} className="space-y-2">
            <span className="inline-block text-lg sm:text-xl md:text-2xl text-dark-content dark:text-light-content font-medium">
              Hello, I'm
            </span>
          </div>
          <h1
            ref={h12}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient text-transparent font-bold leading-tight"
          >
            {name}
          </h1>
          <h2
            ref={h13}
            className="text-xl sm:text-2xl md:text-3xl text-dark-heading dark:text-light-heading font-semibold leading-relaxed"
          >
            {tagline}
          </h2>
          <div ref={myimageref2} className="flex justify-center md:justify-start items-center gap-4 pt-4">
            <img
              className="w-16 sm:w-20 md:w-24 transition-transform duration-300 hover:scale-110"
              src={img2}
              alt="University of Cambridge crest"
            />
            <div className="h-12 w-px bg-gray-300 dark:bg-gray-600 hidden sm:block"></div>
            <div className="hidden sm:flex gap-3">
              <a 
                href="/projects" 
                className="px-5 py-2.5 bg-gradient text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm"
              >
                View Projects
              </a>
              <a 
                href="/contact" 
                className="px-5 py-2.5 border-2 border-gray-300 dark:border-gray-600 text-dark-heading dark:text-light-heading font-medium rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-sm"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex sm:hidden justify-center gap-3 pt-2">
            <a 
              href="/projects" 
              className="px-5 py-2.5 bg-gradient text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 text-sm"
            >
              View Projects
            </a>
            <a 
              href="/contact" 
              className="px-5 py-2.5 border-2 border-gray-300 dark:border-gray-600 text-dark-heading dark:text-light-heading font-medium rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-sm"
            >
              Contact
            </a>
          </div>
        </div>
        <div ref={myimageref} className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <img 
              className="relative w-64 sm:w-72 md:w-80 lg:w-96 rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]" 
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
