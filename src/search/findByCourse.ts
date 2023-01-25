import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const response = await prisma.courses.findMany({
    where: {
      id: '240b9c2d-6668-445b-937b-53c0d49d3d6a'
    },
    include: {
      coursesModules: true
    }
  })


  console.log(response)
}

main()

