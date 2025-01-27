import { Header } from "./components/Header";
import { Outlet } from "react-router";
import { TopBar } from "./components/TopBar";

const App = () => {
  return (
    <div className="h-screen w-full flex">
      <Header />

      <main className="w-4/5 h-full overflow-auto relative">
        <TopBar />

        <div className="content p-4 mt-20">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export { App };
