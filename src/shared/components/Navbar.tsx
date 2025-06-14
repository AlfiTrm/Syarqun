"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/img/logo.webp";
import { navlink } from "../data/navlink";
import { useScrollSpy } from "../hooks/useScroll";
import { Navlist } from "./Navlist";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionIds = navlink.map((link) => link.href.replace("#", ""));
  const activeId = useScrollSpy(sectionIds, 80);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow z-50 fixed top-0 w-full">
      <main className="h-16 w-full flex items-center justify-between text-sm font-normal mycontainer">
        <section className="flex items-center w-44 mr-2">
          <Image src={logo} alt="logo" className="w-16 h-auto" />
          <h1 className="text-2xl font-black text-green-800">Syarkun</h1>
        </section>

        <div className="hidden lg:flex font-semibold items-center gap-6">
          <ul className="w-3/5 flex justify-center gap-8">
            {navlink.map((item) => (
              <Navlist
                key={item.id}
                item={item}
                activeHash={item.href.replace("#", "") === activeId}
                variant="desktop"
              />
            ))}
          </ul>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 backdrop-blur-xs bg-opacity-50 lg:hidden z-40"
              onClick={closeMenu}
            />

            <section className="fixed top-16 left-0 right-0 bg-white shadow-lg lg:hidden z-50 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="py-4 px-4">
                <ul className="space-y-1">
                  {navlink.map((item) => (
                    <li key={item.id} onClick={closeMenu}>
                      <Navlist
                        item={item}
                        activeHash={item.href.replace("#", "") === activeId}
                        variant="mobile"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </>
        )}
      </main>
    </nav>
  );
};

export default Navbar;
