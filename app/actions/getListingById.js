import prisma from "@/app/libs/prismadb";

const getListingById = async (listId) => {
  try {
    const list = await prisma.listing.findUnique({
      where: {
        id: listId,
      },
      include: {
        user: true,
      },
    });

    if (!list) {
      return null;
    }
    return {
      ...list,
      createdAt: list.createdAt.toISOString(),
      user: {
        ...list.user,
        createdAt: list.user.createdAt.toISOString(),
        updatedAt: list.user.updatedAt.toISOString(),
        emailVerified: list.user.emailVerified?.toISOString() || null,
      },
    };
  } catch (error) {
    return null;
  }
};
export default getListingById;
