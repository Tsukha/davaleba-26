import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { addUser, deleteUser, updateUser } from "../loaders/userLoaders";

export const createUserAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const role = formData.get("role") as string;

  if (!name || !email || !role) {
    return { error: "All fields are required" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address" };
  }

  await new Promise((resolve) => setTimeout(resolve, 800));

  addUser({
    name,
    email,
    role,
    status: "active",
  });

  return { success: true };
};

export const updateUserAction = async ({
  request,
  params,
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const role = formData.get("role") as string;
  const status = formData.get("status") as string;

  if (!name || !email || !role || !status) {
    return { error: "All fields are required" };
  }

  await new Promise((resolve) => setTimeout(resolve, 600));

  updateUser(params.userId!, { name, email, role, status });

  return { success: true };
};

export const deleteUserAction = async ({ params }: ActionFunctionArgs) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  deleteUser(params.userId!);

  return redirect("/dashboard/users");
};
