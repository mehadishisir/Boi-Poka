import { Star } from "lucide-react";
import React from "react";

const Book = ({ book }) => {
  console.log(book);
  const { bookName, author, image, category, rating } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-sm *:hover:shadow-xl transition-shadow p-5">
      <figure className="bg-gray-100 p-5">
        <img className="h-[150px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title">{bookName}</h2>
        <div className="badge badge-dash">by {author}</div>

        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge ">
            {rating} <Star size={20}></Star>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
