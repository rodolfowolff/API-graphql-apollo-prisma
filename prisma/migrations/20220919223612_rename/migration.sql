/*
  Warnings:

  - You are about to drop the column `active` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `sectorId` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `sectors` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[code]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_sectorId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "active",
DROP COLUMN "sectorId",
ADD COLUMN     "categoryId" INTEGER,
ADD COLUMN     "code" VARCHAR(50) NOT NULL,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true;

-- DropTable
DROP TABLE "sectors";

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "products_code_key" ON "products"("code");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
