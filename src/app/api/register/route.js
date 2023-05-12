import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/libs/prismadb";

export async function POST(request) {
  const body = await request.json();

  const { email, password, name } = body;
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email: email,
      name: name,
      hashedPassword,
    },
  });

  return NextResponse.json({ status: 200, data: user });
}
