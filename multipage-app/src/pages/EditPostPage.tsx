import React from "react";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useLoaderData,
} from "react-router-dom";
import type { Post } from "../types/Post";

export const EditPostPage: React.FC = () => {
  const post = useLoaderData() as Post;
  const actionData = useActionData() as
    | { error?: string; success?: boolean }
    | undefined;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="page-container">
      <div>
        <Link to={`/dashboard/posts/${post.id}`} className="back-link">
          ← Back to Post
        </Link>
      </div>
      <div className="page-header">
        <h1 className="page-title">Edit Post</h1>
      </div>

      <Form method="put" className="form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            defaultValue={post.title}
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
            defaultValue={post.author}
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
            defaultValue={post.excerpt}
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
            defaultValue={post.content}
            required
            disabled={isSubmitting}
          />
        </div>

        {actionData?.error && (
          <div className="alert alert-error">
            <p>{actionData.error}</p>
          </div>
        )}

        {actionData?.success && (
          <div className="alert alert-success">
            <p>Post updated successfully!</p>
          </div>
        )}

        <div className="btn-group">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update Post"}
          </button>
          <Link
            to={`/dashboard/posts/${post.id}`}
            className="btn btn-secondary"
          >
            Cancel
          </Link>
        </div>
      </Form>
    </div>
  );
};
