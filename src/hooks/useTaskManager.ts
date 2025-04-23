import { useState, useEffect } from 'react';
import { Task } from '../types/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TASKS_KEY = 'TASKS_STORAGE_KEY';

export const useTaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load tasks from AsyncStorage on mount
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem(TASKS_KEY);
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Failed to load tasks', error);
      }
    };

    loadTasks();
  }, []);

  // Save tasks to AsyncStorage whenever they change
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
      } catch (error) {
        console.error('Failed to save tasks', error);
      }
    };

    saveTasks();
  }, [tasks]);

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id: string, newTitle: string, newDescription: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, title: newTitle, description: newDescription }
          : task
      )
    );
  };

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    editTask,
  };
};
