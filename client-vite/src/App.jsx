import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ArticleCard } from "./components/ArticleCard";
// import { useDebounce } from "use-debounce";
import { Topbar } from "./components/Topbar";
import { Outlet } from "react-router";

const App = () => {
  // const [debouncedText] = useDebounce(searchText, 2000);

  // // effect for the search bar
  // useEffect(() => {
  //   const searchingArticles = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:8080/api/blogs/search?title=${searchText}`
  //       );

  //       if (response.ok) {
  //         const { data, success } = await response.json();
  //         setArticles(data);
  //       }
  //     } catch (error) {
  //       console.error("failed to fetch", error);
  //     }
  //   };
  //   searchingArticles();
  // }, [debouncedText]);

  // {*/ effect for fetching articles for homepage */}

  return (
    <div className="h-screen w-full flex">
      <Header />

      <main className="w-4/5 h-full overflow-auto relative">
        <Topbar />
        <div className="content px-4 py-4 mt-20">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export { App };
