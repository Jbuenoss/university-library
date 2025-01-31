import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ['latin'] });
// const smooch_Sans = Smooch_Sans({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: "EquipamentWise",
  description: "EquipamentEWise is a modern and efficient equipment lending system designed to simplify the management of borrowed devices, tools, and resources. Whether for universities, research labs, coworking spaces, or businesses, our platform ensures smooth and transparent tracking of equipment loans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
