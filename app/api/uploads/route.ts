import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import prisma from "@/lib/prisma"; // make sure you have this helper
import * as jose from "jose";
import { uploadSchema } from "@/lib/utils";
import { saveUploadedFile } from "@/lib/upload";

// ✅ verify JWT from cookies
async function verifyToken(req: Request) {
    const cookie = req.headers.get("cookie");
    const token = cookie?.split("token=")[1]?.split(";")[0];

    if (!token) throw new Error("Unauthorized");

    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "secret");
    await jose.jwtVerify(token, secret);
}

// =============================
// POST: Upload file & save record
// =============================
export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const filename = formData.get("filename") as string;
        const redirect_url = formData.get("redirect_url") as string;
        const file = formData.get("file") as File;


        // ✅ Validate filename + link
        const { error } = uploadSchema.validate({ filename, redirect_url });
        if (error) {
            return NextResponse.json(
                { message: error.details[0].message },
                { status: 400 }
            );
        }

        // ✅ Validate file
        if (!file) {
            return NextResponse.json({ message: "File is required" }, { status: 400 });
        }
        if (!file.type.startsWith("image/")) {
            return NextResponse.json({ message: "Only images allowed" }, { status: 400 });
        }

        // ✅ Save file (works both local + Render)
        const { filePath, relativePath } = await saveUploadedFile(file);

        // ✅ Save in DB
        const upload = await prisma.mediaUpload.create({
            data: {
                filename,
                redirect_url: redirect_url,
                fileurl: relativePath,
            },
        });

        return NextResponse.json({ success: true, upload }, { status: 201 });
    } catch (err) {
        console.error("Upload error:", err);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}

// =============================
// GET: Fetch all uploads
// =============================
export async function GET(req: Request) {
    try {

        const uploads = await prisma.mediaUpload.findMany({
            orderBy: { createdAt: "asc" },
        });

        return NextResponse.json({ uploads });
    } catch (err) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
}

export async function DELETE(req: Request) {
    try {
        const result = await prisma.mediaUpload.deleteMany();

        return NextResponse.json({
            message: "All uploads deleted successfully",
            count: result.count, // number of records deleted
        });
    } catch (err) {
        console.error("Error deleting uploads:", err);
        return NextResponse.json(
            { message: "Failed to delete uploads" },
            { status: 500 }
        );
    }
}
