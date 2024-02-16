import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ModalProvider } from "@/providers/modal-provider";
import { QueryProvider } from "@/providers/query-provider";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <QueryProvider>
        <ModalProvider />
        {children}
        <Toaster />
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
