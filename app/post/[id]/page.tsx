import { deletePost, getPost } from "@/server/actions";
import Link from "next/link";
import React from "react";

type PostProps = {
  params: {
    id: string;
  };
};
const Post = async ({ params }: PostProps) => {
  const { success } = await getPost(Number(params.id));
  const { title, description } = success;
  return (
    <div className="mt-4">
      <h2 className="text-lg font-medium">{title}</h2>
      <p className="text-sm">{description}</p>
      <div className="flex gap-2 mt-4 ">
        <Link
          href={`/update/${params.id}`}
          className="bg-blue-600 text-sm font-medium text-white p-2 rounded-md"
        >
          Edit post
        </Link>
        <form action={deletePost}>
          <input type="text" name="id" value={params.id} hidden readOnly />
          <button
            type="submit"
            className="bg-red-600 text-sm font-medium text-white p-2 rounded-md"
          >
            Delete post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
