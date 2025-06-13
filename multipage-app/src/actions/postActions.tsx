import { redirect } from "react-router-dom";
import type { ActionFunctionArgs } from "react-router-dom";
import { addPost, deletePost, updatePost } from "../loaders/postLoaders";

export const createPostAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;

  if (!title || !author || !excerpt || !content) {
    return { error: "All fields are required" };
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  addPost({
    title,
    author,
    excerpt,
    content,
    date: new Date().toISOString().split("T")[0],
  });

  return redirect("/dashboard/posts");
};

export const deletePostAction = async ({ params }: ActionFunctionArgs) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  deletePost(params.postId!);

  return redirect("/dashboard/posts");
};

export const updatePostAction = async ({
  request,
  params,
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;

  if (!title || !author || !excerpt || !content) {
    return { error: "All fields are required" };
  }

  await new Promise((resolve) => setTimeout(resolve, 800));

  updatePost(params.postId!, { title, author, excerpt, content });

  return redirect("/dashboard/posts");
};
