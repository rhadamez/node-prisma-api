/*
  Warnings:

  - You are about to drop the column `teacherId` on the `courses` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[teacher_id]` on the table `courses` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_teacherId_fkey";

-- DropIndex
DROP INDEX "courses_teacherId_key";

-- AlterTable
ALTER TABLE "courses" DROP COLUMN "teacherId",
ADD COLUMN     "teacher_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "courses_teacher_id_key" ON "courses"("teacher_id");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
