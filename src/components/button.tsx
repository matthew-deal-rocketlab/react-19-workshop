import { useFormStatus } from "react-dom";

export default function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 text-white py-2 px-5 rounded min-w-[120px]"
    >
      {pending ? "Updating..." : "Update"}
    </button>
  );
}
