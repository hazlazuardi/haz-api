import type { NextApiRequest, NextApiResponse } from 'next'

import { cors } from '../../../lib/init-middleware'

import prisma from '../../../lib/prisma'



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await cors(req, res)
    const { id, sampleID, locationID, mode } = req.query
    console.log(typeof sampleID)
    const samplesToLocations = await prisma.samplesToLocations.findMany()


    if (mode === 'create') {
        const createdSTL = await prisma.samplesToLocations.create({
            data: { sample_id: parseInt(sampleID), location_id: parseInt(locationID) }
        })
        res.json({ 'success': true, 'response': createdSTL })
    } else if (mode === 'delete') {
        const deletedSTL = await prisma.samplesToLocations.delete({
            where: {
                id: parseInt(id)
            }
        })
        res.json({ 'success': true, 'response': "Successfully unshare!" })
    } else {
        res.json({ 'samples_to_locations': samplesToLocations })
    }
}