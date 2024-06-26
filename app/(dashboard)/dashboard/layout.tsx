
import { Links } from "@/app/components/links";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  notifications,
  users,
}: Readonly<{
  children: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Links />
        {children} 
        {users}
        {notifications}
      </body>
    </html>
  );
}
