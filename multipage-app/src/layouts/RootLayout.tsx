import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export const RootLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="root-layout">
      <header className="header">
        <nav className="nav">
          <h1>My App</h1>
          <ul className="nav-list">
            <li>
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/posts"
                className={`nav-link ${
                  location.pathname.startsWith("/dashboard") ? "active" : ""
                }`}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2025 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};
