import type { FC } from "react";
import Header from "@/features/header";
import { Outlet } from "react-router-dom";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
