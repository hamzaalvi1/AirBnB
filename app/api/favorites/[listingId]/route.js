import { NextResponse } from "next/server";
import getUser from "@/app/actions/getUser";
import prisma from "@/app/libs/prismadb";

export const POST = async (req, { params }) => {
  try {
    const currentUser = await getUser();
    if (!currentUser) {
      return NextResponse.error(401, "Unauthorized resource");
    }
    const { listingId } = params;
    if (!listingId || typeof listingId !== "string") {
      throw new Error("Invalid ID");
    }
    let favoriteIds = [...(currentUser.favoriteIds || [])];
    favoriteIds.push(listingId);

    const user = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favoriteIds,
      },
    });
    return NextResponse.json(
      {
        message: "Successfully added",
        data: user,
      },
      { status: 200 }
    );
  } catch (err) {
    console.log("err", err);
    return NextResponse.error(500, "Internal Server Error");
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const currentUser = await getUser();
    if (!currentUser) {
      return NextResponse.error(500, "Unauthorized Resource");
    }
    const { listingId } = params;
    if (!listingId || typeof listingId !== "string") {
      throw new Error("Invalid listing ID");
    }
    let favoriteIds = [...(currentUser.favoriteIds || [])];
    favoriteIds = favoriteIds.filter((id) => id !== listingId);

    const user = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favoriteIds,
      },
    });
    return NextResponse.json(
      {
        message: "Successfully created",
        data: user,
      },
      { status: 201 }
    );
  } catch (err) {
    console.log("err", err);
    return NextResponse.error(500, "Internal Server Error");
  }
};
