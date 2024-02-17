import { Check } from "lucide-react";
import { SubscriptionButton } from "./subscription-button";
import { Button } from "../ui/button";

type SubscriptionCardProps = {
  title: string;
  description: string;
  price: number;
  features: string[];
  isPro: boolean;
  cardType: "basic" | "pro";
};

export const SubscriptionCard = ({
  title,
  description,
  price,
  features,
  isPro,
  cardType,
}: SubscriptionCardProps) => {
  return (
    <div className="flex flex-col rounded-xl border bg-card text-card-foreground shadow">
      <div className="flex flex-col space-y-1.5 p-6">
        <h1 className="line-clamp-1 font-semibold leading-tight tracking-tight">
          {title}
        </h1>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="grid flex-1 place-items-start gap-6 p-6 pt-0">
        <div className="text-3xl font-bold">
          {price === 0 ? "Free" : `$${price}`}
          {price !== 0 && (
            <span className="text-sm font-normal text-muted-foreground">
              /month
            </span>
          )}
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="h-3 w-3" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex w-full items-center pb-6 pt-4">
          {cardType === "pro" && <SubscriptionButton isPro={isPro} />}
          {cardType === "basic" && !isPro && (
            <SubscriptionButton isPro={true} buttonText="Manage subscription" />
          )}
          {cardType === "basic" && isPro && (
            <SubscriptionButton isPro={true} buttonText="Downgrade plan" />
          )}
        </div>
      </div>
    </div>
  );
};
