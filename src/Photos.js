import React from "react";

const Photos = ({ photos, setSelectedPhoto, setBigPic, orientation }) => {
  const handleClick = (photo) => {
    setSelectedPhoto(photo);
    setBigPic(true);
  };
  return (
    <section
      className="photo-section"
      style={{
        gridTemplateColumns:
          orientation === "portrait" ? "33% 33% 33%" : "50% 50%",
      }}
    >
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
