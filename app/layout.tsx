import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ardium — Dubai Mall | The World's Most Visited Destination",
  description: "A world-class interactive sales platform for Dubai Mall. Retail leasing, brand partnerships, and event bookings at the world's most visited destination.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
