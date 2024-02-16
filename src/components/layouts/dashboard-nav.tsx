"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Command } from "lucide-react";
import { DashboardNavItem } from "@/types";
import { OrganizationSwitcher, useClerk } from "@clerk/nextjs";
import { Skeleton } from "../ui/skeleton";

export const DashboardNav = ({
  navItemsData,
}: {
  navItemsData: DashboardNavItem[];
}) => {
  const pathname = usePathname();
  const { loaded } = useClerk();

  return (
    <div className="hidden gap-6 lg:flex">
      <div className="hidden items-center space-x-4 lg:flex">
        {/* <Link href="/">
          <Command className="h-6 w-6" />
        </Link> */}
        {loaded && (
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/select-org"
            afterSelectOrganizationUrl="/organization/:id"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
        )}
        {!loaded && <Skeleton className="h-[35px] w-[146px] rounded-md" />}
      </div>
      <nav className="flex items-center gap-6 text-sm">
        {navItemsData.map((item) => (
          <Link
            className={cn(
              "flex items-center gap-1 transition-colors hover:text-foreground/80",
              pathname === item.href ? "text-foreground" : "text-foreground/60",
            )}
            key={item.href}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
