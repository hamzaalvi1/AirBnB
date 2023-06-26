import { NextResponse } from "next/server";
import getUser from "@/app/actions/getUser";
import prisma from "@/app/libs/prismadb";

export const POST = async (request) => {
  try {
    const currentUser = await getUser();
    if (!currentUser) return NextResponse.error(401, "Unauthorized resource");
    const data = await request.json();
    const { listingId, startDate, endDate, totalPrice } = data;
    const reservation = await prisma.listing.update({
      where: {
        id: listingId,
      },

      data: {
        reservations: {
          create: {
            userId: currentUser?.id,
            startDate,
            endDate,
            totalPrice,
          },
        },
      },
    });
    return NextResponse.json(
      {
        message: "Successfully created",
        data: reservation,
      },
      { status: 201 }
    );
  } catch (err) {
    console.log("err", err);
    return NextResponse.error(500, "Internal Server Error");
  }
};
