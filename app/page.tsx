import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col md:flex-row min-h-screen">
			<div className="p-2 sticky top-0">
				<div className="flex flex-col p-4 gap-4 w-full md:min-w-60 md:w-60 md:min-h-full h-auto text-xs text-neutral-400">
					<h1 className="text-neutral-100">chris chen</h1>
					<p className="">
						currently designing at{" "}
						<a
							href="https://www.squarespace.com/"
							rel="noopener noreferrer"
							target="_blank"
							className="text-neutral-100"
						>
							squarespace↗
						</a>{" "}
						on the design platform team. interested in: creative tools, systems,
						and creators.
					</p>
					<p>
						Officia esse irure nulla dolor excepteur qui irure adipisicing
						commodo non voluptate incididunt aute deserunt. Do fugiat sit sunt
						sint reprehenderit minim incididunt exercitation irure. Duis
						excepteur consectetur elit. Ea in eu ut do do non pariatur magna
						elit ex.
					</p>
					<ul className="text-neutral-100">
						<li>
							<a
								href="https://read.cv/chrischen"
								rel="noopener noreferrer"
								target="_blank"
								className="text-neutral-100"
							>
								resume↗
							</a>{" "}
						</li>
						<li>
							<a
								href="https://www.instagram.com/_chenchris"
								rel="noopener noreferrer"
								target="_blank"
								className="text-neutral-100"
							>
								ig↗
							</a>{" "}
						</li>
						{/* <li>twitter↗</li> */}
					</ul>
					<ul>
						<li>01.25.24</li>
						<li>chrischen.cc</li>
					</ul>
				</div>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 p-2 gap-2 w-full h-fit max-h-screen md:overflow-scroll text-neutral-400 text-sm uppercase font-pantasia">
				<Link href="/rosetta-tokens">
					<div className="bg-blue-900 w-full h-144">rosetta tokens</div>
				</Link>
				<div className="w-full h-144">rosetta</div>
				<Link href="/heartbeat-search">
					<div className="w-full h-144">heartbeat search</div>
				</Link>
				<div className="w-full h-144">heartbeat</div>
				<div className="w-full h-144"></div>
			</div>
		</main>
	);
}
