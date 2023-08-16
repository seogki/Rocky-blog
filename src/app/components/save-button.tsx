export default function SaveButton({
  children,
  className,
  onClick
}: {
  children: React.JSX.Element | string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`${className} w-32 p-2 rounded-md bg-gray-600 text-white`}
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
}
