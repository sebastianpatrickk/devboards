import { startCase } from "lodash";
import { OrgControl } from "./_components/org-control";
import { auth } from "@clerk/nextjs";

export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "Organization"),
    description: "Organization",
    slug: "/organization/:organizationId",
  };
}
const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrgControl />
      <div className="grid items-center gap-8 pb-8 pt-6 md:py-8">
        {children}
      </div>
    </>
  );
};

export default OrganizationIdLayout;
