"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { TaskForm } from "@/components/task-form";
import { createTask } from "@/lib/api";

export default function CreateTask() {
  const router = useRouter();
  const { toast } = useToast();

  const onSubmit = async (data: { title: string; color: string }) => {
    try {
      await createTask(data);
      router.push("/");
      toast({
        title: "Success",
        description: "Task created successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create task",
        variant: "destructive",
      });
    }
  };

  return (
    <main className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight">Create Task</h1>
        </div>
        <TaskForm onSubmit={onSubmit} />
      </div>
    </main>
  );
}