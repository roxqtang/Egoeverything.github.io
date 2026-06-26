import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EgoEverything | ECCV 2026 Benchmark",
  description:
    "Official homepage for EgoEverything, a benchmark for human behavior-inspired long-context egocentric video understanding in AR."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
