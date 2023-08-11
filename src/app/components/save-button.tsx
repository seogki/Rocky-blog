export default function SaveButton({
  children,
  className
}: {
  children: React.JSX.Element | string;
  className?: string;
}) {
  return (
    <button
      className={`${className} w-32 p-2 rounded-md bg-blue-400 dark:bg-blue-700`}
    >
      {children}
    </button>
  );
}
