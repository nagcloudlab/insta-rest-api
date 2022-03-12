import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photos/photo.entity';
import { PhotosModule } from './photos/photos.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "sqlite",
            database: "db.sqlite",
            entities: [Photo, User],
            synchronize: true
        }),
        PhotosModule,
        UsersModule
    ]
})
export class AppModule { }
