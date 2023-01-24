import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: '8995b97f-0af4-48e2-bd3e-e0d7236ccad2'
    },
    data: {
      duration: 400
    }
  })

  console.log(result)
}

main()