import { ReduxProvider } from "@/redux/provider";
import type { Metadata } from "next";
import SideBar from "@/components/sidebar/SideBar";

import "./globals.css";
import "primeicons/primeicons.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <SideBar />
          <div className="ml-[60px] md:ml-[230px] ">{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
