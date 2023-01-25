import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: 'Elixir',
      description: 'Curso de Elixir',
      created_at: new Date(),
      teacherId: '2dff8795-8863-4e86-8979-2783987032af'
    }
  })

  console.log(result)
}

main()