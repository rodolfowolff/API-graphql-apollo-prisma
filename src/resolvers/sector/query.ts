const Query = {
  getAllSectors: async (_parent: any, _args: any, context) => {
    const findSectors = await context.prisma.sector.findMany();

    return {
      sectors: findSectors,
      total: findSectors.length,
    };
  },
};

export default Query;
