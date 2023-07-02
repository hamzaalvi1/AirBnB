import prisma from "@/app/libs/prismadb";
import getUser from "./getUser";

const getFavoritesListing = async () => {
  try {
    const currentUser = await getUser();
    if (!currentUser) throw new Error("user is logged in");

    const favoritesList = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser?.favoriteIds || [])],
        },
      },
    });

    return favoritesList;
  } catch (err) {
    throw new Error(err);
  }
};

export default getFavoritesListing;
