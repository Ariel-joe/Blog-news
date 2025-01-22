import { IoIosArrowRoundForward } from "react-icons/io";

const ArticleCard = ({ article }) => {
  const { image, title, description, _id: id } = article;

  return (
    <div className="card w-[32%] border p-4 shadow-lg space-y-3">
      <div className="image">
        <img className="w-full" src={image} alt="Blog Image" />
      </div>
      <h2 className="title text-2xl font-semibold">{title}</h2>
      <p className="description">{description}</p>
      <div className="flex justify-end">
        <a
          className="readMore flex items-center p-2 hover:shadow-lg duration-150 text-blue-500"
          href={`/article/${id}`}
        >
          Read More <IoIosArrowRoundForward />
        </a>
      </div>
    </div>
  );
};

export { ArticleCard };
