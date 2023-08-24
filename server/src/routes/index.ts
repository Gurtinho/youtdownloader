import { Router } from 'express';
import { videoRouter } from './router/video.router';

const routes = Router()

routes.use(videoRouter);

export { routes };