import { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleBlogpage = () => {
  const [article, setArticle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/blogs/single/?id=${id}`
        );

        const result = await response.json();

        console.log(result);

        setArticle(result.data);
      } catch (error) {}
    };

    fetchArticle();
  }, [id]);

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.image} alt="" />

      <h3>{article.description}</h3>
      <p>{article.content}</p>
    </div>
  );
};

export { SingleBlogpage };
