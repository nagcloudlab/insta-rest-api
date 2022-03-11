import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photos/photo.entity';
import { PhotosModule } from './photos/photos.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "sqlite",
            database: "db.sqlite",
            entities: [Photo],
        }),
        PhotosModule
    ]
})
export class AppModule { }
