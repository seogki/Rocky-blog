import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex justify-center mt-8 flex-col">
        <h2 className="text-center py-1 my-2">Something is Wrong...</h2>
        <h3 className="text-center py-1 my-2 underline">
          <Link href="/">Back to Home</Link>
        </h3>
      </div>
    </>
  );
}
