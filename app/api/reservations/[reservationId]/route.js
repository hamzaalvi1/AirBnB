import { NextResponse } from "next/server";
import getUser from "@/app/actions/getUser";
import prisma from "@/app/libs/prismadb";

export const DELETE = async (_, reqId) => {
  try {
    const currentUser = await getUser();
    if (!currentUser) return NextResponse.error(401, "Unauthorized resource");
    const {
      params: { reservationId },
    } = reqId;
    console.log(reservationId);
    if (!reservationId) {
      return NextResponse.json(
        { message: "Invalid reservation id" },
        { status: 400 }
      );
    }
    const deleteReservations = await prisma.reservation.deleteMany({
      where: {
        id: reservationId,
        OR: [
          { userId: currentUser.id },
          { listing: { userId: currentUser?.id } },
        ],
      },
    });
    return NextResponse.json(
      {
        message: "Successfully deleted",
        data: deleteReservations,
      },
      { status: 200 }
    );
  } catch (err) {
    console.log("err", err);
    return NextResponse.error(500, "Internal Server Error");
  }
};
