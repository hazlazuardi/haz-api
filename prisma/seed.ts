import { PrismaClient } from '@prisma/client'
import { locations } from './seedData'

const prisma = new PrismaClient()
// async function main() {
//     const alice = await prisma.location.upsert({
//     })

//     console.log({})
// }
// main()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })

function seedLocations() {
    Promise.all(locations.map(location => prisma.location.create({
        data: {
            id: parseInt(location.id),
            location: location.location,
            suburb: location.suburb,
            state: location.state,
            country: location.country,
            latlong: location.latlong
        }
    })))
        .then(() => console.info('[SEED] Succussfully create locations records'))
        .catch(e => console.error('[SEED] Failed to create locations records', e))
}

seedLocations();