import CustomButton from "@/components/custom-button";
import { getPost, updatePost } from "@/server/actions";

type EditTodoProps = {
  params: {
    id: string;
  };
};

const EditTodo = async ({ params }: EditTodoProps) => {
  const { success } = await getPost(Number(params.id));
  return (
    <main className="mt-4">
      <h2 className="title-text">Update post</h2>
      <form action={updatePost}>
        <input type="text" name="id" value={params.id} hidden readOnly />
        <div className="space-y-4 mt-4">
          <input
            type="text"
            name="title"
            placeholder="title ..."
            required
            className="bg-transparent border-2 border-blue-600 rounded-md focus:outline-none p-2 block w-full"
            defaultValue={success?.title}
          />
          <textarea
            name="description"
            placeholder="description ..."
            required
            className="bg-transparent border-2 border-blue-600 rounded-md focus:outline-none p-2 block w-full"
            rows={5}
            defaultValue={success?.description}
          />
        </div>
        <div className="flex justify-end">
          <CustomButton label="Update post" />
        </div>
      </form>
    </main>
  );
};

export default EditTodo;

// /update/editId/component render
