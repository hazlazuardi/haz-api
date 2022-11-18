import type { NextApiRequest, NextApiResponse } from 'next'

import { cors } from '../../../lib/init-middleware'

import prisma from '../../../lib/prisma'



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await cors(req, res)
    const sample = await prisma.sample.findMany()

    const { sampleName, sampleType, mode } = req.query

    if (mode === 'create') {
        const createdSample = await prisma.sample.create({
            data: {
                name: sampleName,
                type: sampleType,
                recording_data: req.body,

            }
        })
        res.json({ sample: { ...createdSample } })
    } else {
        res.json({ samples: [...sample] })
    }
}