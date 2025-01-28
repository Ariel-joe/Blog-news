import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AddBlogpage = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  useEffect(() => {
  }, [])

  return (
    <>
      <form className="w-[90%] sm:w-2/3 max-w-[650px] mx-auto">
        <h1 className="mb-6 font-semibold">Add Article:</h1>
        <input
          type="text"
          placeholder="title goes here..."
          className="p-2 border mb-4 border-black w-full"
        />
        <input
          type="text"
          placeholder="description goes here..."
          className="p-2 border mb-4 border-black w-full"
        />
        <input
          type="link"
          placeholder="image link goes here..."
          className="p-2 border mb-4 border-black w-full"
        />

        <textarea
          type="text"
          rows={7}
          placeholder="content goes here..."
          className="p-2 border mb-4 border-black w-full"
        />
        <Link to={"/"}>
        <button type="submit" className="bg-black text-white w-full py-2">Add blog</button>
        </Link>
      </form>
    </>
  );
};

export { AddBlogpage };
