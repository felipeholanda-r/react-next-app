import type { Metadata } from "next";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";

export const metadata: Metadata = {
  title: "Wpp Notify",
  description: "Notigficações por WhatsApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}
