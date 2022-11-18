/*
  Warnings:

  - You are about to drop the column `id` on the `SamplesToLocations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SamplesToLocations" DROP COLUMN "id",
ADD COLUMN     "rel_id" SERIAL NOT NULL;
