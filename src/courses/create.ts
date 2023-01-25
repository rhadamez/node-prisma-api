import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: 'Quarkus framework 2',
      description: 'Um framework diferenciado para microservices',
      created_at: new Date(),
      teacher: {
        connectOrCreate: {
          where: {
            name: 'Rhadamez Gindri Hercilio'
          },
          create: {
            name: 'Rhadamez Gindri Hercilio'
          }
        }
      }
    }
  })

  console.log(result)
}

main()