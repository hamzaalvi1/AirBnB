import { errorLogger } from "../components/Toaster";
import prisma from "@/app/libs/prismadb";

const getListing = async (params) => {
  try {
    const listings = await prisma.listing.findMany({
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
    errorLogger(500, "something went wrong");
  }
};

export default getListing;
