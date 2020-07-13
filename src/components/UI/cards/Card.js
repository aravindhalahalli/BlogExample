import React from 'react';
import './cardstyle.css';

function Card(props) {
  return (
    // <div className="card" {...props}>
    <div className="card" style={props.style}>
      {props.children}
    </div>
  );
}

export default Card;
