import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const response = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          duration: 200,
          name: 'Curso de SQL',
          description: 'Metendo many-to-many'
        }
      },
      module: {
        create: {
          description: 'Introdução ao prisma',
          name: 'Prisma!'
        }
      }
    }
  })
  console.log(response)
}

main()