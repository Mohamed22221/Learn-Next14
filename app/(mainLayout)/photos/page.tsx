import React from "react";
import Gallary from "./gallary";

const PhotosPage = async () => {
  const resPhotos = await fetch(
    "http://jsonplaceholder.typicode.com/photos?_start=0&_limit=10"
  );

  if (!resPhotos.ok) {
    // This will activate the closest `error.js` Error Boundary.
    throw new Error(`Failed to fetch the data`);
  }
  const photos = await resPhotos.json();

  return (
    <div>
      <Gallary photos={photos} />
    </div>
  );
};

export default PhotosPage;
