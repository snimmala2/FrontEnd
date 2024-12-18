"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { TaskForm } from "@/components/task-form";
import { fetchTasks, updateTask } from "@/lib/api";
import type { Task } from "@/lib/types";

export default function EditTask({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { toast } = useToast();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTask() {
      try {
        const tasks = await fetchTasks();
        const task = tasks.find(t => t.id === params.id);
        if (task) {
          setTask(task);
        } else {
          toast({
            title: "Error",
            description: "Task not found",
            variant: "destructive",
          });
          router.push("/");
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load task",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }
    loadTask();
  }, [params.id, router, toast]);

  const onSubmit = async (data: { title: string; color: string }) => {
    try {
      await updateTask(params.id, data);
      router.push("/");
      toast({
        title: "Success",
        description: "Task updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update task",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (!task) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight">Edit Task</h1>
        </div>
        <TaskForm initialData={task} onSubmit={onSubmit} />
      </div>
    </main>
  );
}