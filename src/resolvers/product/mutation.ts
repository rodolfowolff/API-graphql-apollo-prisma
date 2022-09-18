import { UserInputError } from "apollo-server";

const Mutation = {
  createProduct: async (_parent: any, args: any, context: any) => {
    if (args.name === undefined || args.sectorId === undefined) {
      throw new UserInputError("Nome e setor são obrigatorios");
    }

    const checkProductExists = await context.prisma.product.findFirst({
      where: {
        name: args.name,
      },
    });

    if (checkProductExists) throw new UserInputError("Produto já cadastrado");

    await context.prisma.product.create({
      data: {
        name: args.name,
        sectors: {
          connect: { id: args.sectorId },
        },
      },
    });

    return "Produto cadastrado com sucesso";
  },
};

export default Mutation;
