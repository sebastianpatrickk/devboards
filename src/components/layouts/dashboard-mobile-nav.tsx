"use client";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Command } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const DashboardMobileNav = ({
  navItemsData,
}: {
  navItemsData: NavItem[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
          variant="ghost"
        >
          <Command />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            {/* <MobileLink href="/" setIsOpen={setIsOpen} active={true}>
              <div className="flex items-center space-x-2">
                <Command className="h-5 w-5" />
                <p className="inline-block text-sm font-bold">Devboards</p>
              </div>
            </MobileLink> */}
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
          </SheetTitle>
        </SheetHeader>
        <nav className="flex w-full flex-col gap-4 pt-6 text-sm">
          {navItemsData.map((item) => (
            <MobileLink
              key={item.href}
              href={item.href}
              active={pathname === item.href}
              setIsOpen={setIsOpen}
            >
              {item.label}
            </MobileLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

interface MobileLinkProps extends React.PropsWithChildren {
  href: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  active?: boolean;
}

function MobileLink({ children, href, setIsOpen, active }: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-foreground/80",
        active ? "text-foreground" : "text-foreground/60",
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
}
