import type { Metadata, Viewport } from "next";
import "./globals.css";

import { NEWLYWEDS_TITLE } from "@/components/libs/constants/others.const";

const metaDesc: string = "Menjadi sebuah kebahagiaan bagi kami untuk mengumumkan awal dari babak baru kehidupan kami bersama. Silakan klik tautan situs Undangan Website di bawah untuk informasi lebih lanjut";

const metaTitle: string = `${NEWLYWEDS_TITLE} - The Wedding Of Invitation`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,

  generator: 'dinanti generator',
  applicationName: metaTitle,
  referrer: 'origin-when-cross-origin',
  keywords: ['dinanti', 'Dinanti', 'Digital Invitation', 'invitation', 'dinanti.id', 'undangan digital', 'pernikahan', 'undangan pernikahan', 'khitan', 'undangan khitanan'],
  authors: [{ name: 'dinanti author' }, { name: 'Saepudin'}, { name: 'Arnoud' }, { name: 'Danes' }, { name: 'Asa' }],
  creator: 'Dinanti Creator',
  publisher: 'Dinanti Publisher',
  category: 'digital invitation'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'light dark',
  viewportFit: 'auto',
  interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="scroll-smooth antialiased"
      >
        {children}
      </body>
    </html>
  );
}
