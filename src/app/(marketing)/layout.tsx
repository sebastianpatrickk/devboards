import { Footer } from "../../components/layouts/footer";
import { PageHeader } from "../../components/layouts/page-header";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <PageHeader />
      <main className="flex h-full w-full flex-1 items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
