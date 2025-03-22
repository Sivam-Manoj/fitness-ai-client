import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitness AI Chatbot - Your Personal Trainer",
  description:
    "Chat with Fitness AI to get personalized workout plans, nutrition tips, and fitness guidance. Powered by AI, designed for your health and wellness journey.",
  keywords: [
    "AI Fitness Chatbot",
    "Workout AI Assistant",
    "Nutrition AI",
    "Fitness AI",
    "Health Chatbot",
    "Workout Planner",
    "Gym AI Trainer",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
