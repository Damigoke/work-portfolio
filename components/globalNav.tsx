"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GlobalMobileNav() {
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
    try {
      const res = await fetch("/api/check-token");
      const { valid } = await res.json();

      if (valid) {
          setActive("uploads");
          setIsOpen(false)
        router.push("/uploads");
      } else {
          setActive("login");
          setIsOpen(false)
        router.push("/login");
      }
    } catch (err) {
      console.error("Error checking token:", err);
    }
  };

  return (
    <>
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mx-auto my-auto flex flex-col space-y-1.5 p-2 bg-black rounded-md border border-gray-700"
          type="button"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Sidebar + Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex items-start justify-start text-white">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <aside
            className={`relative top-0 left-0 w-64 h-screen bg-black border-r border-gray-700 transform transition-transform duration-300 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} z-50`}
          >
            <h1 className="text-3xl font-bold mt-10 text-center">
              Cee&apos;s Corner
            </h1>
            <nav className="flex flex-col space-y-6 text-lg mt-4 ml-10">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.path} // <-- works with Next.js routes
                  onClick={() => {
                    setActive(item.id);
                    setIsOpen(false);
                  }}
                  className={`transition-colors hover:text-pink-500 ${
                    active === item.id ? "text-pink-500 font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Admin button */}
            <div className="mt-auto mb-8 ml-10 md:static fixed bottom-4 left-4">
              <button
                onClick={handleAdminClick}
                className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
              >
                Admin
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
