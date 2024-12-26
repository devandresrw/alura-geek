import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Alura Geek",
  description: "Challengue Oracle Next Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
