export const Prose: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="max-w-none prose-neutral prose-h1:mt-24 prose-h1:text-neutral-300 prose-p:text-neutral-500 prose-h2:mt-16 prose-md prose-h2:opacity-90 prose prose-a:text-pink-600 dark:prose-invert">
      {children}
    </div>
  );
};
