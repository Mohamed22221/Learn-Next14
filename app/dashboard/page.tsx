import Link from "next/link";
import React from "react";

const PageDash = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/postss");
  if (!res.ok) {
    throw new Error(`Failed to fetch the posts`);
  }
  const posts = await res.json();


  return <div>{posts[0].title}</div>;
};

export default PageDash;
