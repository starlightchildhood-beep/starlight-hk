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
  title: {
    default: "香港星光童學會 | 總有一個舞台，適合你的孩子",
    template: "%s | 香港星光童學會",
  },
  description:
    "香港星光童學會是一個專注於香港兒童發展的平台，為孩子提供多元化的比賽機會。涵蓋藝術、音樂、STEM、朗誦等多元比賽類別，讓每個孩子都能找到屬於自己的舞台。",
  keywords: [
    "香港兒童比賽",
    "兒童填色比賽",
    "鋼琴比賽",
    "STEM比賽",
    "朗誦比賽",
    "全港兒童比賽",
    "香港小朋友",
    "興趣班比賽",
    "獎狀",
    "獎牌",
    "獎杯",
  ],
  authors: [{ name: "香港星光童學會" }],
  creator: "香港星光童學會",
  publisher: "香港星光童學會",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_HK",
    url: "https://starlight-hk.pages.dev",
    siteName: "香港星光童學會",
    title: "香港星光童學會 | 總有一個舞台，適合你的孩子",
    description:
      "香港星光童學會是一個專注於香港兒童發展的平台，為孩子提供多元化的比賽機會。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "香港星光童學會",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "香港星光童學會 | 總有一個舞台，適合你的孩子",
    description:
      "香港星光童學會是一個專注於香港兒童發展的平台，為孩子提供多元化的比賽機會。",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://starlight-hk.pages.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${notoSansHK.variable} font-noto antialiased bg-moonlight text-midnight min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
