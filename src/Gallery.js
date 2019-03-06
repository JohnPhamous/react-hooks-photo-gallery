import React from "react";
import "./gallery.css";
import getPhotos from "./hooks/getPhotos";

const API_ENDPOINT = "https://api.unsplash.com/photos/";
const ACCESS_KEY =
  "f087b0c870f7c0efeaddd887875463ec09225c2107d777a004e7e6dfaee3d647";

const CONSTRUCTED_ENDPOINT = `${API_ENDPOINT}?client_id=${ACCESS_KEY}&per_page=50`;

const Gallery = () => {
  const [photos, setPhotos] = getPhotos(CONSTRUCTED_ENDPOINT);

  return (
    <section>
      {photos.map(p => (
        <img src={p.urls.small} alt={p.description || "photo"} key={p.id} />
      ))}
    </section>
  );
};

export default Gallery;
