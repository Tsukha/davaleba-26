import type { LoaderFunctionArgs } from "react-router-dom";
import type { User } from "../types/User";

let mockUsers: User[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "admin",
    status: "active",
    createdAt: "2025-01-15",
  },
  {
    id: "2",
    name: "Bob Wilson",
    email: "bob@example.com",
    role: "editor",
    status: "active",
    createdAt: "2025-02-20",
  },
];

export const usersLoader = async (): Promise<User[]> => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return mockUsers;
};

export const userDetailLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const user = mockUsers.find((u) => u.id === params.userId);
  if (!user) {
    throw new Response("User not found", { status: 404 });
  }
  return user;
};

export const addUser = (user: Omit<User, "id" | "createdAt">) => {
  const newUser: User = {
    ...user,
    id: (mockUsers.length + 1).toString(),
    createdAt: new Date().toISOString().split("T")[0],
  };
  mockUsers.push(newUser);
  return newUser;
};

export const updateUser = (userId: string, updates: Partial<User>) => {
  const index = mockUsers.findIndex((u) => u.id === userId);
  if (index > -1) {
    mockUsers[index] = { ...mockUsers[index], ...updates };
    return mockUsers[index];
  }
  return null;
};

export const deleteUser = (userId: string) => {
  const index = mockUsers.findIndex((u) => u.id === userId);
  if (index > -1) {
    mockUsers.splice(index, 1);
  }
};
