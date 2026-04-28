import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Provider } from "../components/ui/provider";

export const metadata: Metadata = {
	title: "Nail Nuri",
	description:
		"Nail Nuri is a frontend developer specializing in React, Next.js, and TypeScript. Passionate about building scalable, high-performance, and user-centric web applications.",
	icons: {
		icon: "/logoBlack.png",
	},
	keywords: [
		"frontend",
		"developer",
		"react",
		"nextjs",
		"typescript",
		"javascript",
		"css",
		"html",
		"web development",
		"portfolio",
		"nail nuri",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="az" suppressHydrationWarning>
			<body>
				<Provider>{children}</Provider>
				{/* Google Analytics */}
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-GN09649BE0"
					strategy="afterInteractive"
				/>
				<Script id="ga-script" strategy="afterInteractive">
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GN09649BE0');
          `}
				</Script>
			</body>
		</html>
	);
}
