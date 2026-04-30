import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Provider } from "../components/ui/provider";

export const metadata: Metadata = {
	metadataBase: new URL("https://nurinail.me"),

	title: {
		default: "Nail Nuri | Frontend Developer",
		template: "%s | Nail Nuri",
	},

	description:
		"Frontend developer specializing in React, Next.js, and TypeScript. Building fast, scalable, and user-focused web apps.",

	keywords: [
		"Nail Nuri",
		"Frontend Developer",
		"React Developer",
		"Next.js Developer",
		"TypeScript",
		"Portfolio",
		"nurinail",
	],

	alternates: {
		canonical: "https://nurinail.me",
	},

	openGraph: {
		title: "Nail Nuri | Frontend Developer",
		description:
			"React & Next.js developer portfolio with modern, scalable web apps.",
		url: "https://nurinail.me",
		siteName: "Nail Nuri",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
			},
		],
		locale: "en_US",
		type: "website",
	},

	twitter: {
		card: "summary_large_image",
		title: "Nail Nuri | Frontend Developer",
		description: "React & Next.js developer portfolio with modern web apps.",
		images: ["/og-image.png"],
	},

	icons: {
		icon: "/logoBlack.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
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
				<Script
					id="ld-json"
					type="application/ld+json"
					strategy="afterInteractive"
				>
					{`
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nail Nuri",
  "url": "https://nurinail.me",
  "image": "https://nurinail.me/og-image.png",
  "jobTitle": "Frontend Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
 "sameAs": [
  "https://github.com/nurinail",
  "https://www.linkedin.com/in/nailnuri/"
]
}
`}
				</Script>
			</body>
		</html>
	);
}
