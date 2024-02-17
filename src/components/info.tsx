"use client";

import Image from "next/image";
import { CreditCard } from "lucide-react";
import { useOrganization } from "@clerk/nextjs";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "./ui/button";
import { CreateBoardDialog } from "./dialogs/create-board-dialog";

interface InfoProps {
  isPro: boolean;
}

export const Info = ({ isPro }: InfoProps) => {
  const { isLoaded } = useOrganization();

  if (!isLoaded) {
    return <Info.Skeleton />;
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex space-x-4">
        <h1 className="flex-1 text-2xl font-bold tracking-tighter md:text-3xl lg:leading-[1.1]">
          Boards
        </h1>
        <CreateBoardDialog>
          <Button size="sm">Create Board</Button>
        </CreateBoardDialog>
      </div>
      <div className="flex items-center text-xs text-muted-foreground">
        <p className="max-w-[750px] text-balance text-sm text-muted-foreground sm:text-base">
          Manage your boards and create new ones.
        </p>
      </div>
    </div>
  );
};

Info.Skeleton = function SkeletonInfo() {
  return (
    <div className="container flex flex-col gap-2 px-0">
      <div className="flex space-x-4">
        <Skeleton className="h-10 w-[200px] " />
        <div className="flex-1" />
        <Skeleton className="h-10 w-24" />
      </div>
      <div className="flex items-center text-xs text-muted-foreground">
        <Skeleton className="h-6 w-72" />
      </div>
    </div>
  );
};
