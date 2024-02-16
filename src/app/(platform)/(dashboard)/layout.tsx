import { Navbar } from "./_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Navbar /> */}
      {children}
    </div>
  );
};

export default DashboardLayout;
