import type { FC } from "react";
import { useParams } from "react-router-dom";
import { type PathParams, ROUTES } from "@/shared/model/routes.ts";

const Board: FC = () => {
  const params = useParams<PathParams[typeof ROUTES.BOARD]>();
  return <div>Board {params.boardId}</div>;
};

const Component: FC = Board;

export default Component;
