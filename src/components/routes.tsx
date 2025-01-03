import { RouteObject } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import App from "../App";
import TicTocToePage from "../pages/tictactoe/TicTocToePage";
import ConnectFourPage from "../pages/connectfour/ConnectFour";
import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";

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
      {
        path: "connectfour",
        element: <ConnectFourPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
];
