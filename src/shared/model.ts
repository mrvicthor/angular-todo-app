export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export enum FilterState {
  ALL = 'All',
  ACTIVE = 'Active',
  COMPLETED = 'Completed',
}
