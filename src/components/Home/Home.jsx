import { useEffect, useState } from "react";
import Style from "./Home.module.css";
import hero from "../../assets/avataaars.svg";
function Home() {
  return (
    <>
      <div className="min-h-screen bg-main w-screen flex items-center justify-center flex-col gap-6 text-white">
        <div className="w-80">
          <img src={hero} alt="hero" />
        </div>
        <h1 className="text-3xl md:text-5xl uppercase font-bold">
          start Framework
        </h1>
        <div className="flex gap-4 items-center justify-center">
          <div className="h-1 w-24 bg-white"></div>
          <i class="fa-solid fa-star"></i>
          <div className="h-1 w-24 bg-white"></div>
        </div>
        <p className="md:text-xl">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
}

export default Home;
