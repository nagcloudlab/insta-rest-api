import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreatePhotoDto } from './dtos/create-photo.dto';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {

    constructor(private photosService: PhotosService) { }

    @Get()
    async getPhostos() {
        return this.photosService.findAll();
    }

    @Get(":id")
    async getPhoto(@Param("id") id: string) {
        const photo = await this.photosService.findOne(id)
        if (!photo) {
            throw new NotFoundException("photo not found")
        }
        return photo;
    }

    @Post()
    async createPhoto(@Body() body: CreatePhotoDto) {
        return this.photosService.create(body);
    }

}
