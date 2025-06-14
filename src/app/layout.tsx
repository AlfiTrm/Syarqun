import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Syarkun",
  description: "Pembelajaran Akuntansi Syariah",
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="scroll-smooth"
      >
        {children}
      </body>
    </html>
  );
}
