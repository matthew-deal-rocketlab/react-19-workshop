import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "font-sans bg-react-gray flex flex-col items-center justify-items-center p-8 gap-16 sm:p-10 rounded-3xl m-20",
        className
      )}
    >
      {children}
    </div>
  );
}
