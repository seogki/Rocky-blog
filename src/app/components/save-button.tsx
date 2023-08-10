export default function SaveButton({
  children,
  className
}: {
  children: React.JSX.Element | string;
  className?: string;
}) {
  return (
    <button
      className={`w-32 p-2 rounded-md bg-emerald-400 dark:bg-emerald-700 ${className}`}
    >
      {children}
    </button>
  );
}
