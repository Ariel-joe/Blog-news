import { useEffect, useState } from "react";
import { ArticleCard } from "../components/ArticleCard";

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   const searchArticles = async () => {
  //     console.log("Here");

  //     const response = await fetch(
  //       `http://localhost:3005/api/blogs/search?title=${searchText}`
  //     );

  //     if (response.ok) {
  //       const { data, success } = await response.json();

  //       setArticles(data);
  //     } else {
  //       // Error handling
  //     }
  //   };

  //   searchArticles();
  // }, [debouncedText]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/blogs`
      );

      if (response.ok) {
        const { data, success } = await response.json();

        setArticles(data);
      } else {
        // Error handling
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {articles.map((article, i) => (
        <ArticleCard key={i} article={article} />
      ))}
    </div>
  );
};

export { HomePage };
