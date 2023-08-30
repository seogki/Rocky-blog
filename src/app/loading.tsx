import { FaSpinner } from "@react-icons/all-files/fa/FaSpinner";
export default function Loading() {
  return (
    <div className="w-full h-full flex justify-center item-center text-2xl my-8">
      <FaSpinner />
    </div>
  );
}
