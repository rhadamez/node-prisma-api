import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const response = await prisma.authors.create({
    data: {
      name: 'Machado de Asis',
      books: {
        connectOrCreate: {
          create: {
            name: 'Domain Driven Design'
          },
          where: {
            name: 'Domain Driven Design'
          }
        }
      }
    }
  })

  console.log(response)
}

main()