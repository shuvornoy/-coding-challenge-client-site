import EditeData from "../EditeData/EditeData";
import Home from "../Home/Home";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/update/:id",
    element: <EditeData />,
    // loader: ({ params }) => fetch(`https://coding-challenge-server-lovat.vercel.app/update/${params.id}`),
  },
]);
export default router;