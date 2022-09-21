import { UserInputError } from "apollo-server";

const Query = {
  getAllProducts: async (_parent: any, _args: any, context) => {
    const findProducts = await context.prisma.product.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      include: {
        category: true,
      },
    });

    return {
      products: findProducts,
      total: findProducts.length,
    };
  },
  getProductByID: async (_parent: any, args: { id: number }, context) => {
    if (args.id === undefined) {
      throw new UserInputError("ID do produto é obrigatorio");
    }

    const findProducts = await context.prisma.product.findFirst({
      where: {
        id: args.id,
      },
      include: {
        category: true,
      },
    });

    if (!findProducts) {
      throw new UserInputError("Produto não encontrado!");
    }

    return findProducts;
  },
};

export default Query;
