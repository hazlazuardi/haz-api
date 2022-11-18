import type { NextApiRequest, NextApiResponse } from 'next'

import { cors } from '../../../lib/init-middleware'

import prisma from '../../../lib/prisma'



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await cors(req, res)
    const sample = await prisma.sample.findMany()

    const { id, sampleName, sampleType, mode } = req.query

    if (mode === 'create') {
        const createdSample = await prisma.sample.create({
            data: {
                name: sampleName,
                type: sampleType,
                recording_data: req.body,

            }
        })
        res.json({ sample: { ...createdSample } })
    } else if (mode === 'update') {
        const updatedSample = await prisma.sample.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name: sampleName,
                type: sampleType,
                recording_data: req.body
            }
        })
        res.json({ sample: { ...updatedSample } })
    } else {
        res.json({ samples: [...sample] })
    }
}