import React from 'react';

const Avenger = ({ name, images, source, children }) => {
  return (
    <div className="avenger">
      <h3>{name}</h3>
      {children}

      <p className="source">
        <a target="_blank" rel="noopener noreferrer" href={source}>Source</a>
      </p>

      <div className="row">
        {images.map((image, index) => <div className="col" key={index}>{image}</div>)}
      </div>
    </div>
  );
}

export default Avenger;