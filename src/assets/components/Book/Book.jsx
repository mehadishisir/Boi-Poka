import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  //   console.log(book);
  const { bookName, author, image, category, rating, tags, bookId } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-4/5 lg:w-11/12 mx-auto shadow-sm *:hover:shadow-xl transition-shadow p-5">
        <figure className="bg-gray-100 p-5">
          <img className="h-[150px]" src={image} alt="Shoes" />
        </figure>

        <div className="flex flex-wrap justify-between mt-2 font-bold gap-2 px-2">
          {tags.map((tag, index) => (
            <p key={index} className="badge badge-primary">
              {tag}
            </p>
          ))}
        </div>

        <div className="card-body p-2 ">
          <h2 className="card-title">{bookName}</h2>
          <div className="badge">by {author}</div>

          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="border-1 border-dashed mt-2"></div>
          <div className="card-actions justify-between mt-4">
            <div className="badge badge-outline">{category}</div>
            <div className="badge ">
              {rating} <Star size={20}></Star>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
