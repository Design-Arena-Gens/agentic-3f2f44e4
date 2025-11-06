import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "?? | Agentic App",
  description: "???? ??? Next.js ????? ?? ????? ????????? ??????",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
