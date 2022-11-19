import { PrismaClient } from '@prisma/client'
import { locations } from './seedData'
import prisma from '../lib/prisma';

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