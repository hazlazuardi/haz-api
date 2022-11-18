import type { NextApiRequest, NextApiResponse } from 'next'

import { cors } from '../../../lib/init-middleware'

import prisma from '../../../lib/prisma'



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await cors(req, res)
    const locations = await prisma.location.findMany()

    const { mode } = req.query

    res.json({ locations: [...locations] })

}