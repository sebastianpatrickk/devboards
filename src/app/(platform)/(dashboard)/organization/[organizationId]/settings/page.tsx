import { OrganizationProfile } from "@clerk/nextjs";

const SettingsPage = () => {
  return (
    <div className="h-full w-full flex-1 ">
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: "none",
              width: "100%",
            },
            card: {
              border: "1px solid #e5e5e5",
              boxShadow: "none",
              width: "100%",
            },
          },
        }}
      />
    </div>
  );
};

export default SettingsPage;
