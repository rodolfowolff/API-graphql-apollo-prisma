const Query = {
  getAllCategories: async (_parent: any, _args: any, context) => {
    const findCategories = await context.prisma.category.findMany();

    return {
      categories: findCategories,
      total: findCategories.length,
    };
  },
};

export default Query;
