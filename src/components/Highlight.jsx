import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Highlight from './Highlight';
import { faBolt, faBookOpen, faTags } from '@fortawesome/free-solid-svg-icons';

const Highlights = () => {
  return (
    <section id="highlight">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            why choose <span className="purple">Library</span>
          </h2>

          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon={faBolt} />}
              title="Easy and Quick"
              para="Access a vast collection of books and resources with just a few clicks."
            />

            <Highlight
              icon={<FontAwesomeIcon icon={faBookOpen} />}
              title="10,000+ Books"
              para="Explore a diverse range of genres and authors."
            />

            <Highlight
              icon={<FontAwesomeIcon icon={faTags} />}
              title="Affordable"
              para="Enjoy competitive pricing and great deals."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
