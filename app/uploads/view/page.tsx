"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface HomesPageProps {
  setActive?: (value: string) => void;
}

export default function GetUploadsPage({ setActive }: HomesPageProps) {
  const [uploads, setUploads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUploads() {
      try {
        const res = await fetch("/api/uploads", { method: "GET" });
        const data = await res.json();
        setUploads(Array.isArray(data) ? data : data.uploads || []);
      } catch (err) {
        console.error("Error fetching uploads:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchUploads();
  }, []);

  // 🔹 Back button support
  // useEffect(() => {
  //   // Push history when entering Uploads page
  //   window.history.pushState({ page: "uploads" }, "", "#uploads");

  //   const handlePopState = () => {
  //     // 👈 When phone/browser back button is pressed → go back to login
  //     setActive && setActive("home");
  //   };

  //   window.addEventListener("popstate", handlePopState);
  //   return () => {
  //     window.removeEventListener("popstate", handlePopState);
  //   };
  // }, [setActive]);

  // if (loading) return <p>Loading...</p>;

  return (
    <section id="getUploads" className="p-6">
      <h1 className="text-xl font-bold mb-4 mt-6 text-center">
        Broadcast Clips
      </h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="bg-black flex flex-col items-center gap-12 md:flex-row md:flex-wrap md:justify-start">
          {uploads.length === 0 ? (
            <p>No uploads found.</p>
          ) : (
            uploads.map((file) => (
              <Link
                key={file.id}
                href={file.redirect_url}
                className="flex flex-col items-center"
              >
                <Image
                  src={file.fileurl}
                  alt={file.fileurl}
                  width={200}
                  height={200}
                  className="w-[200px] rounded-lg shadow-md object-cover block transition-transform hover:scale-105"
                  priority={true}
                />

                <p className="mt-6 text-center text-sm break-words whitespace-normal max-w-[300px]">
                  {file.filename}
                </p>
              </Link>
            ))
          )}
        </div>
      )}
    </section>
  );
}
