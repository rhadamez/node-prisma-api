import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function main() {
  const course = await prisma.courses.findFirst({
    take: -1
  })
  console.log(course)
}

main()