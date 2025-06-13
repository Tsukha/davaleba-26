import React from "react";
import { useLoaderData, Form, Link, useNavigate } from "react-router-dom";
import type { Post } from "../types/Post";

export const PostDetailPage: React.FC = () => {
  const post = useLoaderData() as Post;
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
    }
  };

  return (
    <div>
      <Link to="/dashboard/posts" className="back-link">
        ← Back to Posts
      </Link>
      <article className="card">
        <h1>{post.title}</h1>
        <div className="card-meta">
          By {post.author} on {post.date}
        </div>
        <div className="post-content">
          {post.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
      <div className="post-actions">
        <button
          onClick={() => navigate(`/dashboard/posts/${post.id}/edit`)}
          className="btn btn-primary"
        >
          Edit Post
        </button>
        <Form method="delete" onSubmit={handleDelete}>
          <button type="submit" className="btn btn-danger">
            Delete Post
          </button>
        </Form>
      </div>
    </div>
  );
};
