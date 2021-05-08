import React from 'react';
import './Backdrop.css';
// to desable the other part of the webpage.
export const Backdrop = ({ show, click }) => {
  return show && <div className="backdrop" onClick={click}></div>;
};

export default Backdrop;
