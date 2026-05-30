import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Archivo } from "next/font/google";



export const metadata: Metadata = {
  title: 'Dino\'s Barber & Stylist | Premium Haircuts & Shaves in Silver Spring',
  description: 'Experience superior grooming at Dino\'s Barber & Stylist. Offering precision haircuts, expert beard trims, classic shaves, and a welcoming atmosphere in Silver Spring, MD.',
  keywords: ["barbershop, barber, haircut, beard trim, shave, men's grooming, stylist, Silver Spring, MD, Dino's"],
  openGraph: {
    "title": "Dino's Barber & Stylist | Premium Grooming",
    "description": "Experience superior grooming at Dino's Barber & Stylist in Silver Spring, MD.",
    "url": "https://www.dinosbarberstylist.com",
    "siteName": "Dino's Barber & Stylist",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/woman-with-hair-dryer-client-salon_23-2147737037.jpg",
        "alt": "Interior of Dino's Barber & Stylist"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Dino's Barber & Stylist | Premium Grooming",
    "description": "Experience superior grooming at Dino's Barber & Stylist in Silver Spring, MD.",
    "images": [
      "http://img.b2bpic.net/free-photo/woman-with-hair-dryer-client-salon_23-2147737037.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${archivo.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
