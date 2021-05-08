import React from 'react';
import './Backdrop.css';
// to desable the other part of the webpage.
export const Backdrop = ({ show }) => {
  return show && <div className="backdrop"></div>;
};

export default Backdrop;
