import { Prisma, PrismaClient, Modules } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.$queryRaw<Modules[]>(
    Prisma.sql`SELECT * FROM courses`
  )

  result.map(a => a.description)

  console.log(result)
}

main()