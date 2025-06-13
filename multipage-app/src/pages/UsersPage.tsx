import React from "react";
import {
  useLoaderData,
  Form,
  Link,
  useActionData,
  useNavigation,
} from "react-router-dom";
import type { User } from "../types/User";

export const UsersPage: React.FC = () => {
  const users = useLoaderData() as User[];
  const actionData = useActionData() as
    | { error?: string; success?: boolean }
    | undefined;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <h1 className="page-title">Users</h1>

      <div className="users-section">
        <h2>Create New User</h2>
        <Form method="post" className="inline-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="form-control"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <select
              name="role"
              className="form-control"
              required
              disabled={isSubmitting}
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create User"}
            </button>
          </div>
        </Form>
        {actionData?.error && (
          <div className="alert alert-error">
            <p>{actionData.error}</p>
          </div>
        )}
        {actionData?.success && (
          <div className="alert alert-success">
            <p>User created successfully!</p>
          </div>
        )}
      </div>

      <div className="users-section">
        <h2>All Users</h2>
        {users.length === 0 ? (
          <div className="empty-state">
            <p>No users found.</p>
          </div>
        ) : (
          <div className="users-list">
            {users.map((user) => (
              <div key={user.id} className="user-card">
                <div className="user-info">
                  <h3>
                    <Link to={`/dashboard/users/${user.id}`}>{user.name}</Link>
                  </h3>
                  <p>{user.email}</p>
                  <span className={`user-role role-${user.role}`}>
                    {user.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
