import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { getBookData } from "../../components/utility/localStorage";

const ReadList = () => {
  const [books, setBooks] = useState([]);

  const fetchReadListBooks = () => {
    const storedIds = getBookData().map((id) => parseInt(id));
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => {
        const savedBooks = data.filter((book) =>
          storedIds.includes(book.bookId)
        );
        setBooks(savedBooks);
      });
  };

  useEffect(() => {
    fetchReadListBooks();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        My Read List
      </h2>

      {books.length === 0 ? (
        <p className="text-center text-gray-500">No books added yet</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.bookId}
              className="card bg-base-100 shadow-lg border rounded-lg"
            >
              <figure>
                <img
                  src={book.image}
                  alt={book.bookName}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg">{book.bookName}</h2>
                <p className="text-sm text-gray-500">by {book.author}</p>
                <Link to={`/bookDetails/${book.bookId}`}>
                  <button className="btn btn-sm btn-primary mt-3 w-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReadList;
