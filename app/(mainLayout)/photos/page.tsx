'use server';
import React, { Suspense } from "react";
import Gallary from "./gallary";
import FormPosts from "./_components/formPosts";

const PhotosPage = async () => {
  const resPhotos = await fetch(
    "http://jsonplaceholder.typicode.com/photos?_start=0&_limit=100"
  );

  if (!resPhotos.ok) {
    // This will activate the closest `error.js` Error Boundary.
    throw new Error(`Failed to fetch the data`);
  }
  const resPosts = await fetch("https://api.escuelajs.co/api/v1/users" , { next: { tags: ['user'] }});

  if (!resPosts.ok) {
    // This will activate the closest `error.js` Error Boundary.
    throw new Error(`Failed to fetch the data`);
  }

  const resComments = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  );

  if (!resPosts.ok) {
    // This will activate the closest `error.js` Error Boundary.
    throw new Error(`Failed to fetch the data`);
  }

  const resTodos = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (!resPosts.ok) {
    // This will activate the closest `error.js` Error Boundary.
    throw new Error(`Failed to fetch the data`);
  }
  const photosApi = await resPhotos.json();
  const postsApi = await resPosts.json();
  const commentsApi = await resComments.json();
  const todosApi = await resTodos.json();
  const [photos, posts, comments ,todos] = await Promise.all([
    photosApi,
    postsApi,
    commentsApi,
    todosApi
  ]);

  

  return (
    <div>
      <h1>Photos</h1>
      <Suspense fallback={<div>Loading Photos...</div>}>
      <Gallary photos={photos} />
      </Suspense>
      <FormPosts />
      <h1>users</h1>
      <Suspense fallback={<div>Loading Posts...</div>}>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
      </Suspense>
      <h1>Comments</h1>
      <Suspense fallback={<div>Loading Comments...</div>}>
      <ul>
        {comments.map((post: any) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
      </Suspense>
      <h1>todos</h1>
      <Suspense fallback={<div>Loading todos...</div>}>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      </Suspense>
    </div>
  );
};

export default PhotosPage;
