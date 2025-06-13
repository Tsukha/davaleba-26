import React from "react";
import {
  useLoaderData,
  Form,
  Link,
  useActionData,
  useNavigation,
} from "react-router-dom";
import type { User } from "../types/User";

export const UserDetailPage: React.FC = () => {
  const user = useLoaderData() as User;
  const actionData = useActionData() as
    | { error?: string; success?: boolean }
    | undefined;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <Link to="/dashboard/users" className="back-link">
        ← Back to Users
      </Link>
      <h1 className="page-title">User Details</h1>

      <Form method="put" className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            defaultValue={user.name}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            defaultValue={user.email}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            className="form-control"
            defaultValue={user.role}
            required
            disabled={isSubmitting}
          >
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            className="form-control"
            defaultValue={user.status}
            required
            disabled={isSubmitting}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
        {actionData?.error && (
          <div className="alert alert-error">
            <p>{actionData.error}</p>
          </div>
        )}
        {actionData?.success && (
          <div className="alert alert-success">
            <p>User updated successfully!</p>
          </div>
        )}
        <div className="btn-group">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update User"}
          </button>
        </div>
      </Form>
      <div>
        <Form
          method="delete"
          onSubmit={(e) => {
            if (!window.confirm("Are you sure you want to delete this user?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-danger"
          >
            Delete User
          </button>
        </Form>
      </div>
    </div>
  );
};
