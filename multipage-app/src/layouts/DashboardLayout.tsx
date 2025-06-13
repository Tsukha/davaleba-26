import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export const DashboardLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <h2>Dashboard</h2>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link
                to="/dashboard/posts"
                className={location.pathname.includes("/posts") ? "active" : ""}
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/users"
                className={location.pathname.includes("/users") ? "active" : ""}
              >
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};
