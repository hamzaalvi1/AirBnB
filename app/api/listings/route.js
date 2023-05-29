import { NextResponse } from "next/server";
import getUser from "@/app/actions/getUser";
import prisma from "@/app/libs/prismadb";

export async function POST(request) {
  try {
    const currentUser = await getUser();
    if (!currentUser) return NextResponse.error(401, "Unauthorized resource");
    const data = await request.json();
    const {
      title,
      description,
      imageSrc,
      category,
      roomCount,
      bathroomCount,
      guestCount,
      location,
      price,
    } = data;


    const listing = await prisma.listing.create({
      data: {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        locationValue: location.value,
        price: parseInt(price, 10),
        userId: currentUser.id,
      },
    });
    return NextResponse.json(
      {
        message: "Successfully created",
        data: listing,
      },
      { status: 201 }
    );
  } catch (err) {
    console.log("err", err);
    return NextResponse.error(500, "Internal Server Error");
  }
}
