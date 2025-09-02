"use client";

import { useState } from "react";
import HomesPage from "./Home/page";
import ProjectsPage from "./projects/page";
import SkillsPage from "./Skills/page";
import ContactsPage from "./Contacts/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GetUploadsPage from "./uploads/view/page";
import LoginPage from "./login/page";
import UploadPage from "./uploads/page";
import cookie from "cookie";

export default function Home() {
  const router = useRouter();

  const navItems = [
    { id: "home", label: "Home", path: "/Home" },
    { id: "projects", label: "Work Experience", path: "/projects" },
    { id: "skills", label: "Skills", path: "/Skills" },
    { id: "getUploads", label: "Broadcasts", path: "/uploads/view" },
    { id: "contacts", label: "Contact", path: "/Contacts" },
  ];

  const [active, setActive] = useState(navItems[0].id);
  const [isOpen, setIsOpen] = useState(false);

  const handleAdminClick = async () => {
    const res = await fetch("/api/uploads");
    const { valid } = await res.json();

    if (valid) {
      setActive("uploads");
      setIsOpen(false);
    } else {
      setActive("login");
      setIsOpen(false);
    }
  };

  return (
    <div className="flex h-screen text-white">
      <>


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

          {/* Admin button */}
          <div className="mt-auto mb-8 ml-10">
            <button
              onClick={() => router.push("/login")}
              className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
            >
              Admin
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className={`flex-1 bg-black overflow-y-auto scroll-smooth transition-all duration-300 
          ${isOpen ? "ml-64" : "ml-0"} md:ml-64`}
        >
          {active === "home" && <HomesPage setActive={setActive} />}
          {active === "projects" && <ProjectsPage setActive={setActive} />}
          {active === "skills" && <SkillsPage />}
          {active === "contacts" && <ContactsPage />}
          {active === "login" && (
            <LoginPage setIsOpen={setIsOpen} setActive={setActive} />
          )}
          {active === "uploads" && (
            <UploadPage setIsOpen={setIsOpen} setActive={setActive} />
          )}
          {active === "getUploads" && <GetUploadsPage setActive={setActive} />}
        </main>
      </>
    </div>
  );
}