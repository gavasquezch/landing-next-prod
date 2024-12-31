"use server";
import prisma from "@/lib/prisma";

export const getFooter = async (siteId: string) => {
  try {

    const siteAbout = await prisma.footer.findFirst({
      where: {
        siteId: siteId,
      },
    });
    return siteAbout;
  } catch (error) {
    return null;
  }
};