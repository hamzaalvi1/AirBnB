import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request) {
  const session = await getServerSession(authOptions);
  console.log(session,"session")

  return NextResponse.json({ status: 200, data: { user: session } });
}
