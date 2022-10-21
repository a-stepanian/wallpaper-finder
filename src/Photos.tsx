import React, { useState, useEffect } from "react";

interface Photo {
  description: string;
  id: string;
  regular: string;
  thumb: string;
  color: string;
  likes: number;
}

type Orientation = "landscape" | "portrait" | "squarish";

type Props = {
  photos: Photo[];
  setSelectedPhoto: React.Dispatch<React.SetStateAction<Photo>>;
  setBigPic: React.Dispatch<React.SetStateAction<boolean>>;
  orientation: Orientation;
};

const Photos = ({
  photos,
  setSelectedPhoto,
  setBigPic,
  orientation,
}: Props): JSX.Element => {
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);
  const [columnSchema, setColumnSchema] = useState<string>("");
  const [tileDims, setTileDims] = useState<string[]>(["125px", "200px"]);

  // Set the viewport width state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Open the enlarged photo modal when the photo is clicked
  const handleClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    setBigPic(true);
  };

  // Set the number of grid columns when viewport width is changed
  useEffect(() => {
    if (orientation === "portrait" && viewportWidth < 768) {
      setColumnSchema("33% 33% 33%");
    }
    if (orientation === "portrait" && viewportWidth >= 768) {
      setColumnSchema("25% 25% 25% 25%");
    }
    if (orientation === "portrait" && viewportWidth >= 1024) {
      setColumnSchema("20% 20% 20% 20% 20%");
    }
    if (orientation === "landscape" && viewportWidth < 768) {
      setColumnSchema("50% 50%");
    }
    if (orientation === "landscape" && viewportWidth >= 768) {
      setColumnSchema("33% 33% 33%");
    }
    if (orientation === "landscape" && viewportWidth >= 1024) {
      setColumnSchema("25% 25% 25% 25%");
    }
  }, [viewportWidth]);

  // Set tile dimensions when orientation/viewport is changed
  useEffect(() => {
    if (orientation === "portrait" && viewportWidth < 480) {
      setTileDims(["80px", "130px"]);
    }
    if (orientation === "portrait" && viewportWidth >= 480) {
      setTileDims(["125px", "200px"]);
    }
    if (orientation === "landscape" && viewportWidth < 480) {
      setTileDims(["130px", "80px"]);
    }
    if (orientation === "landscape" && viewportWidth >= 480) {
      setTileDims(["200px", "125px"]);
    }
  }, [orientation, viewportWidth]);

  // Scroll to Top function
  const scrollUp = () => {
    const container = document.querySelector(".photo-section");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="photo-section">
      <section
        className="photo-grid"
        style={{
          gridTemplateColumns: columnSchema,
        }}
      >
        {photos.map((photo, index) => {
          return (
            <button
              className="image-card"
              key={index}
              onClick={() => handleClick(photo)}
              style={{
                background: `url(${photo.thumb})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: tileDims[1],
                width: tileDims[0],
              }}
            >
              <div className="likes">
                <span className="heart">&#9825;</span> {photo.likes}
              </div>
            </button>
          );
        })}
      </section>
      {photos.length > 0 && (
        <button className="backToTop" onClick={scrollUp}>
          Back to Top
        </button>
      )}
    </section>
  );
};

export default Photos;
