import React from "react";

const Enlarged = ({ selectedPhoto, setBigPic }) => {
  const backcolor = selectedPhoto.color + "dd";
  return (
    <article
      className="enlarged-image"
      style={{ backgroundColor: `${backcolor}` }}
    >
      <img src={selectedPhoto.regular} alt={selectedPhoto.description} />
      <button className="close-btn" onClick={() => setBigPic(false)}>
        <div className="close-btn-x">&#215;</div>
      </button>
    </article>
  );
};

export default Enlarged;
