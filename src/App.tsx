import React, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import Form from "./Form";
import Photos from "./Photos";
import { Enlarged } from "./Enlarged";
import Loading from "./Loading";

interface Photo {
  description: string;
  id: string;
  regular: string;
  thumb: string;
  color: string;
  likes: number;
}

let key: string;
if (process.env.REACT_APP_UNSPLASH) {
  key = process.env.REACT_APP_UNSPLASH.toString();
}

type Orientation = "landscape" | "portrait" | "squarish";

function App(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [lastSearch, setLastSearch] = useState<string>("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [orientation, setOrientation] = useState<Orientation>("portrait");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo>({
    description: "",
    id: "",
    regular: "",
    thumb: "",
    color: "",
    likes: 0,
  });
  const [bigPic, setBigPic] = useState<boolean>(false);

  const unsplash = createApi({
    accessKey: key,
  });
  console.log(unsplash);

  const getPhoto = async () => {
    // Get first batch of 30 photos
    const response1 = await unsplash.search.getPhotos({
      query: search,
      perPage: 30,
      orientation,
    });

    if (response1.response) {
      const photoArray1 = response1.response.results;
      const newPhotoArray1 = photoArray1.map((photo) => {
        let { description, id, color, likes } = photo;
        let { regular, thumb } = photo.urls;
        if (!description) {
          description = "A beautiful sunny day.";
        }
        if (!color) {
          color = "#AAAAAA";
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

      setPhotos(newPhotoArray1);
    }
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setLastSearch(search);
    getPhoto();
  };

  useEffect(() => {
    getPhoto();
    // eslint-disable-next-line
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
