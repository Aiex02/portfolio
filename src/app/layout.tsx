import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Guilherme Medeiros Aiex",
  description: "Portfólio Aiex",
  icons: {
    icon: "/LOGO-AIEX.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
