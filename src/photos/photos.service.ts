import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from "./photo.entity";

@Injectable()
export class PhotosService {
    constructor(
        @InjectRepository(Photo) private photosRepository: Repository<Photo>
    ) { }
    create(photo: any) {
        const photoEntity = this.photosRepository.create({ ...photo })
        return this.photosRepository.save(photoEntity)
    }

    findAll() {
        return this.photosRepository.find()
    }
    findOne(id: string) {
        return this.photosRepository.findOne(id)
    }
}