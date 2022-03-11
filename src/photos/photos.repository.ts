import { Injectable } from '@nestjs/common'
import { readFile, writeFile } from 'fs/promises'

@Injectable()
export class PhotosRepository {

    async create(photo: any) {
        const contents = await readFile('photos.json', 'utf8')
        const photos = JSON.parse(contents)
        const id = Math.floor(Math.random() * 999)
        photos[id] = { id, ...photo }
        writeFile('photos.json', JSON.stringify(photos))
        return photos[id]
    }
    async findAll() {
        const contents = await readFile('photos.json', 'utf8')
        const photos = JSON.parse(contents)
        return photos;
    }
    async findOne(id: string) {
        const contents = await readFile('photos.json', 'utf8')
        const photos = JSON.parse(contents)
        return photos[id];
    }

}