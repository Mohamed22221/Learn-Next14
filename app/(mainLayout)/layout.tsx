
import { Links } from "@/components/links";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Next App',
    default: 'Next App', // a default is required when creating a template
  },
  description: 'file-system based router',
  applicationName : 'Learn Next 14',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
export default function RootLayout({
  children,
  modalview
}: Readonly<{
  children: React.ReactNode;
  modalview: React.ReactNode

}>) {
  return (
    <section>

        <Links />
        {children} 
        {modalview}

    </section>
  );
}
