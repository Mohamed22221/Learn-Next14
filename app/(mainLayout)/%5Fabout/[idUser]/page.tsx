import React from "react";
import { NextResponse } from 'next/server';

export async function generateStaticParams() {
  try {
    const user = await fetch(`https://api.escuelajs.co/api/v1/users`);

    if (!user.ok) {
      // This will activate the closest `error.js` Error Boundary.
      throw new Error(`Failed to fetch the data`);
    }
  
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch consultants");
  }



}
const UserPage = async ({ params }: { params: { idUser: string } }) => {
  console.log(params);
  const user = await fetch(
    `https://api.escuelajs.co/api/v1/users/${params.idUser}`
  );

  if (!user.ok) {
    // This will activate the closest `error.js` Error Boundary.
    throw new Error(`Failed to fetch the data`);
  }

  const usersApi = await user.json();
  return <div>{usersApi.name}</div>;
};

type Props = {
  params: { idUser: string };
};

export async function generateMetadata({ params }: Props) {
  const user = await fetch(
    `https://api.escuelajs.co/api/v1/users/${params.idUser}`
  );
  const usersApi = await user.json();

  return {
    title: {
      absolute: `${usersApi.name} | ${usersApi.role} `,
    },
    description: `Role: ${usersApi.role} - Email: ${usersApi.email}`,
    openGraph: {
      images: [
        {
          url: usersApi.avatar,
          width: 1200,
          height: 630,
        },
      ],
      title: `${usersApi.name} | ${usersApi.role} Learn Next 14`,
      description: "The React Framework for the Web",
      url: `https://learn-next14-nine.vercel.app/_about/${usersApi.id}`,
      siteName: "Learn Next.js 14",
    },
    icons: {
      icon: usersApi.avatar,
      shortcut: usersApi.avatar,
      apple: usersApi.avatar,
    },
  };
}

export default UserPage;
