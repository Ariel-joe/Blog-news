import React from "react";

const AddBlogpage = () => {
  return (
    <>
      <form className="w-[90%] sm:w-2/3 max-w-[650px] mx-auto">
        <h1 className="mb-8">Add blog/Article</h1>
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

        <button className="bg-black text-white w-full">Add blog</button>
      </form>
    </>
  );
};

export { AddBlogpage };
