import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/app/util/css";
import { FONT_PRETENDARD } from "@/app/fonts/font";
import React from "react";

export const metadata: Metadata = {
  title: "청첩장",
  description: "태형 희영 청첩장",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={cn(FONT_PRETENDARD.variable, "font-pretendard")}>
        {children}
      </body>
    </html>
  );
}
