import { List } from '@prisma/client';
import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Path,
  Post,
  Request,
  Route,
  Security,
  Tags
} from 'tsoa';
import { LISTS_READ, LISTS_WRITE } from '../../common/constants';
import { ListRequest, ListsService } from './lists.service';

@Tags('Lists')
@Route('/lists')
export class ListsController extends Controller {
  private listsService: ListsService;

  constructor() {
    super();
    this.listsService = new ListsService();
  }

  @Security('jwt', [LISTS_READ])
  @Get()
  async getLists(): Promise<List[]> {
    return this.listsService.getLists();
  }

  @Security('jwt', [LISTS_READ])
  @Get('{id}')
  async getList(@Path() id: string): Promise<List> {
    return this.listsService.getList(id);
  }

  @Security('jwt', [LISTS_WRITE])
  @Post()
  async createList(
    @Request() request: { userId: string },
    @Body() { title }: ListRequest
  ): Promise<List> {
    const { userId } = request;
    return this.listsService.createList(userId, { title });
  }

  @Security('jwt', [LISTS_WRITE])
  @Patch('{id}')
  async updateList(
    @Request() request: { userId: string },
    @Path() id: string,
    @Body() { title }: ListRequest
  ): Promise<List> {
    const { userId } = request;
    return this.listsService.updateList(userId, id, { title });
  }

  @Security('jwt', [LISTS_WRITE])
  @Delete('{id}')
  async deleteList(
    @Request() request: { userId: string },
    @Path() id: string
  ): Promise<void> {
    const { userId } = request;
    return this.listsService.deleteList(userId, id);
  }
}
