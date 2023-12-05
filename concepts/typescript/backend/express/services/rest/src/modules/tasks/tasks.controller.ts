import { Task } from '@prisma/client';
import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Path,
  Post,
  Route,
  Security,
  SuccessResponse,
  Tags
} from 'tsoa';
import { TASKS_READ, TASKS_WRITE } from '../../common/constants';
import { TaskRequest, TasksService } from './tasks.service';

@Route('/tasks')
@Tags('Tasks')
export class TasksController extends Controller {
  private tasksService: TasksService;

  constructor() {
    super();
    this.tasksService = new TasksService();
  }

  @Security('jwt', [TASKS_READ])
  @Get()
  async getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Security('jwt', [TASKS_WRITE])
  @Post()
  async createTask(
    @Body() { title, description, listId }: TaskRequest
  ): Promise<Task> {
    return this.tasksService.createTask({ title, description, listId });
  }

  @Security('jwt', [TASKS_READ])
  @Get('{id}')
  async getTask(@Path() id: string): Promise<Task> {
    return this.tasksService.getTask(id);
  }

  @Security('jwt', [TASKS_WRITE])
  @Patch('{id}')
  async updateTask(
    @Path() id: string,
    @Body() { title, description, completed, listId }: TaskRequest
  ): Promise<Task> {
    return this.tasksService.updateTask(id, {
      title,
      description,
      completed,
      listId
    });
  }

  @Security('jwt', [TASKS_WRITE])
  @SuccessResponse(204)
  @Delete('{id}')
  async deleteTask(@Path() id: string): Promise<void> {
    return this.tasksService.deleteTask(id);
  }
}
