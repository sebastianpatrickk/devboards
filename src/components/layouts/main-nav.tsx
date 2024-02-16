"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Command } from "lucide-react";
import { NavItem } from "@/types";

export const MainNav = ({ navItemsData }: { navItemsData: NavItem[] }) => {
  const pathname = usePathname();

  return (
    <div className="hidden gap-6 lg:flex">
      <Link href="/">
        <div className="hidden items-center space-x-2 lg:flex">
          <Command className="h-6 w-6" />
          <p className="hidden text-sm font-bold lg:inline-block">Devboards</p>
        </div>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        {navItemsData.map((item) => (
          <Link
            className={cn(
              "transition-colors hover:text-foreground/80",
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
