import React from "react";
const Template = ({ id, name, url }) => {
  return (
    <div className='single-meme'>
      <h4 className='title'>{name}</h4>
      <img src={url} alt={name}></img>
    </div>
  );
};
export default Template;
