import { UserInputError } from "apollo-server";

const Mutation = {
  createProduct: async (
    _parent: any,
    args: { name: string; sectorId: number },
    context
  ) => {
    if (args.name === undefined || args.sectorId === undefined) {
      throw new UserInputError("Nome e setor são obrigatorios");
    }

    const checkProductExists = await context.prisma.product.findFirst({
      where: {
        name: args.name,
      },
    });

    if (checkProductExists)
      throw new UserInputError(`Produto ${args.name} já cadastrado`);

    await context.prisma.product.create({
      data: {
        name: args.name,
        sector: {
          connect: { id: args.sectorId },
        },
      },
    });

    return `Produto ${args.name} cadastrado com sucesso`;
  },
  updateProduct: async (
    _parent: any,
    args: { id: number; name: string; sectorId: number },
    context
  ) => {
    if (args.id === undefined) {
      throw new UserInputError("ID do produto é obrigatorio");
    }

    if (args.name === undefined && args.sectorId === undefined) {
      throw new UserInputError(
        "Falta informar o dado para atualizar do produto"
      );
    }

    await context.prisma.product.update({
      where: {
        id: args.id,
      },
      data: {
        name: args.name,
        updatedAt: new Date(),
        sector: {
          connect: { id: args.sectorId },
        },
      },
    });

    return "Produto atualizado com sucesso";
  },
  deleteProduct: async (_parent: any, args: { id: number }, context) => {
    if (args.id === undefined) {
      throw new UserInputError("ID do produto é obrigatorio");
    }

    await context.prisma.product.update({
      where: {
        id: args.id,
      },
      data: {
        active: false,
        updatedAt: new Date(),
      },
    });

    return "Produto desativado com sucesso";
  },
};

export default Mutation;
