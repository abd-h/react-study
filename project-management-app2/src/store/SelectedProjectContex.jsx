import { createContext } from 'react';

export const SelectedProjectContex = createContext({
  tasks: [],
  
  onDelete: () => {},
  onAddTask: () => {},
  onDeleteTasks: () => {},
});