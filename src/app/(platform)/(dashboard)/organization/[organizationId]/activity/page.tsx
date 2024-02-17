import { Suspense } from "react";

import { checkSubscription } from "@/lib/subscription";
import { Info } from "@/components/info";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { DataTable } from "@/components/activity/data-table";
import { columns } from "@/components/activity/columns";
import { generateLogMessage } from "@/lib/generate-log-message";

const ActivityPage = async () => {
  const isPro = await checkSubscription();

  const { orgId } = auth();

  if (!orgId) {
    redirect("/select-org");
  }

  const data = await db.auditLog.findMany({
    where: {
      orgId,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
  });

  const auditLogs = data.map((log) => {
    return {
      userName: log.userName,
      message: generateLogMessage(log),
      createdAt: log.createdAt,
    };
  });

  return (
    <div className="container grid max-w-6xl items-center gap-8 pb-8 pt-6 md:py-8">
      <Info isPro={isPro} />
      <DataTable columns={columns} data={auditLogs} />
    </div>
  );
};

export default ActivityPage;
