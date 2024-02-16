import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MainNav } from "./main-nav";
import { ModeToggle } from "./mode-toggle";
import { MobileNav } from "./mobile-nav";

export const PageHeader = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <MobileNav />
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button size="sm" variant="outline" asChild>
              <Link href="/sign-in">Login</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/sign-up">Get Taskify for free</Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </div>
  );
};
