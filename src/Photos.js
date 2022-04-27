import React, { useState, useEffect } from "react";

const Photos = ({ photos, setSelectedPhoto, setBigPic, orientation }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [columnSchema, setColumnSchema] = useState(null);

  // Set the viewport width state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //

  // Open the enlarged photo modal when the photo is clicked
  const handleClick = (photo) => {
    setSelectedPhoto(photo);
    setBigPic(true);
  };

  useEffect(() => {
    if (orientation === "portrait" && viewportWidth < 1000) {
      setColumnSchema("33% 33% 33%");
    }
    if (orientation === "portrait" && viewportWidth >= 1000) {
      setColumnSchema("25% 25% 25% 25%");
    }
    if (orientation === "landscape" && viewportWidth < 1000) {
      setColumnSchema("50% 50%");
    }
    if (orientation === "landscape" && viewportWidth >= 1000) {
      setColumnSchema("33% 33% 33%");
    }
  }, [viewportWidth]);

  return (
    <section
      className="photo-section"
      style={{
        gridTemplateColumns: columnSchema,
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
