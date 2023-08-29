import { FaSpinner } from "@react-icons/all-files/fa/FaSpinner";
export default function Loading() {
  return (
    <>
      <div className="w-full h-max p-4 text-lg">
        <FaSpinner className="animate-spin text-center" />
      </div>
    </>
  );
}
