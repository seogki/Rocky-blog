type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function Skeleton({ children, className = "" }: Props) {
  return (
    <div
      className={`${className} animate-pulse bg-zinc-300 dark:bg-zinc-700 rounded-lg`}
    >
      {children}
    </div>
  );
}
