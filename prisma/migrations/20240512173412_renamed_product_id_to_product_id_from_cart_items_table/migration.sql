/*
  Warnings:

  - You are about to drop the column `product_id` on the `CartItems` table. All the data in the column will be lost.
  - Added the required column `productId` to the `CartItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CartItems" DROP COLUMN "product_id",
ADD COLUMN     "productId" TEXT NOT NULL;
