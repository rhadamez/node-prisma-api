import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const response = await prisma.books.create({
    data: {
      name: 'Sherlock Holmes e o homem que rastejava',
      author_id: 1
    }
  })

  console.log(response)
}

main()