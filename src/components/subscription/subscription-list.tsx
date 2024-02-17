import { SubscriptionCard } from "./subscription-card";

export const SubscriptionList = ({ isPro }: { isPro: boolean }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <SubscriptionCard
        title="Basic"
        description="Perfect for small developer teams."
        price={0}
        features={["Create up to 3 boards", "Unlimited team members"]}
        isPro={isPro}
        cardType="basic"
      />
      <SubscriptionCard
        title="Pro"
        description="Perfect for larger developer teams."
        price={20}
        features={["Create unlimited boards", "Unlimited team members"]}
        isPro={isPro}
        cardType="pro"
      />
    </div>
  );
};
