import { useEffect, useState } from "react";
import Style from "./About.module.css";
function About() {
  return (
    <>
      <div className="min-h-screen bg-main w-screen flex items-center justify-center flex-col gap-6 text-white">
        <h1 className="text-3xl md:text-5xl uppercase font-bold">
          about component
        </h1>
        <div className="flex gap-4 items-center justify-center">
          <div className="h-1 w-24 bg-white"></div>
          <i class="fa-solid fa-star"></i>
          <div className="h-1 w-24 bg-white"></div>
        </div>
        <div className="flex flex-col md:flex-row container gap-10">
          <div>
            <p className="md:text-xl">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as <br /> well as optional SASS stylesheets for
              easy customization.
            </p>
          </div>
          <div>
            <p className="md:text-xl">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as <br /> well as optional SASS stylesheets for
              easy customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
