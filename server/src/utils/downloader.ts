import crypto from 'crypto';
import ytdl from 'ytdl-core';
import fs from 'fs';

export function downloader(videoUrl: string) {
    const name = videoUrl.substring(
        videoUrl.indexOf('?v=') + 3,
        videoUrl.indexOf('_', videoUrl.indexOf('?v=') + 3)
    );
    const filehash = crypto.randomBytes(32).toString('hex');
    const filename = `${filehash}-${name}`;
    ytdl(videoUrl).pipe(fs.createWriteStream(`./videos/${filename}.mp4`)).on('finish', () => {
        console.log('Download concluído');
    }).off('error', () => {
        console.log('Erro no donwload');
    });
}