import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: 'React Native',
      description: 'Curso de React Native',
      created_at: new Date(),
      teacher: {
        connect: {
          id: '4e4a0515-eaab-4c77-a7eb-b83288e4c4d3'
        }
      }
    }
  })

  console.log(result)
}

main()