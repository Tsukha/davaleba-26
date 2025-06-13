import React from "react";
import { Form, Link, useActionData, useNavigation } from "react-router-dom";

export const CreatePostPage: React.FC = () => {
  const actionData = useActionData() as
    | { error?: string; success?: boolean }
    | undefined;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <Link to="/dashboard/posts" className="back-link">
        ← Back to Posts
      </Link>
      <h1 className="page-title">Create New Post</h1>
      <Form method="post" className="form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            className="form-control"
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="excerpt">Excerpt:</label>
          <textarea
            id="excerpt"
            name="excerpt"
            className="form-control"
            rows={3}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            className="form-control"
            rows={10}
            required
            disabled={isSubmitting}
          />
        </div>
        {actionData?.error && (
          <div className="alert alert-error">
            <p>{actionData.error}</p>
          </div>
        )}
        <div className="btn-group">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Post"}
          </button>
          <Link to="/dashboard/posts" className="btn btn-secondary">
            Cancel
          </Link>
        </div>
      </Form>
    </div>
  );
};
