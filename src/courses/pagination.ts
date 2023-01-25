import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  let skip = 0

  const result = await prisma.courses.findMany({
    skip,
    take: 2
  })

  console.log(result)
}

main()