import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    return Response.json({ valid: !!token });
}