import type { Metadata } from "next";
// import { Alice, Montserrat } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// const aliceSans = Alice({
//   variable: "--font-alice-sans",
//   subsets: ["latin"],
//   weight: "400",
// });
// const montserratSans = Montserrat({
//   variable: "--font-montserrat-sans",
//   subsets: ["latin"],
//   weight: "700",
// });

export const metadata: Metadata = {
  title: "Maru",
  description:
    "Book your stay and enjoy Luxury redefined at the most affordable rates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
