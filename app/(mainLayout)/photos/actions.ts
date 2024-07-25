"use server";

import { revalidateTag } from "next/cache";

export const createUser = async (values : any) => {
    {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/users`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        const responseData = await response.json();
        if (!response?.ok) {
          console.log("error", responseData);
        }
        if (response?.ok) {
          revalidateTag('user')
          return responseData;
          
        }
      } catch (error) {
  
      }
    }
  };