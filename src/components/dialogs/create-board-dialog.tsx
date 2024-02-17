"use client";

import { useProModal } from "@/hooks/use-pro-modal";
import { FormPicker } from "../form/form-picker";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useRouter } from "next/navigation";
import { ElementRef, useRef, useState } from "react";
import { useAction } from "@/hooks/use-action";
import { toast } from "sonner";
import { createBoard } from "@/actions/create-board";
import { FormInput } from "../form/form-input";
import { FormSubmit } from "../form/form-submit";

export const CreateBoardDialog = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const proModal = useProModal();
  const router = useRouter();
  const closeRef = useRef<ElementRef<"button">>(null);

  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      toast.success("Board created!");
      closeRef.current?.click();
      setIsOpen(false);
      router.push(`/board/${data.id}`);
    },
    onError: (error) => {
      toast.error(error);

      setIsOpen(false);
      proModal.onOpen();
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const image = formData.get("image") as string;

    execute({ title, image });
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create board</DialogTitle>
        </DialogHeader>

        <form action={onSubmit} className="space-y-4">
          <FormPicker id="image" errors={fieldErrors} />
          <FormInput
            id="title"
            label="Board title"
            type="text"
            errors={fieldErrors}
          />
          <FormSubmit className="w-full">Create Board</FormSubmit>
        </form>
      </DialogContent>
    </Dialog>
  );
};
