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
      <h1 className="text-6xl font-extrabold text-center px-6 py-8 mt-6 mb-4 tracking-wide">
        Chioma Kalu Page
      </h1>
      <section id="home" className="relative w-full bg-center px-6">
        {/* Image */}
        <div className="flex justify-center -mt-4 border-b border-pink-700 pb-8 overflow-x-auto">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative w-[420px] aspect-[3/5] overflow-hidden shadow-2xl"
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
        <div className="relative z-10 max-w-5xl py-12 items-center mx-auto">
          <h1 className="text-6xl font-extrabold mb-6 text-white pl-6">
            Who I am
          </h1>
          <div className="text-lg text-gray-200 leading-relaxed pl-6 font-sans font-regular">
            <p className="mb-4">
              I'm Chioma Kalu, a journalist and digital reporter working with
              ARISE News, one of Nigeria’s leading news organizations. My work
              spans a diverse range of topics, including politics, climate,
              business, and global affairs.
            </p>
            <p className="mb-4">
              I’ve reported on key national issues such as land title
              revocations in Abuja, political dynamics involving figures like
              Nyesom Wike and President Bola Tinubu, as well as international
              developments in energy policy and global security.
            </p>
            <p className="mb-4">
              In addition to my journalism career, I'm also a voice-over artist
              and writer. I hold a degree from the University of Port Harcourt
              and bring a thoughtful, creative approach to every project I
              undertake.
            </p>
            <p className="mb-4">
              Beyond my professional work, I'm active on social media, where I
              share insights into my reporting, daily life, and connect with a
              broader audience.
            </p>
          </div>
          <div className="mt-10 flex space-x-4 pl-6 justify-center">
            <button
              onClick={() => setActive("projects")}
              className="px-6 py-3 bg-pink-700 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-800 transition"
            >
              Experience
            </button>
            <button
             onClick={() => setActive("skills")}
              className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition"
            >
              Skills
            </button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="max-w-lg mx-auto space-y-6">
          <p className="text-center text-gray-300">
            Feel free to reach out if you're looking for a journalist, have a
            story idea, media inquiry, or simply want to connect.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-8 pb-20">
            <a
              href="mailto:ceekay730@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/pngtree-gmail-logo-png-image_229718-removebg-preview.png"
                alt="Gmail"
                className="w-10 h-10 hover:opacity-80"
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
                className="w-10 h-10 hover:opacity-80"
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
                className="w-10 h-10 hover:opacity-80"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
