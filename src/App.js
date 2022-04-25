import React, { useState } from "react";
import { createApi } from "unsplash-js";
import Form from "./Form";
import Photos from "./Photos";

function App() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState([]);
  const [orientation, setOrientation] = useState("portrait");

  const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH,
  });

  const getPhoto = async () => {
    const response = await unsplash.search.getPhotos({
      query: search,
      perPage: 30,
      orientation,
    });
    const photoArray = response.response.results;
    console.log(photoArray[0]);
    const newPhotoArray = photoArray.map((photo) => {
      let { description, id, color, likes } = photo;
      let { full, small, thumb } = photo.urls;
      if (!description) {
        description = "A beautiful sunny day.";
      }
      if (!full) {
        full =
          "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60";
      }
      if (!small) {
        small =
          "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60";
      }
      if (!thumb) {
        thumb =
          "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60";
      }
      return { description, id, full, small, thumb, color, likes };
    });
    setPhotos(newPhotoArray);

    const photoWindow = document.querySelector("section");
    photoWindow.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPhoto();
  };

  return (
    <>
      <h1>Wallpaper Finder</h1>
      <main>
        <Photos photos={photos} />
        <Form
          search={search}
          setSearch={setSearch}
          handleSubmit={handleSubmit}
          orientation={orientation}
          setOrientation={setOrientation}
        />
      </main>
    </>
  );
}

export default App;
