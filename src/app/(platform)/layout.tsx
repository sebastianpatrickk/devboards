"use client";

import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ModalProvider } from "@/providers/modal-provider";
import { QueryProvider } from "@/providers/query-provider";
import { useTheme } from "next-themes";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <ClerkProvider
      appearance={{ baseTheme: theme === "dark" ? dark : undefined }}
    >
      <QueryProvider>
        <ModalProvider />
        {children}
        <Toaster />
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
