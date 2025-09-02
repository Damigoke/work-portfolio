"use client";

import { useState } from "react";
import { useToast } from "../../components/ui/use-toast";
import { useRouter } from "next/navigation";

interface UploadsPageProps {
  setActive?: (value: string) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function UploadPage({ setIsOpen, setActive }: UploadsPageProps) {
  const [file, setFile] = useState<File | null>(null);
  const [filename, setFilename] = useState("");
  const [redirect_url, setRedirect_Url] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
   const router = useRouter();
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!filename || (!file && !redirect_url)) {
      toast({
        title: "Missing Information",
        description:"Please provide a filename and at least an image or a link.",
      });
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("filename", filename);
      if (file) formData.append("file", file);
      if (redirect_url) formData.append("redirect_url", redirect_url);

      const res = await fetch("/api/uploads", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
    

      if (!res.ok) {
        toast({ title: data.message || "Upload failed" });
      } else {
        toast({
          title: "Upload Successful 🎉",
          description: "Your file has been uploaded successfully.",
        });

        // reset form
        setFile(null);
        setFilename("");
        setRedirect_Url("");
        setActive && setActive("getUploads");
        router.push("/uploads/view")
      }
    } catch (err) {
      console.error("Error uploading:", err);
    toast({
      variant: "destructive", 
      title: "Upload Failed",
      description: "An error occurred while uploading. Please try again.",
    });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96 flex flex-col space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-black">
          Upload Videos Link
        </h1>

        {/* File Name */}
        <input
          type="text"
          placeholder="Enter File Name"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          className="text-black border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black-500"
          required
        />

        {/* File input */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="text-black border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black-500"
        />

        {/* Link input */}
        <input
          type="url"
          placeholder="Enter File Link"
          value={redirect_url}
          onChange={(e) => setRedirect_Url(e.target.value)}
          className="text-black border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black-500"
        />

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition-colors disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </section>
  );
}