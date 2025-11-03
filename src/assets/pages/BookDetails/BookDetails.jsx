import React from "react";
import { useLoaderData, useParams, Link } from "react-router";
import { addToLocalstorage } from "../../components/utility/localStorage";

const BookDetails = () => {
  const { id } = useParams();
  const Id = parseInt(id);
  const data = useLoaderData();
  const bookDetails = data.find((book) => book.bookId === Id);

  const handleMarkAsRead = (id) => {
    addToLocalstorage(id);
  };

  if (!bookDetails) {
    return (
      <div className="text-center text-xl text-red-500 mt-10">
        Book not found 😔
      </div>
    );
  }

  const {
    bookName,
    author,
    image,
    review,
    category,
    rating,
    tags,
    totalPages,
    yearOfPublishing,
    publisher,
  } = bookDetails;

  return (
    <div className="max-w-5xl mx-auto mt-10 shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start">
      {/* Left Side (Book Image) */}
      <div className="w-full md:w-1/3 h-full  flex items-center justify-center rounded-xl">
        <figure className="h-full flex items-center justify-center bg-gray-100 p-5 rounded-xl">
          <img
            src={image}
            alt={bookName}
            className="h-full object-cover  shadow-md"
          />
        </figure>
      </div>

      {/* Right Side (Book Info) */}
      <div className="w-full md:w-2/3 flex flex-col justify-between space-y-4">
        <h2 className="text-3xl font-bold text-primary">{bookName}</h2>
        <p className="text-lg font-semibold">by {author}</p>

        <div className="divider my-0"></div>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">Category:</span> {category}
        </p>

        <div className="divider my-0"></div>

        <p>
          <span className="font-semibold">Review:</span> {review}
        </p>

        <div className="divider my-0"></div>

        <p>
          <span className="font-semibold">Tags:</span>{" "}
          {tags.map((tag, i) => (
            <span key={i} className="badge badge-outline badge-primary mr-2">
              #{tag}
            </span>
          ))}
        </p>

        <div className="divider my-0"></div>

        <div className="grid grid-cols-2 gap-3 text-gray-800">
          <p>
            <span className="font-semibold">Pages:</span> {totalPages}
          </p>
          <p>
            <span className="font-semibold">Publisher:</span> {publisher}
          </p>
          <p>
            <span className="font-semibold">Published:</span> {yearOfPublishing}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> ⭐ {rating}
          </p>
        </div>

        <div className="divider my-0"></div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => handleMarkAsRead(id)}
            className="btn btn-primary w-32"
          >
            Mark as Read
          </button>
          <button className="btn btn-outline btn-secondary w-32">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
