import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Janis Care",
  description: "Janis Care is a platform for managing your health and wellness.",
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FloatingNav
          navItems={[
            { name: "Home", link: "/" },
            { name: "About Us", link: "/about-us" },
            { name: "Products", link: "/products" },
            { name: "Contact Us", link: "/contact-us" },
          ]}
          className="mt-4"
        />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
