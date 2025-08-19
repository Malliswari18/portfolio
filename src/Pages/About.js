import React from "react";
import Work from "../Components/Work";
import { personalDetails, eduDetails } from "../Details";
import resume from "../assets/certifications/resume1.pdf";   



function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      {/* About Me Section */}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">
          {personalDetails.about}
        </p>

        {/* Resume Button */}
        <a
  href={resume}    // ✅ use imported variable
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
>
  View My Resume
</a>
      </section>

      {/* Education Section */}
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
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
