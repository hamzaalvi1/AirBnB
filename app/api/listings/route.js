import { NextResponse } from "next/server";
import getUser from "@/app/actions/getUser";
import prisma from "@/app/libs/prismadb";

export async function POST(request) {
  try {
    const currentUser = await getUser();
    if (!currentUser)
      return NextResponse.error("Unauthorized resource", { status: 401 });
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
    console.log(data, "data");

    const listing = await prisma.listing.create({
      data: {
        title: title,
        description: description,
        imageSrc: imageSrc,
        category: category,
        bathroomCount: bathroomCount,
        guestCount: guestCount,
        roomCount: roomCount,
        locationValue: location.value,
        price: parseInt(price, 10),
        userId: currentUser.id,
      },
    });
    return NextResponse.json({
      status: 201,
      message: "Successfully created",
      data: listing,
    });
  } catch (err) {
     NextResponse.error("Error", { status: 500 });
  }
}
