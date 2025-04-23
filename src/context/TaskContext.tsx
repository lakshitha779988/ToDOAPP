import React, {createContext, useContext} from 'react';
import {useTaskManager} from '../hooks/useTaskManager';
import {Task} from '../types/Task';

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string, description: string) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  editTask: (id: string, newTitle: string, newDescription: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const {tasks, addTask, deleteTask, toggleTask, editTask} = useTaskManager();

  return (
    <TaskContext.Provider
      value={{tasks, addTask, deleteTask, toggleTask, editTask}}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
