import Link from "next/link";
import React, { Suspense } from "react";

const page = async () => {
  const users = await fetch("https://api.escuelajs.co/api/v1/users");

  if (!users.ok) {
    // This will activate the closest `error.js` Error Boundary.
    throw new Error(`Failed to fetch the data`);
  }

  const usersApi = await users.json();

  return (
    <Suspense fallback={<div>Loading users...</div>}>
      <ul>
        {usersApi.map((user: any) => (
          <li  key={user.id}>
            <Link href={`/_about/${user.id}`}>{user.name}</Link>
          </li>
          
        ))}
      </ul>
    </Suspense>
  );
};

export default page;
