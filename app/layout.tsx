import "./globals.css";
import { Inter } from "next/font/google";
import "@fontsource/roboto/100-italic.css";
import "@fontsource/roboto/300-italic.css";
import "@fontsource/roboto/400-italic.css";
import "@fontsource/roboto/500-italic.css";
import "@fontsource/roboto/700-italic.css";
import "@fontsource/roboto/900-italic.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
