import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request) {
  const body = await request.json();
  const { email } = body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error({message:"Email does not exist"})
  
  }

  return NextResponse.json({ ...user ,status:200});
}
