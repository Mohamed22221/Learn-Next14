import React from "react";
import ModalComponent from "./modal";
import Image from "next/image";
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

  return (
    <div>
      <ModalComponent>
        {photo[0].title}{" "}
        <Image
          src={photo[0].url}
          alt={photo[0].title}
          width={450}
          height={450}
        />
      </ModalComponent>
    </div>
  );
};

export default page;
