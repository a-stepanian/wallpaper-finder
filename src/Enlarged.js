import React from "react";

const Enlarged = ({ selectedPhoto, setBigPic }) => {
  const backcolor = selectedPhoto.color + "dd";
  console.log(backcolor);
  return (
    <article
      className="enlarged-image"
      style={{ backgroundColor: `${backcolor}` }}
    >
      <img src={selectedPhoto.regular} alt={selectedPhoto.description} />
      <button className="close-btn" onClick={() => setBigPic(false)}>
        &#215;
      </button>
    </article>
  );
};

export default Enlarged;
