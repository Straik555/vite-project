import type { FC } from "react";
import { href, Link } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes.ts";

const BoardList: FC = () => {
  return (
    <div>
      <p>Board List</p>
      <Link to={href(ROUTES.BOARD, { boardId: "1" })}>Board 1</Link>
    </div>
  );
};

export default BoardList;
