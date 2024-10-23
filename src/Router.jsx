import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import Root from "./Root";
import Home from "./Home";
import Author from "./Author";
import Book from "./Book";
import Chapters from "./Chapters";
import Characters from "./Characters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "author/:name",
        element: <Author />,
        children: [
          {
            path: ":book",
            element: <Book />,
            children: [
              {
                path: "chapters",
                element: <Chapters />,
              },
              {
                path: "characters",
                element: <Characters />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
