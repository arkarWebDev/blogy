"use client";

import { useFormStatus } from "react-dom";

const CustomButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className="border-2 border-blue-600 rounded-md p-2 block mt-2 text-white text-sm font-medium disabled:border-gray-500 disabled:text-gray-500 bg-blue-600 disabled:bg-transparent"
      disabled={pending}
    >
      {label || "Default"}
    </button>
  );
};

export default CustomButton;
