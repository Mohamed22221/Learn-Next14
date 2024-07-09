import React from 'react'

const pageUsers = async () => {
    const resUsers = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!resUsers.ok) {
      // This will activate the closest `error.js` Error Boundary.
      throw new Error(`Failed to fetch the data`);
    }
    const users = await resUsers.json();

  return (
    <div>pageUsers {users[0].name}</div>
  )
}

export default pageUsers