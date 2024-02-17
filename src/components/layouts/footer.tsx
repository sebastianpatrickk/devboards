import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full border-t border-border">
      <div className="container flex h-16 items-center justify-between space-x-4 text-xs">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <Link
            className="text-medium underline underline-offset-2"
            href="https://github.com/sebastianpatrickk"
            target="_blank"
          >
            Sebastian Patrick Klen
          </Link>{" "}
          the source code is available on{" "}
          <Link
            className="text-medium underline underline-offset-2"
            href=""
            target="_blank"
          >
            GitHub
          </Link>
        </p>

        <ModeToggle />
      </div>
    </div>
  );
};
