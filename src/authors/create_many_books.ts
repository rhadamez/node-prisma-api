import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const response = await prisma.authors.create({
    data: {
      name: 'Machado de Asis',
      books: {
        createMany: {
          data: [
            { name: 'Introdução à programação' },
            { name: 'Como ser muito produtivo' }
          ]
        }
      }
    }
  })

  console.log(response)
}

main()