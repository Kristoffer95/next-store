-- CreateTable
CREATE TABLE "CartItems" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "product_id" TEXT NOT NULL,

    CONSTRAINT "CartItems_pkey" PRIMARY KEY ("id")
);
