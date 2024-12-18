"use client";

import { Task } from "@/lib/types";
import { TaskItem } from "./task-item";
import { ScrollArea } from "./ui/scroll-area";

interface TaskListProps {
  tasks: Task[];
  onToggle: (task: Task) => Promise<void>;
  onDelete: (task: Task) => Promise<void>;
}

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  return (
    <ScrollArea className="h-[calc(100vh-12rem)]">
      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    </ScrollArea>
  );
}