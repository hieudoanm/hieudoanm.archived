import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { FC } from "react";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Weather",
  description: "Simple Weather",
};

const RootLayout: FC<{ children: React.ReactNode }> = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body data-theme="light" className={`${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
