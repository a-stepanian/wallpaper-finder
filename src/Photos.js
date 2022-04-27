import React from "react";

const Photos = ({ photos, setSelectedPhoto, setBigPic }) => {
  const handleClick = (photo) => {
    setSelectedPhoto(photo);
    setBigPic(true);
  };
  return (
    <section className="photo-section">
      {photos.map((photo, index) => {
        return (
          <button
            className="image-card"
            key={index}
            style={{
              backgroundColor: `${photo.color}`,
            }}
            onClick={() => handleClick(photo)}
          >
            <img src={photo.thumb} alt={photo.name} />
            <div
              className="likes"
              style={{ backgroundColor: `${photo.color}` }}
            >
              <span className="heart">&#9825;</span> {photo.likes}
            </div>
          </button>
        );
      })}
    </section>
  );
};

export default Photos;
