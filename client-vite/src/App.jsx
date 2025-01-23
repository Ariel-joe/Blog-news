import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { useDebounce } from "use-debounce";

import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ArticleCard } from "./components/ArticleCard";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [debouncedText] = useDebounce(searchText, 1000);

  useEffect(() => {
    console.log("First useEffect has been executed");

    const fetchArticles = async () => {
      const response = await fetch("http://localhost:3005/api/blogs");

      if (response.ok) {
        const { data, success } = await response.json();

        setArticles(data);
      } else {
        // Error handling
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const searchArticles = async () => {
      console.log("Here");

      const response = await fetch(
        `http://localhost:3005/api/blogs/search?title=${searchText}`
      );

      if (response.ok) {
        const { data, success } = await response.json();

        setArticles(data);
      } else {
        // Error handling
      }
    };

    searchArticles();
  }, [debouncedText]);

  return (
    <div className="h-screen w-full flex">
      <Header />

      <main className="w-4/5 h-full overflow-auto relative">
        <div className="topbar flex justify-between px-4 py-4 items-center border-b fixed w-4/5 bg-white">
          <form>
            <input
              type="text"
              value={searchText}
              placeholder="Search blogs..."
              className="border p-2 w-[300px]"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </form>

          <p>{debouncedText}</p>

          <div className="icons flex gap-4">
            <span className="notifications border rounded-full p-2 cursor-pointer hover:shadow-lg duration-150">
              <IoIosNotificationsOutline size={25} />
            </span>
            <span className="profile border rounded-full p-2 cursor-pointer hover:shadow-lg duration-150">
              <CiUser size={25} />
            </span>
          </div>
        </div>

        <div className="content flex flex-wrap gap-4 px-4 py-4 mt-20">
          {articles.map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
};

export { App };
