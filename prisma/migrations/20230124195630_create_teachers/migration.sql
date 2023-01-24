/*
  Warnings:

  - A unique constraint covering the columns `[teacherId]` on the table `courses` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "teacherId" TEXT;

-- CreateTable
CREATE TABLE "teachers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "courses_teacherId_key" ON "courses"("teacherId");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
