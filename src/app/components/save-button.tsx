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
      className={`${className} w-32 p-2 rounded-md bg-blue-400 dark:bg-blue-700`}
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
}
