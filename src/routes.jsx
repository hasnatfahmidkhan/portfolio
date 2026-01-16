import { createBrowserRouter } from "react-router";
import App from "./App";
import ProjectDetails from "./pages/ProjectDetails";
import MainSections from "./components/MainSections";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout with Navbar
    children: [
        {
            index: true,
            element: <MainSections /> // The One-Page Scroll Content
        },
        {
            path: "project/:id",
            element: <ProjectDetails />
        }
    ]
  },
]);
