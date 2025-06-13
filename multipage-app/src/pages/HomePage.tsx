import React from "react";
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
  return (
    <div className="home-hero">
      <h1>Welcome to My App</h1>
      <p>
        This is a demo React Router application with nested routes, loaders, and
        actions.
      </p>
      <div className="home-actions">
        <Link to="/dashboard/posts" className="btn btn-primary">
          View Posts
        </Link>
        <Link to="/dashboard/users" className="btn btn-secondary">
          Manage Users
        </Link>
      </div>
    </div>
  );
};
