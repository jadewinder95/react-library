import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Book =() => {
    return (
       <div className="book">
            <a href="">
             <figure className='book__img--wrapper'>
               <img 
               src={books.url} 
               alt=""
               className='book__img'/>
                   </figure>
                       </a>
                         <div className="book__title">
                               <a href="/" className='book__title--link'>
                                   {books.title}
                                   </a>
                                   </div>
                                   <div className="book__ratings">
                                       {
                                        new array(4).fill(0).map((e_, index) => <FontAwesomeIcon icon="star" key={index} /> )
                                       }
                                   </div>
                                   <div className="book__price">
                                    {books.salePrice ? (
                                       <>
                                       <span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>
                                       $.{book.salePrice.toFixed(2)}
                                        </>
                                    ) : (
                                        <>${book.originalPrice.toFixed(2)}</>
                                    )}
                                   </div>
                         </div>


    );
}

export default Book;
    