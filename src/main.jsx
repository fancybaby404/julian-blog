import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header.jsx";
import PostPage from "./components/PostPage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/blog/:blogId",
        element: <PostPage/>,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <div className="h-screen max-w-2xl px-4 py-2 mx-auto main">
    {/* <div className="main"> */}
        <React.StrictMode>
            <Header />
            <RouterProvider router={router} />
        </React.StrictMode>
    </div>
);
