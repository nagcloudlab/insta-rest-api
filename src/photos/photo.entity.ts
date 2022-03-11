
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: string
    @Column()
    photo_url: string
    @Column()
    description: string
}