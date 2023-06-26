import prisma from "@/app/libs/prismadb";

const getReservations = async (params) => {
  try {
    const { listingId, userId, authorId } = params;
    const query = {};

    if (listingId) {
      query.listingId = listingId;
    }
    if (userId) {
      query.userId = userId;
    }
    if (authorId) {
      query.authorId = authorId;
    }

    const reservedReservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return reservedReservations;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
export default getReservations;
