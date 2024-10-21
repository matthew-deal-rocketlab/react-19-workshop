import { useFormStatus } from "react-dom";
import Spinner from "./spinner";

export default function Card({ name }: { name: string }) {
  const { pending, data, method } = useFormStatus();

  if (pending) {
    return (
      <div className="flex flex-col ap-2 justify-center items-center mt-10 min-h-[200px] p-4">
        <Spinner />
        <p>{data ? `Requesting ${data?.get("name")}` : ""}</p>
        Form Method: {method}
      </div>
    );
  }

  return (
    <div className="bg-white  text-black border border-gray-200 rounded-2xl shadow-md mt-10 min-h-[200px] p-4 flex flex-col gap-4">
      <p>{name}</p>
    </div>
  );
}
