/*
  Warnings:

  - You are about to drop the `CartProducts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CartProducts" DROP CONSTRAINT "CartProducts_cartId_fkey";

-- DropForeignKey
ALTER TABLE "CartProducts" DROP CONSTRAINT "CartProducts_productId_fkey";

-- DropTable
DROP TABLE "CartProducts";

-- DropTable
DROP TABLE "Product";
