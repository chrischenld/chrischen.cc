// "use client";

import Image from "next/image";
import Link from "next/link";
import home01 from "@/public/home01.png";
import { useEffect, useState, useRef } from "react";
import PasswordPromptDialog from "../components/PasswordPromptDialog";
import { cookies } from "next/headers";

export default function Home() {
	const cookiesStore = cookies();
	const loginCookies = cookiesStore.get(process.env.PASSWORD_COOKIE_NAME!);
	const isLoggedIn = !!loginCookies?.value;

	if (!isLoggedIn) {
		return <PasswordPromptDialog />;
	} else
		return (
			<main className="flex flex-col md:p-0 gap-4 min-h-screen items-center">
				<p className="p-2 md:p-0 md:fixed md:left-6 md:top-0.75 text-neutral-600 hover:text-neutral-400 name">
					<Link href="/">chris chen</Link>
				</p>

				<div className="flex flex-col gap-6 pt-4 md:pt-32 md:max-w-lg lg:max-w-xl xl:max-w-2xl items-center text-neutral-400 text-sm lowercase">
					<Image
						src={home01}
						alt="Two images showing the light and dark theme full color palettes for Squarespace's design system"
						priority={false}
						className="xl:max-w-4xl my-6"
					></Image>
					<h1 className="text-neutral-100">Squarespace Color Tokens</h1>
					<p>
						Squarespace has grown from being just a website builder into a
						platform to sell anything. But the existing colors from our design
						system, Rosetta, weren&apos;t supporting new patterns and features.
					</p>
					<p>
						I led the design of the new and current color token system for
						Rosetta, SQSP&apos;s design system.
					</p>
					<p>
						My engineering partner Faustine Pollet worked on implementation.
						Teammates on Design Platform provided critical feedback to shipping
						this project, including my design manager John Meguerian and staff
						designer John Voss.
					</p>
				</div>
				<footer className="pb-56 w-full md:max-w-lg lg:max-w-xl xl:max-w-2xl ">
					<p>
						<Link href="/" className="w-full hover:underline">
							← back
						</Link>
					</p>
				</footer>
			</main>
		);
}
