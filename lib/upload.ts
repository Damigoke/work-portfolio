import path from "path";
import { promises as fs } from "fs";




const isRender = process.env.RENDER === "true";

export async function saveUploadedFile(file: File) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Decide where to save file based on environment
  const uploadDir = isRender
    ? "/var/data/uploads" 
    : path.join(process.cwd(), "public", "uploads");

  const filePath = path.join(uploadDir, file.name);

  await fs.writeFile(filePath, buffer);

  return {
    filePath, 
    relativePath: `/uploads/${file.name}`, 
  };
}