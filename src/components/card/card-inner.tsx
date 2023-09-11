type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function CardInner({ className = "", children }: Props) {
  return (
    <section
      className={`${className} bg-zinc-200 dark:bg-zinc-700 rounded-lg drop-shadow-lg dark:drop-shadow-none p-4 border-2`}
    >
      {children}
    </section>
  );
}
