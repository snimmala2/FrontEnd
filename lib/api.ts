const API_BASE_URL = 'http://localhost:3001/api';

export async function fetchTasks() {
  const response = await fetch(`${API_BASE_URL}/tasks`);
  if (!response.ok) throw new Error('Failed to fetch tasks');
  return response.json();
}

export async function createTask(data: { title: string; color: string }) {
  const response = await fetch(`${API_BASE_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to create task');
  return response.json();
}

export async function updateTask(id: string, data: { title: string; color: string }) {
  const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to update task');
  return response.json();
}

export async function deleteTask(id: string) {
  const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete task');
}

export async function toggleTask(id: string) {
  const response = await fetch(`${API_BASE_URL}/tasks/${id}/toggle`, {
    method: 'PATCH',
  });
  if (!response.ok) throw new Error('Failed to toggle task');
  return response.json();
}