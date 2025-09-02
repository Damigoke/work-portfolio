"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface LoginPageProps {
  setActive?: (value: string) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginPage({ setIsOpen, setActive }: LoginPageProps) {
  const [pin, setPin] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin }),
        credentials: "include",
      });
      const data = await res.json();

      if (res.ok && data.success) {
        router.refresh();
        // router.push('/uploads')
        setActive && setActive("uploads");
        // setIsOpen(false);
        router.push("/uploads");
      } else {
        setError(data.message || "Invalid PIN");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-80 flex flex-col space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-black">
          Input PIN to Upload
        </h1>

        <input
          type="password"
          placeholder="Enter PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="text-black border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button
          type="submit"
          className="bg-pink-500 hover:bg-black text-white font-semibold py-2 rounded-lg transition-colors"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </section>
  );
}

