import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class TaskEntity {
    constructor(
        id: string,
        title: string,
        detail: string | null = null,
        status: string = 'todo',
        createdAt: Date,
        updatedAt: Date,
    ) {
        this.id = id;
        this.title = title;
        this.detail = detail;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    title: string;

    @Column('text')
    detail: string | null = null;

    @Column('text')
    status: string;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;
}
