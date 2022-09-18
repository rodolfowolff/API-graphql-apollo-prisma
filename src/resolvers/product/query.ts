const Query = {
  getAllProducts: async (_parent: any, _args: any, context) => {
    const findProducts = await context.prisma.product.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      include: {
        sector: true,
      },
    });

    return {
      products: findProducts,
      total: findProducts.length,
    };
  },
};

export default Query;
