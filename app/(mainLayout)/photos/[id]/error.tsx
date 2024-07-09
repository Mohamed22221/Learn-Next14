"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset
}: {
  error: Error & { message?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>{error.message}</h2>
    </div>
  );
}
