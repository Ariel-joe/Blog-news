import React, { useState } from "react";
import { Link } from "react-router";

const AddBlogpage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("content", content);

      const response = await fetch(
        "http://localhost:8080/api/blogs",
        formData,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (response.success) {
        setTitle("");
        setDescription("");
        setImage("");
        setContent("");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="w-[90%] sm:w-2/3 max-w-[650px] mx-auto"
      >
        <h1 className="mb-6 font-semibold">Add Article:</h1>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title goes here..."
          className="p-2 border mb-4 border-black w-full"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="description goes here..."
          className="p-2 border mb-4 border-black w-full"
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="image link goes here..."
          className="p-2 border mb-4 border-black w-full"
        />

        <textarea
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={7}
          placeholder="content goes here..."
          className="p-2 border mb-4 border-black w-full"
        />
        <Link>
          <button type="submit" className="bg-black text-white w-full py-2">
            Add blog
          </button>
        </Link>
      </form>
    </>
  );
};

export { AddBlogpage };
