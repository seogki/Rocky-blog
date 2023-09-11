type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ className = "", children }: Props) {
  return (
    <div className={`${className} rounded-lg dark:bg-zinc-800 bg-zinc-100`}>
      {children}
    </div>
  );
}
