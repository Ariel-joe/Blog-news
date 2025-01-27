import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ArticleCard } from "./components/ArticleCard";
import { useDebounce } from "use-debounce";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [debouncedText] = useDebounce(searchText, 2000);

  // // effect for the search bar
  useEffect(() => {
    const searchingArticles = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/blogs/search?title=${searchText}`
        );

        if (response.ok) {
          const { data, success } = await response.json();
          setArticles(data);
        }
      } catch (error) {
        console.error("failed to fetch", error);
      }
    };
    searchingArticles();
  }, [debouncedText]);

  // {*/ effect for fetching articles for homepage */}
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("http://localhost:8080/api/blogs");

      const result = await response.json();

      setArticles(result.data);
    };

    fetchArticles();
  }, []);

  return (
    <div className="h-screen w-full flex">
      <Header />

      <main className="w-4/5 h-full overflow-auto relative">
        

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
