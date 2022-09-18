import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function createContext(req: any) {
  return { req, prisma };
}

export default { createContext };
