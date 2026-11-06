import { createContext, useMemo } from "react";
import useInCompleteTaskScroll from "./useInCompleteTaskScroll";
import useTasks from "./useTasks";

export const TasksContext = createContext({});

export const TasksProvider = (props) => {
  const { children } = props;

  const {
    addTask,
    newTaskInputRef,
    searchQuery,
    setSearchQuery,
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
    disappearingTaskId,
    appearingTaskId,
  } = useTasks();

  const { firstIncompleteTaskId, firstIncompleteTaskRef } =
    useInCompleteTaskScroll(tasks);

  const value = useMemo(
    () => ({
      addTask,
      newTaskInputRef,
      searchQuery,
      setSearchQuery,
      tasks,
      filteredTasks,
      deleteTask,
      deleteAllTasks,
      toggleTaskComplete,
      disappearingTaskId,
      appearingTaskId,
      firstIncompleteTaskId,
      firstIncompleteTaskRef,
    }),
    [
      addTask,
      newTaskInputRef,
      searchQuery,
      setSearchQuery,
      tasks,
      filteredTasks,
      deleteTask,
      deleteAllTasks,
      toggleTaskComplete,
      disappearingTaskId,
      appearingTaskId,
      firstIncompleteTaskId,
      firstIncompleteTaskRef,
    ],
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
