import { ReduxProvider } from "@/redux/provider";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import "primeicons/primeicons.css";
import { useEffect } from "react";
import { checkAuthState } from "@/libs/api/authApi";
import { useAppDispatch } from "@/hooks";
import { logUserOut } from "@/redux/slices/authSlice";

export const metadata: Metadata = {
  title: "Wceipt",
  description: "This is a receipt app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async function () {
      const user = checkAuthState();
      if (!user) {
        dispatch(logUserOut());
      }
    })();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body>
        <ReduxProvider>{children}</ReduxProvider>
        <Toaster />
      </body>
    </html>
  );
}
