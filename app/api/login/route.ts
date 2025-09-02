// app/api/login/route.ts
import { NextResponse } from "next/server";
import * as jose from "jose";

const HARD_CODED_PIN = "123456";

export async function POST(req: Request) {
    try {
       
        const text = await req.text();
        const { pin } = JSON.parse(text);

       
        // Validate PIN
        if (!pin || pin !== HARD_CODED_PIN) {
            return NextResponse.json(
                { message: "Invalid PIN" },
                { status: 401 }
            );
        }

        // Generate JWT
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "secret");
        const token = await new jose.SignJWT({ pin })
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("1h")
            .sign(secret);

        // Response body
        const responseBody = { success: true, message: "Login successful" };

        // Send response with cookie
        const response = new Response(JSON.stringify(responseBody), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

        response.headers.append(
            "Set-Cookie",
            `token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600`
        );
     
        return response;
    } catch (err) {
        console.error("Login error:", err);
        return NextResponse.json(
            { message: "Server error" },
            { status: 500 }
        );
    }
}

