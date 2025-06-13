import React from "react";
import { Link, useRouteError } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  const error = useRouteError() as Error;

  return (
    <div className="error-page">
      <h1>Oops! Something went wrong</h1>
      <p>{error?.message || "The page you are looking for does not exist."}</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
};
