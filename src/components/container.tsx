export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans bg-react-gray flex flex-col items-center justify-items-center p-8 gap-16 sm:p-10 rounded-3xl  m-20">
      {children}
    </div>
  );
}
