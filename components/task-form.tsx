"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { Task } from "@/lib/types";

const COLORS = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#06b6d4",
  "#3b82f6",
  "#6366f1",
  "#a855f7",
  "#ec4899",
  "#d6d3d1",
];

interface TaskFormProps {
  initialData?: Task;
  onSubmit: (data: { title: string; color: string }) => void;
}

export function TaskForm({ initialData, onSubmit }: TaskFormProps) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [color, setColor] = useState(initialData?.color || COLORS[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, color });
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="title"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Title
          </label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your task..."
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Color
          </label>
          <div className="flex flex-wrap gap-2">
            {COLORS.map((c) => (
              <button
                key={c}
                type="button"
                className={`h-8 w-8 rounded-full transition-transform ${
                  color === c ? "scale-125 ring-2 ring-offset-2" : ""
                }`}
                style={{ backgroundColor: c }}
                onClick={() => setColor(c)}
              />
            ))}
          </div>
        </div>
        <Button type="submit" className="w-full">
          {initialData ? "Save" : "Add Task"}
        </Button>
      </form>
    </Card>
  );
}