"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { Task } from "@/lib/types";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { DeleteTaskDialog } from "./delete-task-dialog";

interface TaskItemProps {
  task: Task;
  onToggle: (task: Task) => Promise<void>;
  onDelete: (task: Task) => Promise<void>;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    onToggle(task);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = async () => {
    await onDelete(task);
    setShowDeleteDialog(false);
  };

  return (
    <>
      <Link href={`/edit/${task.id}`}>
        <Card className="p-4 transition-colors hover:bg-muted/50 bg-zinc-900">
          <div className="flex items-center space-x-4">
            <div onClick={handleToggle}>
              <Checkbox checked={task.completed} />
            </div>
            <div className="flex-1">
              <p className={`font-medium leading-none text-white ${task.completed ? 'line-through opacity-50' : ''}`}>
                {task.title}
              </p>
            </div>
            <div
              className="h-3 w-3 rounded-full mr-2"
              style={{ backgroundColor: task.color }}
            />
            <Button
              variant="ghost"
              size="icon"
              className="text-red-500 hover:text-red-700 hover:bg-red-500/10"
              onClick={handleDelete}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </Link>
      <DeleteTaskDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}