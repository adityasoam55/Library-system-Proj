import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-16 grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
