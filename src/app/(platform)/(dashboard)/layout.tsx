import { DashboardHeader } from "@/components/layouts/dashboard-header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      {children}
    </div>
  );
};

export default DashboardLayout;
