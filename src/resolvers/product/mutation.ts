import { UserInputError } from "apollo-server";
import generateCode from "../../util/generateCode";

const Mutation = {
  createProduct: async (
    _parent: any,
    args: { name: string; quantity: number; categoryId: number },
    context
  ) => {
    if (
      args.name === undefined ||
      args.quantity === undefined ||
      args.categoryId === undefined
    ) {
      throw new UserInputError("Nome, quantidade e setor são obrigatorios");
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
        quantity: args.quantity,
        code: generateCode(6),
        category: {
          connect: { id: args.categoryId },
        },
      },
    });

    return `Produto ${args.name} cadastrado com sucesso`;
  },
  updateProduct: async (
    _parent: any,
    args: { id: number; name: string; categoryId: number },
    context
  ) => {
    if (args.id === undefined) {
      throw new UserInputError("ID do produto é obrigatorio");
    }

    if (args.name === undefined && args.categoryId === undefined) {
      throw new UserInputError(
        "Falta informar o dado para atualizar do produto"
      );
    }

    const checkProductExists = await context.prisma.product.findFirst({
      where: {
        name: args.name,
      },
    });

    if (checkProductExists)
      throw new UserInputError(`Produto ${args.name} já cadastrado`);

    await context.prisma.product.update({
      where: {
        id: args.id,
      },
      data: {
        name: args.name,
        updatedAt: new Date(),
        category: {
          connect: { id: args.categoryId },
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
        is_active: false,
        updatedAt: new Date(),
      },
    });

    return "Produto desativado com sucesso";
  },
};

export default Mutation;
