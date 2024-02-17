import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { Skeleton } from "@/components/ui/skeleton";

export const BoardList = async () => {
  const { orgId } = auth();

  if (!orgId) {
    return redirect("/select-org");
  }

  const boards = await db.board.findMany({
    where: {
      orgId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="xs:grid-cols-2 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
      {boards.map((board) => (
        <Link
          key={board.id}
          href={`/board/${board.id}`}
          className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-colors hover:bg-muted/50"
        >
          {/* <Image
            src={board.imageThumbUrl}
            alt={"test"}
            layout="fill"
            objectFit="cover"
            className="aspect-square h-16 w-auto object-cover brightness-50 transition-all group-hover:scale-105"
          /> */}

          <div className="flex flex-col items-center space-y-1.5 p-12">
            <p className="font-semibold capitalize leading-tight tracking-tight">
              {board.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

BoardList.Skeleton = function SkeletonBoardList() {
  return (
    <div className="xs:grid-cols-2 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
    </div>
  );
};
