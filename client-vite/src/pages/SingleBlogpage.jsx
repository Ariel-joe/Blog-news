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
        setLoading(false)
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
          <div className="flex justify-center space-x-9 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-3 underline">
                {article.title}
              </h1>
              <h3 className="text-2xl font-semibold mb-3">
                {article.description}
              </h3>
            </div>
            <img src={article.image} className="w-[40%] mb-3" alt="" />
          </div>

          <p className="w-[50%] text-justify">{article.content}</p>
        </div>
      )}
    </>
  );
};

export { SingleBlogpage };
