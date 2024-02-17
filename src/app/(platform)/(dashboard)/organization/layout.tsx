import { Sidebar } from "../_components/sidebar";

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">

    //   <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-65px)] w-full shrink-0 overflow-y-auto border-r  border-border/40 md:sticky md:block"></aside>
    // </div>
    <main className="flex w-full flex-col overflow-hidden">{children}</main>
  );
};

export default OrganizationLayout;
