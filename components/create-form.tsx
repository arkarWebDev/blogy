import { createPost } from "@/server/actions";
import React from "react";
import CustomButton from "./custom-button";

const CreateForm = () => {
  return (
    <form action={createPost}>
      <div className="space-y-4 mt-4">
        <input
          type="text"
          name="title"
          placeholder="title ..."
          required
          className="bg-transparent border-2 border-blue-600 rounded-md focus:outline-none p-2 w-full"
        />
        <textarea
          name="description"
          placeholder="description ..."
          required
          className="bg-transparent border-2 border-blue-600 rounded-md focus:outline-none p-2 block w-full"
        />
      </div>
      <div className="flex justify-end">
        <CustomButton label="Create new post" />
      </div>
    </form>
  );
};

export default CreateForm;
