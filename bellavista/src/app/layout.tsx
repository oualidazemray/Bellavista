import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const seasons = localFont({
  src: "./fonts/theseasons.otf",
  variable: "--font-seasons",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bellavista Resort",
  description: "Where Your Vacation Story Begins",
  icons: {
    icon: "/bellavistaIcon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${seasons.variable} font-seasons bg-black text-primary`}
      >
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "rgba(0, 0, 0, 0.8)",
              color: "#F59E0B",
              borderColor: "#F59E0B",
              borderWidth: "1px",
            },
          }}
        />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
