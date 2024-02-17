import { checkSubscription } from "@/lib/subscription";
import { Separator } from "@/components/ui/separator";

import { PlanInfo } from "@/components/plan-info";
import { Info } from "@/components/info";
import { SubscriptionButton } from "@/components/subscription/subscription-button";
import { SubscriptionList } from "@/components/subscription/subscription-list";
import { PageInfo } from "@/components/page-info";

const BillingPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="container grid max-w-6xl items-center gap-8 pb-8 pt-6 md:py-8">
      <PageInfo
        title="Billing"
        description="Manage your billing and subscription"
      />
      <PlanInfo isPro={isPro} />
      <SubscriptionList isPro={isPro} />
    </div>
  );
};

export default BillingPage;
