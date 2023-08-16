export default function MyFooter({ className }: { className?: string }) {
  return (
    <>
      <footer
        className={`${className} h-32 w-full px-6 pt-2 border-t-2 border-gray-200 dark:border-gray-600`}
      >
        <div className="wrapper max-w-screen-xl"></div>
      </footer>
    </>
  );
}
