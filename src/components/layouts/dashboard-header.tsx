"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { PlusIcon } from "@radix-ui/react-icons";
import { Layout, Plus } from "lucide-react";
import { DashboardNav } from "./dashboard-nav";
import { UserButton, auth, useAuth, useClerk } from "@clerk/nextjs";
import { Skeleton } from "../ui/skeleton";
import { DashboardMobileNav } from "./dashboard-mobile-nav";

export const DashboardHeader = () => {
  const { orgId } = useAuth();
  const { loaded } = useClerk();

  const navItemsData = [
    {
      label: "Boards",
      href: `/organization/${orgId}`,
    },
    {
      label: "Activity",
      href: `/organization/${orgId}/activity`,
    },
    {
      label: "Settings",
      href: `/organization/${orgId}/settings`,
    },
    {
      label: "Billing",
      href: `/organization/${orgId}/billing`,
    },
  ];
  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <DashboardMobileNav navItemsData={navItemsData} />
        <DashboardNav navItemsData={navItemsData} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button size="icon" variant="outline">
              <PlusIcon className="h-4 w-4" />
            </Button>
            {loaded && <UserButton />}
            {!loaded && <Skeleton className="h-8 w-8 rounded-full" />}
          </nav>
        </div>
      </div>
    </div>
  );
};
