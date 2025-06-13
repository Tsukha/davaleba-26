import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import type { Post } from "../types/Post";

export const PostsPage: React.FC = () => {
  const posts = useLoaderData() as Post[];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Posts</h1>
        <Link to="/dashboard/posts/new" className="btn btn-primary">
          Create New Post
        </Link>
      </div>
      <div className="posts-grid">
        {posts.length === 0 ? (
          <div className="empty-state">
            <p>No posts available.</p>
          </div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="card post-card">
              <h3 className="card-title">
                <Link to={`/dashboard/posts/${post.id}`}>{post.title}</Link>
              </h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="card-meta">
                By {post.author} on {post.date}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
