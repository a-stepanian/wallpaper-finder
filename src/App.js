import React, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import Form from "./Form";
import Photos from "./Photos";
import Enlarged from "./Enlarged";
import Loading from "./Loading";

function App() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [lastSearch, setLastSearch] = useState("");
  const [photos, setPhotos] = useState([]);
  const [orientation, setOrientation] = useState("portrait");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [bigPic, setBigPic] = useState(false);

  const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH,
  });

  const getPhoto = async () => {
    // Get first batch of 30 photos
    const response1 = await unsplash.search.getPhotos({
      query: search,
      perPage: 30,
      orientation,
    });
    const photoArray1 = response1.response.results;
    const newPhotoArray1 = photoArray1.map((photo) => {
      let { description, id, color, likes } = photo;
      let { regular, thumb } = photo.urls;
      if (!description) {
        description = "A beautiful sunny day.";
      }
      if (!regular) {
        regular =
          "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60";
      }
      if (!thumb) {
        thumb =
          "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60";
      }
      return { description, id, regular, thumb, color, likes };
    });

    // Get second batch of 30 photos
    const response2 = await unsplash.search.getPhotos({
      query: search,
      perPage: 30,
      orientation,
    });
    const photoArray2 = response2.response.results;
    const newPhotoArray2 = photoArray2.map((photo) => {
      let { description, id, color, likes } = photo;
      let { regular, thumb } = photo.urls;
      if (!description) {
        description = "A beautiful sunny day.";
      }
      if (!regular) {
        regular =
          "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60";
      }
      if (!thumb) {
        thumb =
          "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60";
      }
      return { description, id, regular, thumb, color, likes };
    });

    setPhotos([...newPhotoArray1, ...newPhotoArray2]);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setLastSearch(search);
    getPhoto();
  };

  useEffect(() => {
    getPhoto();
  }, [orientation]);

  return (
    <>
      <h1>
        <a href="/">Wallpaper Finder</a>
      </h1>

      <main>
        {loading ? (
          <Loading />
        ) : (
          <Photos
            photos={photos}
            setSelectedPhoto={setSelectedPhoto}
            setBigPic={setBigPic}
            orientation={orientation}
          />
        )}

        {bigPic && (
          <Enlarged selectedPhoto={selectedPhoto} setBigPic={setBigPic} />
        )}
        <Form
          search={search}
          setSearch={setSearch}
          handleSubmit={handleSubmit}
          orientation={orientation}
          setOrientation={setOrientation}
          lastSearch={lastSearch}
          setLoading={setLoading}
        />
      </main>
    </>
  );
}

export default App;
