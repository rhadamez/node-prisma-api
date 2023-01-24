import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: 'Nodejs com Nestjs',
      description: 'Um framework diferenciado para microservices',
      created_at: new Date()
    }
  })

  console.log(result)
}

main()