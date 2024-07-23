export default function offer({ children }: { children: React.ReactNode })  {
  return (
    <div className="pb-2 border-b">
      Offers area
      {children}
    </div>
  );
};
