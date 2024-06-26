import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { container } from 'tsyringe'
import { VideoService } from '../services/videoService'

const videoService = container.resolve(VideoService)

export const getVideosByPlaylistId = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { playlistId } = req.body
        const videos = await videoService.getVideosByPlaylistId(playlistId)
        res.json(videos)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Something went wrong' })
    }
}

export const getVideosByTitle = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { title } = req.body
        const videos = await videoService.getVideoByTitle(title)
        res.json(videos)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Something went wrong' })
    }
}

export const getAllVideos = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const videos = await videoService.getAllVideos()
        res.json(videos)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Something went wrong' })
    }
}
