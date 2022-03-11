import { IsString } from 'class-validator';

export class CreatePhotoDto {
    @IsString()
    photo_url: string
    @IsString()
    description: string
}