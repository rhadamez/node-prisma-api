import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const response = await prisma.coursesModules.create({
    data: {
      course_id: '0d7d5954-b431-4a55-b3dd-ee32296c1a40',
      module_id: '713e5f60-44ae-4c30-8147-f37ac3af3a49'
    }
  })
  console.log(response)
}

main()