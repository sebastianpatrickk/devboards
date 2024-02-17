"use client";

import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useAction } from "@/hooks/use-action";
import { stripeRedirect } from "@/actions/stripe-redirect";
import { toast } from "sonner";
import { Check } from "lucide-react";

export const ProModal = () => {
  const proModal = useProModal();

  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: (data) => {
      window.location.href = data;
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onClick = () => {
    execute({});
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className="max-w-sm overflow-hidden p-0">
        <div className="flex flex-col rounded-xl  text-card-foreground">
          <div className="flex flex-col space-y-1.5 p-6">
            <h1 className="line-clamp-1 font-semibold leading-tight tracking-tight">
              Upgrade to Devboards Pro Today!
            </h1>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              Explore the best of Devboards
            </p>
          </div>
          <div className="grid flex-1 place-items-start gap-6 p-6 pt-0">
            <div className="text-3xl font-bold">
              20
              <span className="text-sm font-normal text-muted-foreground">
                /month
              </span>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-3 w-3" />
                <span>Create unlimited boards</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-3 w-3" />
                <span>Unlimited team members</span>
              </div>
            </div>

            <div className="flex w-full items-center pb-4 pt-2">
              <Button
                className="flex-1"
                disabled={isLoading}
                onClick={onClick}
                variant="default"
              >
                Upgrade
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
