"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { fetchTasks, toggleTask, deleteTask } from "@/lib/api";
import { Task } from "@/lib/types";
import { TaskHeader } from "@/components/task-header";
import { TaskList } from "@/components/task-list";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load tasks",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  async function handleToggle(task: Task) {
    try {
      const updatedTask = await toggleTask(task.id);
      setTasks(tasks.map(t => t.id === task.id ? updatedTask : t));
      toast({
        title: "Success",
        description: `Task ${updatedTask.completed ? 'completed' : 'uncompleted'}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to toggle task",
        variant: "destructive",
      });
    }
  }

  async function handleDelete(task: Task) {
    try {
      await deleteTask(task.id);
      setTasks(tasks.filter(t => t.id !== task.id));
      toast({
        title: "Success",
        description: "Task deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete task",
        variant: "destructive",
      });
    }
  }

  if (loading) {
    return <div className="flex h-screen items-center justify-center text-white">Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-black p-6">
      <div className="mx-auto max-w-3xl space-y-6">
        <TaskHeader tasks={tasks} />
        <TaskList
          tasks={tasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>
    </main>
  );
}