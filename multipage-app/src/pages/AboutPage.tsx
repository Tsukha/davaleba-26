import React from "react";

export const AboutPage: React.FC = () => {
  return (
    <div className="about-content">
      <h1>About Us</h1>
      <p>This application demonstrates React Router v6 features including:</p>
      <ul>
        <li>Nested routes and layouts</li>
        <li>Data loading with loaders</li>
        <li>Form handling with actions</li>
        <li>Navigation and active link styling</li>
      </ul>
    </div>
  );
};
