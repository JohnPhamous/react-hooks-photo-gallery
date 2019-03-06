import { useState, useEffect } from "react";

function getPhotos(endpoint) {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    const result = await fetch(endpoint);
    const data = await result.json();
    setPhotos(data);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return [photos, setPhotos];
}

export default getPhotos;
