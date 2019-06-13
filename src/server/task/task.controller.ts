import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import {TaskService} from './task.service';
import { TaskDTO } from './task.dto';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService){ }

    @Get()
    showAllTask() {
        return this.taskService.showAll();
    }

    @Post()
    createTask(@Body() data: TaskDTO) {
        return this.taskService.create(data);
    }

    @Put(':id')
    updateTask(@Param('id') id: string, @Body() data: Partial<TaskDTO>) {
        return this.taskService.update(id, data);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        return this.taskService.delete(id);
    }
}
