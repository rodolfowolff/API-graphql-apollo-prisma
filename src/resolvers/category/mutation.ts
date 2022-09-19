import { UserInputError } from "apollo-server";

const Mutation = {
  createCategory: async (_parent: any, args: any, context) => {
    if (args.name === undefined) {
      throw new UserInputError("Nome é obrigatorio!");
    }

    const checkCategoryExists = await context.prisma.category.findFirst({
      where: {
        name: args.name,
      },
    });

    if (checkCategoryExists)
      throw new UserInputError("Categoria já cadastrada");

    await context.prisma.category.create({
      data: {
        name: args.name,
      },
    });

    return "Categoria criada com sucesso";
  },
};

export default Mutation;
