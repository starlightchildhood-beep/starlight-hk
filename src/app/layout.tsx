import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Noto_Sans_HK } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const notoSansHK = Noto_Sans_HK({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-hk",
});

export const metadata: Metadata = {
  title: "香港星光童學會 | 總有一個舞台，適合你的孩子",
  description:
    "香港星光童學會是一個專注於香港兒童發展的平台，為孩子提供多元化的比賽機會，讓每個孩子都能找到屬於自己的舞台。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="dark">
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${notoSansHK.variable} font-noto antialiased bg-midnight text-moonlight min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
