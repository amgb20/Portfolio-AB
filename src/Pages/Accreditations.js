import React from "react";
import Work from "../Components/Work";
import { eduDetails } from "../Details";
import "../index.css";
import { Link } from "react-router-dom";

function About() {

  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Accreditations
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>      
    </main>
  );
}

export default About;