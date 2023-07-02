import prisma from "@/app/libs/prismadb";

const getListing = async (params = {}) => {
  try {
    let query = {};
    if (params && params?.userId) query.userId = params.userId;

    if (params && params?.category) query.category = params.category;

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
