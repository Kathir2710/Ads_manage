import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Facebook from "./pages/Facebook";
import Instagram from "./pages/Instagram";
import YouTube from "./pages/YouTube";
import Snapchat from "./pages/Snapchat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "facebook", element: <Facebook /> },
      { path: "instagram", element: <Instagram /> },
      { path: "youtube", element: <YouTube /> },
      { path: "snapchat", element: <Snapchat /> },
    ],
  },
]);
