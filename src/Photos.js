import React from "react";

const Photos = ({ photos }) => {
  return (
    <section>
      {photos.map((photo, index) => {
        return (
          <article className="image-card">
            <img src={photo.small} alt={photo.name} key={index} />
            <div
              className="likes"
              style={{ backgroundColor: `${photo.color}` }}
            >
              &#9825; {photo.likes}
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Photos;
