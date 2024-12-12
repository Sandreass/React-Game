import { RouteObject } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import App from "../App";
import TicTocToePage from "../pages/tictactoe/TicTocToePage";

export const routesObj: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "tictictoe",
        element: <TicTocToePage />,
      },
    ],
  },
];