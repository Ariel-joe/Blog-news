import { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleBlogpage = () => {
  const [article, setArticle] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/blogs/single/${id}`
        );

        const result = await response.json();

        setArticle(result.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="my-3 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-3 underline">{article.title}</h1>
          <img src={article.image} className="w-[40%] mb-3" alt="" />

          <h3 className="text-2xl font-semibold mb-3">{article.description}</h3>

          <p className="w-[70%] text-justify">
            {article.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </p>
        </div>
      )}
    </>
  );
};

export { SingleBlogpage };
