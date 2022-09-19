const Query = {
  getAllCategories: async (_parent: any, _args: any, context) => {
    const findCategories = await context.prisma.categories.findMany();

    return {
      sectors: findCategories,
      total: findCategories.length,
    };
  },
};

export default Query;
