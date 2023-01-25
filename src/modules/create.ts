import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const response = await prisma.modules.create({
    data: {
      description: 'Aprendendo firebase do zero',
      name: 'Firebase do zero',
      coursesModules: {
        create: {
          course: {
            connect: {
              id: '0d7d5954-b431-4a55-b3dd-ee32296c1a40'
            }
          }
        }
      }
    }
  })

  console.log(response)
}

main()