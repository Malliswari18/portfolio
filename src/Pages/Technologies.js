import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    vscode,
    github,
    python,
    c,
    java,
    googlecloud,
    flutter,
    jupyter,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={python} title="Python" alt="" />
        <img src={c} title="C" alt="" />
        <img src={java} title="Java" alt="" />
        <img src={googlecloud} title="Google Cloud" alt="" />
        <img src={flutter} title="flutter" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={python} title="python" alt="python"/>
        <img src={github} title="gihub" alt="github"/>
        <img src={jupyter} title="jupyter"alt="jupyter"/>
       
      </section>
    </main>
  );
}

export default Technologies;
