import { useEffect, useState } from "react";
import Style from "./Layout.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <NavBar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
