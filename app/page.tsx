"use client";

import { useState } from "react";
import HomesPage from "./Home/page";
import ProjectsPage from "./projects/page";
import SkillsPage from "./Skills/page";
import ContactsPage from "./Contacts/page";

export default function Home() {
  const navItems = [
    { id: "home", label: "Home", path: "/Home" },
    { id: "projects", label: "Work Experience", path: "/projects" },
    { id: "skills", label: "Skills", path: "/Skills" },
    { id: "contacts", label: "Contact", path: "/Contacts" },
  ];

  const [active, setActive] = useState(navItems[0].id);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-black text-white">
      <>
        {/* Hamburger for Mobile */}
        <div className="fixed top-4 left-4 z-50 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col space-y-1.5 p-2 bg-black rounded-md border border-gray-700"
          >
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Mobile Sidebar + Backdrop */}
        {/* Sidebar + Backdrop */}
{isOpen && (
  <div className="fixed inset-0 z-40 md:hidden flex items-start justify-start">
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black bg-opacity-50"
      onClick={() => setIsOpen(false)}
    ></div>

    {/* Sidebar (smaller height, still overlayed) */}
    <aside
      className={`relative top-0 left-0 w-64 h-screen bg-black border-r border-gray-700 transform transition-transform duration-300 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} z-50`}
    >
      <h1 className="text-3xl font-bold mt-10 text-center">Cee's Corner</h1>
      <nav className="flex flex-col space-y-6 text-lg mt-4 ml-10">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.path}
            onClick={(e) => {
              e.preventDefault();
              setActive(item.id);
              setIsOpen(false);
            }}
            className={`transition-colors hover:text-pink-500 ${
              active === item.id ? "text-pink-500 font-semibold" : ""
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
        </aside>
      </div>
      )}


        {/* Sidebar (Desktop only, always visible) */}
        <aside className="hidden md:fixed md:top-0 md:left-0 md:h-screen md:w-64 md:bg-black md:border-r md:border-gray-700 md:flex md:flex-col">
          <h1 className="text-3xl font-bold mt-[4.25rem] text-center">
            Cee's Corner
          </h1>
          <nav className="flex flex-col space-y-6 text-lg mt-4 ml-10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(item.id);
                }}
                className={`transition-colors hover:text-pink-500 ${
                  active === item.id ? "text-pink-500 font-semibold" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main
          className={`flex-1 overflow-y-auto scroll-smooth transition-all duration-300 
          ${isOpen ? "ml-64" : "ml-0"} md:ml-64`}
        >
          {active === "home" && <HomesPage setActive={setActive} />}
          {active === "projects" && <ProjectsPage />}
          {active === "skills" && <SkillsPage />}
          {active === "contacts" && <ContactsPage />}
        </main>
      </>
    </div>
  );
}
