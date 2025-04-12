import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Taiwo's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#12081f]`}
      >
        <Nav />
        {/* Main layout with sidebar and dynamic content */}
        <div className="flex h-screen overflow-hidden bg-[#12081f]">
          <Sidebar />

          {/* Page-specific content comes here */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
