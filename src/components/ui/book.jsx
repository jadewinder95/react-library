import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Book = ({ book }) => {
  const fullStars = Math.floor(book.rating);
  const hasHalfStar = book.rating % 1 !== 0;

  return (
    <div className="book">
      <a href={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt={book.title} className="book__img" />
        </figure>
      </a>

      <div className="book__title">
        <a href={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </a>
      </div>

      <div className="book__ratings">
        {new Array(Math.floor(book.rating)).fill(0).map((_, index) => (<FontAwesomeIcon icon="star" key={`star-${index}`} />
        ))}
        {hasHalfStar && <FontAwesomeIcon icon="star-half-alt" key="half" />}
      </div>

      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            ${book.salePrice.toFixed(2)}
          </>
        ) : (
          <>${book.originalPrice.toFixed(2)}</>
        )}
      </div>
    </div>
  );
};

export default Book;
    