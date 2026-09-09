"use client";

import "./Books.css";

const books = [
  {
    number: "01",
    title: "Books",
    description:
      "Explore books authored or contributed to by faculty members of the Information Technology department.",
  },
  {
    number: "02",
    title: "Book Chapters",
    description:
      "Academic contributions and technical chapters covering modern technologies and research areas.",
  },
];

export default function Books() {
  return (
    <section className="books-section" id="books">
      <div className="books-container">

        <div className="books-heading">
          <div className="books-eyebrow">
            <span />
            BOOKS & CHAPTERS
          </div>

          <h1>
            Sharing
            <span> Knowledge.</span>
          </h1>

          <p>
            Explore academic books and book chapters contributed by our
            faculty members across different areas of technology.
          </p>
        </div>

        <div className="books-grid">
          {books.map((book) => (
            <article className="book-card" key={book.number}>
              <div className="book-number">
                {book.number}
              </div>

              <h2>{book.title}</h2>

              <p>{book.description}</p>

              <div className="book-line" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}