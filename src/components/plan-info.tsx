import { Rocket } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getAvailableCount, hasAvailableCount } from "@/lib/org-limit";
import { MAX_FREE_BOARDS } from "@/constants/boards";
import Link from "next/link";

type PlanInfoProps = { isPro: boolean };

export const PlanInfo = async ({ isPro }: PlanInfoProps) => {
  const { orgId } = auth();

  if (!orgId) {
    return redirect("/select-org");
  }

  const availableCount = await getAvailableCount();

  return (
    <Alert>
      <AlertTitle className="text-lg font-medium">
        {isPro ? "You are on the Pro plan" : "Heads up!"}
      </AlertTitle>
      <AlertDescription>
        {isPro
          ? "You are currently using the Pro plan. Enjoy unlimited boards!"
          : `You are currently using ${availableCount} out of your ${MAX_FREE_BOARDS} available boards on basic plan. Want more boards? Consider upgrading to the Pro plan.`}
      </AlertDescription>
    </Alert>
  );
};
