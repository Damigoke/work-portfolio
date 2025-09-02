import { put } from '@vercel/blob';

export async function saveUploadedFile(file: File) {
  const arrayBuffer = await file.arrayBuffer();

  // Upload to Vercel Blob
  const blob = await put(file.name, arrayBuffer, {
    contentType: file.type,
    access: 'public', // or 'private' based on your requirements
  });

  return {
    url: blob.url, // This is the public URL of the uploaded file
    name: file.name,
  };
}

