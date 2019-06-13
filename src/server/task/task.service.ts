 import { Injectable } from '@nestjs/common';
 import {InjectRepository} from '@nestjs/typeorm';
 import { Repository } from 'typeorm';

 import {TaskEntity} from './task.entity';
 import { TaskDTO } from './task.dto';

 @Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskEntity)
        private taskRepository: Repository<TaskEntity>) {}

    async showAll() {
        return await this.taskRepository.find();
    }

    async create(data: TaskDTO) {
        const task = await this.taskRepository.create(data);
        await this.taskRepository.save(task);
        return task;
    }

    async update(id: string, data: Partial<TaskDTO>) {
        await this.taskRepository.update({id}, data);
        return await this.taskRepository.findOne({id});
    }

    async delete(id: string) {
        await this.taskRepository.delete({id});
        return {deleted : true};
    }
}

