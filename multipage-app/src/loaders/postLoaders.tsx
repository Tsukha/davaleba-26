import type { LoaderFunctionArgs } from "react-router-dom";
import type { Post } from "../types/Post";

let mockPosts: Post[] = [
  {
    id: "1",
    title: "Getting Started with React Router",
    author: "John Doe",
    date: "2025-06-10",
    excerpt: "Learn the basics of React Router v6 and its new features.",
    content:
      "React Router v6 introduces many improvements over previous versions.\n\nThe new data APIs make it easier to handle loading states and form submissions.\n\nNested routes provide better organization for complex applications.",
  },
  {
    id: "2",
    title: "Advanced TypeScript Patterns",
    author: "Jane Smith",
    date: "2025-06-09",
    excerpt: "Explore advanced TypeScript patterns for better type safety.",
    content:
      "TypeScript offers powerful features for creating robust applications.\n\nGeneric types and conditional types can help create reusable components.\n\nProper typing reduces runtime errors and improves developer experience.",
  },
];

export const postsLoader = async (): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockPosts;
};

export const postDetailLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<Post> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const post = mockPosts.find((p) => p.id === params.postId);
  if (!post) {
    throw new Response("Post not found", { status: 404 });
  }
  return post;
};

export const addPost = (post: Omit<Post, "id">) => {
  const newPost: Post = {
    ...post,
    id: (mockPosts.length + 1).toString(),
  };
  mockPosts.push(newPost);
  return newPost;
};

export const deletePost = (postId: string) => {
  const index = mockPosts.findIndex((p) => p.id === postId);
  if (index > -1) {
    mockPosts.splice(index, 1);
  }
};

export const updatePost = (postId: string, updates: Partial<Post>) => {
  const index = mockPosts.findIndex((p) => p.id === postId);
  if (index > -1) {
    mockPosts[index] = { ...mockPosts[index], ...updates };
    return mockPosts[index];
  }
  return null;
};
