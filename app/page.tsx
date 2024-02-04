import Image from "next/image";
import Link from "next/link";
import home01 from "@/public/home01.png";
import home02 from "@/public/home02.png";
import home03 from "@/public/home03.png";
import home04 from "@/public/home04.png";

export default function Home() {
	return (
		<main className="flex flex-col md:flex-row min-h-screen">
			<div className="p-2 md:sticky md:top-0">
				<div className="flex flex-col px-4 gap-4 w-full md:min-w-60 md:w-60 md:min-h-full h-auto text-xs text-neutral-400">
					<h1 className="text-neutral-100 ">chris chen</h1>
					<p className="">
						currently designing at{" "}
						<a
							href="https://www.squarespace.com/"
							rel="noopener noreferrer"
							target="_blank"
							className="text-neutral-100 hover:underline"
						>
							squarespace↗
						</a>{" "}
						on the design platform team. interested in creative tools, systems,
						and creators.
					</p>
					<p>
						more about me: i&apos;ve been really into learning frontend.
						i&apos;m also into food (both cooking it & eating it) and learning
						about the cultures and intracices of regional cuisines. other
						interests include powerlifitng (lift heavy thing), games (especially
						the design of immersive worlds and environments), and keyboards
						(sorry).
					</p>
					<ul className="text-neutral-100">
						<li>
							<a
								href="https://read.cv/chrischen"
								rel="noopener noreferrer"
								target="_blank"
								className="text-neutral-100 hover:underline"
							>
								cv↗
							</a>{" "}
						</li>
						<li>
							<a
								href="https://www.instagram.com/_chenchris"
								rel="noopener noreferrer"
								target="_blank"
								className="text-neutral-100 hover:underline"
							>
								ig↗
							</a>{" "}
						</li>
					</ul>
					<p className="text-xxs text-neutral-600">
						please dont make me post linkedin here.
					</p>
					<ul className="text-neutral-500">
						<li>01.29.24</li>
						<li>chrischen.cc</li>
						<li>built with nextjs</li>
					</ul>
				</div>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 p-2 pt-4 md:pr-6 md:pb-12 gap-6 w-full h-fit max-h-screen md:overflow-scroll text-neutral-500 text-sm">
				<Link href="/rosetta-tokens">
					<div className="flex flex-col w-full h-144 hover:text-neutral-100">
						<div className="h-136 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-600 relative">
							<Image
								src={home01}
								alt="Two images showing the light and dark theme full color palettes for Squarespace's design system"
								className="object-contain"
								fill
								priority
							></Image>
						</div>
						<div className="flex h-8 justify-between items-end">
							<div className="flex gap-2">
								<p>SQSP color tokens</p>
								<p className="text-neutral-600">(case study)</p>
							</div>
							<p></p>
						</div>
					</div>
				</Link>
				<Link href="/rosetta">
					<div className="flex flex-col w-full h-144 hover:text-neutral-100">
						<div className="h-136 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-600 relative">
							<Image
								src={home02}
								alt="Image of Squarespace's text field component overlaid on a background that resembles a blueprint with grids"
								className="object-contain"
								fill
								priority
							></Image>
						</div>
						<div className="flex h-8 justify-between items-end">
							<p>SQSP design platform</p>
							<p></p>
						</div>
					</div>
				</Link>
				<Link href="/heartbeat-search">
					<div className="flex flex-col w-full h-144 hover:text-neutral-100">
						<div className="h-136 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-600 relative">
							<Image
								src={home03}
								alt="Hero image of the heartbeat.chat app search UI, with several elements enlarged for effect"
								className="object-contain"
								fill
								priority
							></Image>
						</div>
						<div className="flex h-8 justify-between items-end">
							<div className="flex gap-2">
								<p>heartbeat search</p>
								<p className="text-neutral-600">(case study)</p>
							</div>
							<p></p>
						</div>
					</div>
				</Link>
				<Link href="/heartbeat">
					<div className="flex flex-col w-full h-144 hover:text-neutral-100">
						<div className="h-136 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-600 relative">
							<Image
								src={home04}
								alt="Two product shots of the heartbeat.chat app user interface"
								className="object-contain"
								fill
								priority
							></Image>
						</div>
						<div className="flex h-8 justify-between items-end">
							<p>heartbeat</p>
							<p></p>
						</div>
					</div>
				</Link>
			</div>
		</main>
	);
}
