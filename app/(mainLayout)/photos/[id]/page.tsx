import React from "react";
type PhotosDetailsProps = {
  params: { id: string };
};
const page = async ({ params }: PhotosDetailsProps) => {
  const resPhoto = await fetch(
    `http://jsonplaceholder.typicode.com/photos?id=${params.id}`
  );

  if (!resPhoto.ok) {
    // This will activate the closest `error.js` Error Boundary.
    throw new Error(`Failed to fetch the data`);
  }
  const photo = await resPhoto.json();
  console.log(params);
  return <div>page</div>;
};

export default page;
