"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * The Gallary component renders the gallery section of the main layout.
 *
 * @returns {JSX.Element} The rendered gallery section.
 */
const Gallary = ({ photos }: any) => {
  
  return (
    // The main container for the gallery section
    <div>
      {/* The header text for the gallery section */}
      <h2>Gallery</h2>
      <div className="gallary">
        {photos.map((photo: any) => (
          <Link href={`/photos/${photo.id}`} key={photo.id}>
            <Image
              key={photo.id}
              src={photo.url}
              alt={photo.title}
              width={250}
              height={250}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
