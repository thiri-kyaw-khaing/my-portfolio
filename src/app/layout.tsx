import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thiri Kyaw Khaing — Web Developer, UI/UX Designer & Software Engineer",
  description:
    "Portfolio of Thiri Kyaw Khaing, a Software Engineering student specializing in Web Development (Next.js, React, TypeScript), UI/UX Design (Figma), and full-stack Software Engineering.",
  keywords: [
    "Thiri Kyaw Khaing",
    "Web Developer",
    "UI/UX Designer",
    "Software Engineer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  openGraph: {
    title: "Thiri Kyaw Khaing — Portfolio",
    description:
      "Web Developer, UI/UX Designer, and Software Engineer building digital experiences that are visually engaging and strategically designed.",
    type: "website",
  },
};

const themeScript = `
try {
  const stored = localStorage.getItem("theme");
  if (stored !== "light") {
    document.documentElement.classList.add("dark");
  }
} catch {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
