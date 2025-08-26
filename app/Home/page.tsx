"use client";

// HomePage.jsx
import React from "react";

const images = [
  "/WhatsApp Image 2025-08-25 at 13.41.33_69b05ec8.jpg",
  "/SnapInsta.to_537018659_18163612258370302_6722054263085723820_n.jpg",
  // "/SnapInsta.to_491419140_18152487637370302_3200659701400577197_n.jpg",
];

interface HomesPageProps {
  setActive: (value: string) => void;
}

export default function HomesPage({ setActive }: HomesPageProps) {
  return (
    <>
      {/* Home Section */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-center px-4 sm:px-6 py-6 sm:py-8 mt-4 sm:mt-6 mb-4 tracking-wide">
        Chioma Kalu
      </h1>

      <section id="home" className="relative w-full bg-center px-4 sm:px-6">
        {/* Image */}
        <div className="flex justify-center -mt-4 sm:-mt-4 border-b border-pink-700 pb-6 sm:pb-8 overflow-x-auto">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative w-[260px] sm:w-[340px] lg:w-[420px] aspect-[3/5] overflow-hidden shadow-2xl flex-shrink-0"
            >
              <img
                src={src}
                alt={`Chioma Kalu ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* About Me Content */}
        <div className="relative z-10 max-w-5xl py-8 sm:py-12 mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white px-4 sm:pl-6 text-center sm:text-left">
            Who I am
          </h1>
          <div className="text-base sm:text-lg text-gray-200 leading-relaxed px-4 sm:pl-6 font-sans">
            <p className="mb-4">
              Chioma Kalu is a journalist and digital reporter with several
              years of experience covering politics, climate change, business,
              and global affairs. She has reported on pressing national issues
              such as land title revocations in Abuja and political dynamics
              involving figures like Nyesom Wike and President Bola Tinubu,
              while also providing in-depth coverage of international
              developments in energy policy and global security.
            </p>
            <p className="mb-4">
              In addition to her reporting, Chioma is a skilled voice-over
              artist and writer who brings creativity, clarity, and a compelling
              narrative style to every project. Whether through investigative
              journalism, storytelling, or media production, she combines
              analytical rigor with creativity to craft impactful content that
              informs and engages.
            </p>
            <p className="mb-4">
              Beyond her professional achievements, Chioma is active on social
              media, where she shares insights from her reporting, her creative
              projects, and moments from her daily life. She values truth,
              accountability, and amplifying diverse voices.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 px-4 sm:pl-6 justify-center sm:justify-center">
            <button
              onClick={() => setActive("projects")}
              className="px-5 sm:px-6 py-3 bg-pink-700 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-800 transition"
            >
              Experience
            </button>
            <button
              onClick={() => setActive("skills")}
              className="px-5 sm:px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition"
            >
              Skills
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">
          Get in Touch
        </h2>
        <div className="max-w-lg mx-auto space-y-6">
          <p className="text-center text-gray-300 text-sm sm:text-base">
            Feel free to reach out if you're looking for a journalist, have a
            story idea, media inquiry, or simply want to connect.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 sm:space-x-8 pb-12 sm:pb-20">
            <a
              href="mailto:ceekay730@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/pngtree-gmail-logo-png-image_229718-removebg-preview.png"
                alt="Gmail"
                className="w-8 h-8 sm:w-10 sm:h-10 hover:opacity-80"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/chioma-kalu-524355193/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc-removebg-preview.png"
                alt="LinkedIn"
                className="w-8 h-8 sm:w-10 sm:h-10 hover:opacity-80"
              />
            </a>

            <a
              href="https://www.instagram.com/officialchiomakalu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/kauqojrqmq9zygmiyxm8-removebg-preview.png"
                alt="Instagram"
                className="w-8 h-8 sm:w-10 sm:h-10 hover:opacity-80"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
