/*
  Warnings:

  - The primary key for the `SamplesToLocations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `rel_id` on the `SamplesToLocations` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "SamplesToLocations" DROP CONSTRAINT "SamplesToLocations_location_id_fkey";

-- DropForeignKey
ALTER TABLE "SamplesToLocations" DROP CONSTRAINT "SamplesToLocations_sample_id_fkey";

-- AlterTable
ALTER TABLE "SamplesToLocations" DROP CONSTRAINT "SamplesToLocations_pkey",
DROP COLUMN "rel_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "SamplesToLocations_pkey" PRIMARY KEY ("id");
