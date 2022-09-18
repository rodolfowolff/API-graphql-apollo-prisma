import { UserInputError } from "apollo-server";

const Mutation = {
  createSector: async (_parent: any, args: any, context) => {
    if (args.name === undefined) {
      throw new UserInputError("Nome vazio");
    }

    const checkSectorExists = await context.prisma.sector.findFirst({
      where: {
        name: args.name,
      },
    });

    if (checkSectorExists) throw new UserInputError("Setor já cadastrado");
    console.log("args: ", args);

    await context.prisma.sector.create({
      data: {
        name: args.name,
      },
    });

    return "Setor cadastrado com sucesso";
  },
};

export default Mutation;
