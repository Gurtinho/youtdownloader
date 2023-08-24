import { VideoController } from '@src/modules/videos/controllers/VideoController';
import { Router } from 'express';

const videoRouter = Router();

videoRouter.get('/video/downloader', new VideoController().handle);

export { videoRouter };