export default function Home() {
  const list = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <div className="w-full gap-2 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        {list.map((item, i) => (
          <div key={i} className="card shadow border-2 rounded h-56">
            <div className="bg-gray-500 text-white h-32 flex justify-center items-center">
              {item}
            </div>
            <div className="text-lg pl-2">titles</div>
            <div className="text-base pl-2">description</div>
          </div>
        ))}
      </div>
    </>
  );
}
