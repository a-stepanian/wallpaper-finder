import React from "react";

const Carousel = ({ photos }) => {
  console.log(photos);
  console.log(photos.slice(1));
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={photos[0].small}
            className="d-block w-100"
            alt={photos[0].description}
          />
        </div>
        {photos.slice(1).map((photo) => {
          return (
            <div className="carousel-item" key={photo.id}>
              <img src={photo.small} className="d-block w-100" alt="..." />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
