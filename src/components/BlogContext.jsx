import blogPosts from "@/Blog/blog";
import React from "react";

const BlogContext = () => {
  return (
    <div className="my-[50px]">
      <div className="container grid gap-4">
        {blogPosts.map(
          ({ id, title, category, content, author, publishDate, imageURL }) => (
            <div key={id} className="border p-4 rounded-lg grid grid-cols-5 gap-5">
              <div className="h-[300px] col-span-2">
                <img
                  src={imageURL}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2 col-span-3">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-sm text-gray-500">{category}</p>
                <p className="mt-2">{content}</p>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-sm text-gray-700">By {author}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(publishDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BlogContext;
