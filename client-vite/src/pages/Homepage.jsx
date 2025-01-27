import { useEffect, useState } from "react";
import { ArticleCard } from "../components/ArticleCard";

const Homepage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("http://localhost:8080/api/blogs");

      const result = await response.json();

      setArticles(result.data);
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

export { Homepage };
