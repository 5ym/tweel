import type { Metadata } from "next";
import { BIZ_UDPGothic, BIZ_UDPMincho } from "next/font/google";
import "./globals.css";
export const metadata: Metadata = {
  title: "Tweel",
  description: "Tool for Twitter",
};
const gothic = BIZ_UDPGothic({
  weight: ["400", "700"],
  subsets: ["cyrillic"],
  variable: '--font-gothic',
});
const mincho = BIZ_UDPMincho({
  weight: ["400", "700"],
  subsets: ["cyrillic"],
  variable: '--font-mincho',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${gothic.variable} ${mincho.variable} dark:bg-gray-900`}>
      <body>{children}</body>
    </html>
  );
}
