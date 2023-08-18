import { FaSpinner } from "react-icons/fa6";

export default function Loading() {
  return (
    <>
      <div className="w-full h-max p-4 text-lg">
        <FaSpinner className="animate-spin text-center" />
      </div>
    </>
  );
}
