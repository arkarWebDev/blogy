import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center flex w-full h-screen flex-col items-center justify-center gap-2">
      <h2 className="text-3xl">404 Not Found</h2>
      <Link
        className="underline text-red-600 border border-red-600 p-4 rounded-md"
        href={"/"}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
