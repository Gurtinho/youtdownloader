import { Request, Response } from 'express';
import { AppError } from '@src/shared/errors/AppError';
import { VideoService } from '../services/VideoService';

const videoService = new VideoService();

class VideoController {
    async handle(req: Request, res: Response) {
        try {
            const videoUrl = req.query.videoUrl as string;
            const video = await videoService.execute(videoUrl);
            return res.status(200).json('video baixado com sucesso');
        } catch {
            throw new AppError('Ocorreu um erro ao fazer o download');
        }
    }
}

export { VideoController };