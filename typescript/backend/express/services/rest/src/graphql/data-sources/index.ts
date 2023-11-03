import { ListsAPI } from './lists/lists.api';
import { TasksAPI } from './tasks/tasks.api';
import { UsersAPI } from './users/users.api';

export class DataSources {
  public usersAPI: UsersAPI;
  public listsAPI: ListsAPI;
  public tasksAPI: TasksAPI;

  constructor() {
    this.usersAPI = new UsersAPI();
    this.listsAPI = new ListsAPI();
    this.tasksAPI = new TasksAPI();
  }
}
