"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";

export const TonProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TonConnectUIProvider manifestUrl="https://dth0gn02-3000.euw.devtunnels.ms/tonconnect-manifest.json">
      {children}
    </TonConnectUIProvider>
  );
};
