import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouTube Shorts Transcript SEO Optimizer",
  description: "Extract YouTube Shorts transcripts, optimize for search keywords, and get AI-powered title & description suggestions for better discoverability."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f906bd2e-5137-4620-9802-ff7adb46561c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
