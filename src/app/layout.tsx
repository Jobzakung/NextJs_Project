import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rabies And Leptospirosis",
  description: "Website for learning about rabies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
