import { useEffect, useState } from "react";
import Style from "./Footer.module.css";
function Footer() {
  return (
    <>
      <footer className="flex justify-between items-center text-white bg-sec py-40 flex-col md:flex-row gap-8">
        <div className="w-1/3 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">LOCATION</h3>
          <p className="md:text-xl">2215 John Daniel Drive</p>
          <p className="md:text-xl">Clark, MO 65243</p>
        </div>
        <div className="w-1/3 text-center ">
          <h3 className="text-2xl md:text-3xl font-bold">AROUND THE WEB</h3>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="border-2 flex items-center justify-center border-white p-2 rounded-full">
              <i className="fa-brands fa-facebook scale-125"></i>
            </div>
            <div className="border-2 flex items-center justify-center border-white  p-2  rounded-full">
              <i className="fa-brands fa-twitter scale-125"></i>
            </div>
            <div className="border-2 flex items-center justify-center border-white  p-2  rounded-full">
              <i className="fa-brands fa-linkedin-in scale-125"></i>
            </div>
            <div className="border-2 flex items-center justify-center border-white  p-2  rounded-full">
              <i className="fa-solid fa-earth-americas scale-125"></i>
            </div>
          </div>
        </div>
        <div className="w-1/3 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">ABOUT FREELANCER</h3>
          <p className="md:text-xl">
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </footer>
      <div className="bg-third w-screen">
        <p className="py-10 text-center text-white">
          Copyright © Your Website 2021
        </p>
      </div>
    </>
  );
}

export default Footer;
