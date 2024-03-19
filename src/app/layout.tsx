import { ReduxProvider } from "@/redux/provider";
import { PrimeReactProvider } from "primereact/api";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import "./style.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

export const metadata: Metadata = {
  title: "Wceipt",
  description: "This is a receipt app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ReduxProvider>
          <PrimeReactProvider>{children}</PrimeReactProvider>
        </ReduxProvider>
        <Toaster />
      </body>
    </html>
  );
}
