type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function CardInner({ className = "", children }: Props) {
  return (
    <section
      className={`${className} bg-zinc-100 dark:bg-zinc-700 border-2 border-zinc-400 dark:border-zinc-600 rounded-lg p-4`}
    >
      {children}
    </section>
  );
}
