const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex w-full flex-1 flex-col overflow-hidden">
      {children}
    </main>
  );
};

export default OrganizationLayout;
