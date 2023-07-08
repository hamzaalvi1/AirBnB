import prisma from "@/app/libs/prismadb";

const getListing = async (params = {}) => {
  try {
    let query = {};
    if (params && params?.userId) query.userId = params.userId;

    if (params && params?.category) query.category = params.category;
    if (params && params?.locationValue)
      query.locationValue = params.locationValue;
    if (params && params?.guestCount)
      query.guestCount = {
        gte: +params.guestCount,
      };
    if (params && params?.roomCount)
      query.roomCount = {
        gte: +params.roomCount,
      };
    if (params && params?.bathroomCount)
      query.bathroomCount = {
        gte: +params.bathroomCount,
      };

    if (params && params?.startDate && params?.endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                endDate: { gte: params?.startDate },
                startDate: { lte: params?.startDate },
              },
              {
                startDate: { lte: params?.endDate },
                endDate: { gte: params?.endDate },
              },
            ],
          },
        },
      };
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });
    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export default getListing;
