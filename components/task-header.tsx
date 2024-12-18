"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Task } from "@/lib/types";

interface TaskHeaderProps {
  tasks: Task[];
}

export function TaskHeader({ tasks }: TaskHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight text-center text-white">Todo App</h1>
        <p className="text-sm text-muted-foreground">
          Tasks: {tasks.length} • Completed: {tasks.filter(t => t.completed).length} of {tasks.length}
        </p>
      </div>
      <Link href="/create">
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          Create Task
        </Button>
      </Link>
    </div>
  );
}