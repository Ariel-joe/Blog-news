import { useState } from "react";
import { toast } from "sonner";

const AddBlogpage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        title,
        description,
        image,
        content,
      };

      const response = await fetch("http://localhost:8080/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const promise = () =>
          new Promise((resolve) => setTimeout(() => resolve(), 2000));

        toast.promise(promise, {
          loading: "Loading...",
          success: (data) => {
            return " Article has been posted successfully ";
          },
          error: "Error",
        });
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
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-semibold">Add Article:</h1>
        </div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title goes here..."
          className="p-2 border mb-4 border-black w-full"
          required
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="description goes here..."
          className="p-2 border mb-4 border-black w-full"
          required
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="image link goes here..."
          className="p-2 border mb-4 border-black w-full"
          required
        />

        <textarea
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={7}
          placeholder="content goes here..."
          className="p-2 border mb-4 border-black w-full"
          required
        />

        <button type="submit" className="bg-black text-white w-full py-2">
          Add blog
        </button>
      </form>
    </>
  );
};

export { AddBlogpage };
