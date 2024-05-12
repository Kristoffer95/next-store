/*
  Warnings:

  - Added the required column `cartId` to the `CartItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CartItems" ADD COLUMN     "cartId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "CartItems" ADD CONSTRAINT "CartItems_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE CASCADE ON UPDATE CASCADE;
