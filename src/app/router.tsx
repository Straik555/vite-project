import { ROUTES } from "../shared/model/routes";
import { createBrowserRouter, redirect } from "react-router";
import App from "@/app/app";
import BoardsList from "@/features/boards-list";
import Board from "@/features/board";

export const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        children: [
          {
            path: ROUTES.BOARDS,
            Component: BoardsList,
          },
          {
            path: ROUTES.BOARD,
            Component: Board,
          },
        ],
      },
      {
        path: ROUTES.HOME,
        loader: () => redirect(ROUTES.BOARDS),
      },
    ],
  },
]);
