import React from 'react'

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className='section__title'>
                        why choose <span className='purple'>Library</span>
                    </h2>
                    <div className="highlight__wrapper">

                        <Highlight />

                        <div className="highlight">
                            <div className="highlight__img">
                                <FontAwesomeIcon icon='bolt' />
                            </div>
                            <h3 className='highlight__subtitle'>Easy and Quick</h3>
                            <p className='highlight__para'>
                                Access a vast collection of books and 
                                resources with just a few clicks.
                            </p>
                        </div>
                        <div className="highlight">
                            <div className="highlight__img">
                                <FontAwesomeIcon icon='book-open' />
                            </div>
                            <h3 className='highlight__subtitle'>10,000+ Books</h3>
                            <p className='highlight__para'>
                                Explore a diverse range of genres and authors.
                            </p>
                        </div>
                        <div className="highlight">
                            <div className="highlight__img">
                                <FontAwesomeIcon icon='tags' />
                            </div>
                            <h3 className='highlight__subtitle'>Affordable</h3>
                            <p className='highlight__para'>
                                Enjoy competitive pricing and great deals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;