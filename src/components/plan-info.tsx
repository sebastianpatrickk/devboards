import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getAvailableCount, hasAvailableCount } from "@/lib/org-limit";
import { checkSubscription } from "@/lib/subscription";
import { MAX_FREE_BOARDS } from "@/constants/boards";

export const PlanInfo = async () => {
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

  const availableCount = await getAvailableCount();
  const isPro = await checkSubscription();

  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You are currently using {availableCount} out of your {MAX_FREE_BOARDS}{" "}
        available boards on the{" "}
        <span className="font-semibold">{isPro ? "Pro" : "Basic"}</span> plan.
        Want more boards? Consider upgrading for unlimited boards!
      </AlertDescription>
    </Alert>
  );
};
