import { AppError } from '@src/shared/errors/AppError';
import { downloader } from '@src/utils/downloader';

class VideoService {
    async execute(videoUrl: string) {
        try {
            downloader(videoUrl);
        } catch (err) {
            throw new AppError('Não foi possível fazer o donwload');
        }
    }
}

export { VideoService };