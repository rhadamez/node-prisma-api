import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: 'Elixir',
      description: 'Curso de Elixir',
      created_at: new Date(),
      teacher: {
        create: {
          name: 'Rafa Camarda'
        }
      }
    }
  })

  console.log(result)
}

main()