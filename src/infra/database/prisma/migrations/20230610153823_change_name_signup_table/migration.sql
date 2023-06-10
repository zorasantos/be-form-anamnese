/*
  Warnings:

  - You are about to drop the `signUp` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "signUp";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "profile" TEXT NOT NULL DEFAULT 'USER',
    "term" BOOLEAN NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
