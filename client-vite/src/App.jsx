import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";

import { useEffect, useState } from "react";
import { Header } from "./components/Header";

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("http://localhost:3005/api/blogs");

      if (response.ok) {
        const { data, success } = await response.json();

        setArticles(data);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="h-screen w-full flex">
      <Header />

      <main className="w-4/5 h-full overflow-auto relative">
        <div className="topbar flex justify-between px-4 py-4 items-center border-b fixed w-4/5 bg-white">
          <form>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search blogs..."
              className="border p-2 w-[300px]"
            />
          </form>

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
          {articles.map(({ title, image, description, _id }, i) => (
            <div
              key={i}
              className="card w-[32%] border p-4 shadow-lg space-y-3"
            >
              <div className="image">
                <img className="w-full" src={image} alt="Blog Image" />
              </div>
              <h2 className="title text-2xl font-semibold">{title}</h2>
              <p className="description">{description}</p>
              <div className="flex justify-end">
                <a
                  className="readMore flex items-center p-2 hover:shadow-lg duration-150 text-blue-500"
                  href={`/article/${_id}`}
                >
                  Read More <IoIosArrowRoundForward />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export { App };
