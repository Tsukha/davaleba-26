import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { PostsPage } from "./pages/PostsPage";
import { PostDetailPage } from "./pages/PostDetailPage";
import { CreatePostPage } from "./pages/CreatePostPage";
import { UsersPage } from "./pages/UsersPage";
import { UserDetailPage } from "./pages/UserDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { postsLoader, postDetailLoader } from "./loaders/postLoaders";
import { usersLoader, userDetailLoader } from "./loaders/userLoaders";
import {
  createPostAction,
  deletePostAction,
  updatePostAction,
} from "./actions/postActions";
import {
  createUserAction,
  deleteUserAction,
  updateUserAction,
} from "./actions/userActions";
import "./app.css";
import { EditPostPage } from "./pages/editPostPage";

const App = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "posts",
            element: <PostsPage />,
            loader: postsLoader,
          },
          {
            path: "posts/new",
            element: <CreatePostPage />,
            action: createPostAction,
          },
          {
            path: "posts/:postId/edit",
            element: <EditPostPage />,
            loader: postDetailLoader,
            action: updatePostAction,
          },
          {
            path: "posts/:postId",
            element: <PostDetailPage />,
            loader: postDetailLoader,
            action: (args) => {
              if (args.request.method === "DELETE") {
                return deletePostAction(args);
              }
              return updatePostAction(args);
            },
          },
          {
            path: "users",
            element: <UsersPage />,
            loader: usersLoader,
            action: createUserAction,
          },
          {
            path: "users/:userId",
            element: <UserDetailPage />,
            loader: userDetailLoader,
            action: (args) => {
              if (args.request.method === "DELETE") {
                return deleteUserAction(args);
              }
              return updateUserAction(args);
            },
          },
        ],
      },
    ],
  },
]);

export default App;
