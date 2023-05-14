import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/libs/prismadb";

  const checkEmailExist = async (email) => {
  const user = await prisma.user.findUnique({ where: { email } });
  return !!user;
};

export async function POST(request) {
  const body = await request.json();

  const { email, password, name } = body;
  const hashedPassword = await bcrypt.hash(password, 12);

  const isEmailExist = await checkEmailExist(email);
  if (isEmailExist) {
    return NextResponse.json({
      status: "403",
      message: "Email already exists",
    });
  }

  const user = await prisma.user.create({
    data: {
      email: email,
      name: name,
      hashedPassword,
    },
  });

  return NextResponse.json({ status: 200, data: user });
}
