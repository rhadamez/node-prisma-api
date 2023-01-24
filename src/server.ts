import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 420,
      name: 'Java com Spring',
      description: 'Conceitos iniciais do spring boot',
      created_at: new Date()
    }
  })

  console.log(result)
}

main()