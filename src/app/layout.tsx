import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.scss";

const nohemi = localFont({
	src: [
		{ path: "./fonts/nohemi/Nohemi-Regular.woff", weight: "400", style: "normal" },
		{ path: "./fonts/nohemi/Nohemi-Light.woff", weight: "300", style: "normal" },
		{ path: "./fonts/nohemi/Nohemi-ExtraLight.woff", weight: "200", style: "normal" },
	],
});

export const metadata: Metadata = {
	title: "Jauris Olivo | Portfolio",
	description: "This is my portfolio.",
	keywords: "jauris olivo, developer, portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" id="html">
			<body className={nohemi.className}>{children}</body>
		</html>
	);
}
