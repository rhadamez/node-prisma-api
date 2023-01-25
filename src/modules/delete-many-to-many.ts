import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: 2
    }
  })

  console.log(result)
}

main()