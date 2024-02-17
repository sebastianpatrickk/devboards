import { Suspense } from "react";
import { BoardList } from "@/components/lists/board-list";
import { Info } from "@/components/info";
import { checkSubscription } from "@/lib/subscription";
import { PlanInfo } from "@/components/plan-info";

const OrganizationIdPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="container grid max-w-6xl items-center gap-8 pb-8 pt-6 md:py-8">
      <Info isPro={isPro} />
      <PlanInfo />

      <Suspense fallback={<BoardList.Skeleton />}>
        <BoardList />
      </Suspense>
    </div>
  );
};

export default OrganizationIdPage;
