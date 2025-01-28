import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router";

const ArticleCard = ({ article }) => {
  const { image, title, content, _id: id } = article;

  return (
    <div className="card w-[32%] border p-4 shadow-lg space-y-3">
      <div className="image">
        <img className="w-full" src={image} alt="Blog Image" />
      </div>
      <h2 className="title text-2xl font-semibold">{title}</h2>
      <p className="description text-gray-600 font-normal">{content.substring(0, 60)}...</p>
      <div className="flex justify-end">
        <Link
          className="readMore flex items-center p-2 hover:shadow-lg duration-150 text-blue-500"
          to={`/article/${id}`}
        >
          Read More <IoIosArrowRoundForward />
        </Link>
      </div>
    </div>
  );
};

export { ArticleCard };
