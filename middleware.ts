import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";

export async function middleware(req: NextRequest) {
    
    const token = req.cookies.get("token")?.value;


    if (!token) {
        if (req.nextUrl.pathname.startsWith("/uploads/view")) {
            return NextResponse.next();
        }
        
         return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "secret");

        await jose.jwtVerify(token, secret);

        return NextResponse.next();
    } catch (err) {
        console.error("JWT verification failed:", err);
        return NextResponse.redirect(new URL("/login", req.url));
    }
}

export const config = {
    matcher: ["/uploads/:path*"],
};
