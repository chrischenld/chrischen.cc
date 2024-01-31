"use client";

import Image from "next/image";
import Link from "next/link";
import search01 from "@/public/search01.webp";
import search02 from "@/public/search02.webp";
import search03 from "@/public/search03.gif";
import search04 from "@/public/search04.gif";
import search05 from "@/public/search05.gif";
import search06 from "@/public/search06.gif";
import search07 from "@/public/search07.webp";
import { useEffect, useState, useRef } from "react";

function useHighlighted() {
	const observer = useRef<IntersectionObserver | null>();
	const [activeId, setActiveId] = useState<string>("");

	useEffect(() => {
		const handleObserver = (sections: IntersectionObserverEntry[]) => {
			sections.forEach((section) => {
				if (section.isIntersecting) {
					setActiveId(section.target.id);
				}
			});
		};

		observer.current = new IntersectionObserver(handleObserver, {
			rootMargin: "0% 0% -45% 0px",
		});

		const headings = document.querySelectorAll("h2, h3, h4");
		headings.forEach((heading) => {
			if (observer.current) {
				observer.current.observe(heading);
			}
		});

		return () => {
			if (observer.current) {
				observer.current.disconnect();
			}
		};
	}, []);

	return activeId;
}

export default function Home() {
	const activeLink = useHighlighted();

	return (
		<main className="flex flex-col px-2 pt-4 md:p-0 gap-4 min-h-screen items-center">
			<p className="w-full h-fit md:fixed md:min-w-16 inset-y-8 md:left-8 uppercase text-neutral-400">
				<Link href="/">chris chen</Link>
			</p>
			<div className="md:fixed hidden lg:block min-w-16 inset-y-32 lg:right-12 text-xs text-neutral-600">
				<ul className="flex flex-col gap-1">
					<li>
						<Link
							href="#background"
							className={activeLink === "background" ? "text-neutral-300" : ""}
						>
							background
						</Link>
					</li>
					<li>
						<Link
							href="#research"
							className={activeLink === "research" ? "text-neutral-300" : ""}
						>
							research
						</Link>
					</li>
					<li>
						<Link
							href="#creating-the-colors"
							className={
								activeLink === "creating-the-colors" ? "text-neutral-300" : ""
							}
						>
							creating the colors
						</Link>
					</li>
					<li>
						<Link
							href="#testing-and-validation"
							className={
								activeLink === "testing-and-validation"
									? "text-neutral-300"
									: ""
							}
						>
							testing and validation
						</Link>
					</li>
					<li>
						<Link
							href="#final-design-and-impact"
							className={
								activeLink === "final-design-and-impact"
									? "text-neutral-300"
									: ""
							}
						>
							final design and impact
						</Link>
					</li>
					<li>
						<Link
							href="#retrospective"
							className={
								activeLink === "retrospective" ? "text-neutral-300" : ""
							}
						>
							retrospective
						</Link>
					</li>
				</ul>
			</div>
			<div className="flex flex-col gap-6 pt-4 md:pt-32 pb-16 md:max-w-lg lg:max-w-xl text-neutral-400 text-sm lowercase">
				<h1 className="text-neutral-100">Rosetta Color Tokens</h1>
				<p>
					Squarespace has grown from being just a website builder to being a
					platform to sell anything.
				</p>
				<p>
					Our design system, Rosetta, had color tokens that weren&apos;t
					supporting designer needs and emerging patterns.
				</p>
				<p>
					I led the design of the new and current color token system for
					Rosetta, SQSP&apos;s design system.
				</p>
				<p>
					My engineering partner Faustine Pollet worked closely with me and
					handled implementation. Teammates on Design Platform provided critical
					feedback to shipping this project, including my design manager John
					Meguerian and staff designer John Voss.
				</p>
				<h2 id="background">Background</h2>
				<p>
					Historically, when SQSP just built websites, the design language
					leaned on a monochromatic palette and dull colors. This shifted focus
					away from the the app chrome and onto user websites and content.
				</p>
				<p>
					However, new features and patterns in the product like Fluid Engine
					(drag and drop editor) and onto interface heavy features like
					payments, campaigns, and invoicing required &quot;bright&quot; colors
					that stand out from user generated content.
				</p>
				<p>
					Product partners requested &quot;bright&quot; colors but risked
					disrupting the existing color system. This resulted in one-offs color
					assignments, which degraded the utility of Rosetta.
				</p>
				<p>
					As we started to investigate the problem, we started to think about
					better design futures and raising the bar, beyond just changing color
					values.
				</p>
				<h2 id="research">Research</h2>
				<p>
					First, we audited different design systems - in particular, we were
					interested in how teams handled semantic naming for clear
					communication and ease of use for designers and engineers. From this,
					we learned schemas that primarily grouped around the type of UI
					element that would have color applied to it.
				</p>
				<p>
					Next, we researched human perception of colors and perceptually
					uniform color spaces to systemically compose our color ramps. We
					learned that using LCH (and OKLCH) was probably the best color space
					for our needs. In these adjusting hue across colors had less perceived
					brightness variations.
				</p>
				<p>
					Finally, we examined our designers and engineers&apos; workflows and
					how they used colors. We did a lit review of old dusty files from past
					design system teammates. We knew we had to meet designers where they
					were in order to reduce confusion with the new color rollouts as we
					were directly affecting their workflows.
				</p>
				<h2 id="creating-the-colors">Creating the colors</h2>
				<p>
					When creating colors, contrast targets were our foundation and primary
					constraints for creating colors. We complied with our a11y team and
					WCAG&apos;s specs.
				</p>
				<p>
					We started with grays. We knew we had some locked-in colors because of
					their prominent roles in the product as the primary brand color. From
					there, we could start to fill in the ramp.
				</p>
				<p>
					Steps on the ramp were based on both contrast against our lightest
					background, but also relative contrast against other steps on the
					ramp. This coincided with the designation of certain stops designated
					for certain types of UI elements.
				</p>
				<p>
					Color ramps were handled slightly differently. With fewer constraints,
					we could increase the apparent &quot;brightness&quot; of our colors to
					meet designer needs. Again, we start with critical UI roles (text,
					backgrounds, borders) and use the same stops to fill UI element and
					color contrast needs.
				</p>
				<p>
					We also added more colors beyond the main semantic colors for data
					visualization (charts in analytics) or differentiation (different
					colored Chips). This helped build for the future, giving us more
					colors knowing there were always possibilities for novel color uses.
				</p>
				<p>
					Even in the old color system, we supported a dark theme, though it has
					few uses in product. We lowered the Lightness of colors, as they led
					to halation and visual fatigue. But we still maintained our highest
					levels of accessibility.
				</p>
				<p>
					Next was rigorously testing these colors against existing and future
					designs to ensure colors met every need. Prototyping helped me
					maintain sanity and move forward, as colors which didn&apos;t have as
					much of a definitive &quot;correct&quot; design solution.
				</p>
				<p>
					We explored different naming schemas to find one that best sorted and
					implied their intended use. We knew these tokens would be critical if
					we wanted to prioritize maintaibility, future-proofing, and quick
					adoption. This included prototyping Figma styles to best fit within
					designer workflow. (Unfortunately we released our new colors about a
					month before the variable feature release in Figma, which we later got
					back and adopted.)
				</p>
				<h2 id="testing-and-validation">Testing and validation</h2>
				<p>
					As part of the rollout, we updated our documentation on colors and
					usage guidelines. We then tested our system with a Beta flag for
					engineers and designers. We asked consumers to reviewthe updated
					documentation, use the colors in their explorations or new projects,
					and gave them a few weeks to test out the system.
				</p>
				<p>
					At the end of the Beta, we asked consumers to fill out a form that
					asked:
				</p>
				<ol className="flex flex-col list-decimal gap-2">
					<li>how the system performed vs the previous system</li>
					<li>how clear the documentation and usage guidelines were</li>
					<li>how the styles were organized in their tools of choice</li>
					<li>
						how much this new system would meet the needs of upcoming and future
						designs
					</li>
				</ol>
				<p>
					We got feedback that clean up usage guidance on certain system
					messaging components and the where to use the new expanded colors.
				</p>
				<h2 id="#final-design-and-impact">Final design and impact</h2>
				<p>
					We ultimately ended up shipping this project in early 2023 as a major
					version bump for all of our consumers.
				</p>
				<p>
					Rollout wasn&apos;t perfect; we continued to monitor responses from
					consumers around documentation and usage. We often got support
					questions around the usage of color and discrepancies on existing
					components in certain product areas.
				</p>
				<p>
					These color tokens are now across use in SQSP from teams that span
					from the Editor, Commerce (selling tools and pages), Invoicing,
					Emails, Marketing, and even into Acuity (an acquisition which is not a
					direct design system consumer.)
				</p>
				<p>
					We received positive feedback from designers and enigneers alike,
					supporting more expressive and features and design patterns as SQSP
					continues to grow in depth and complexity of its offerings.
				</p>
				<h2 id="#retrospective">Retrospective</h2>
				<p>
					Rollout wasn&apos;t perfect; we continued to monitor responses from
					consumers around documentation and usage. We often got support
					questions around the usage of color and discrepancies on existing
					components in certain product areas.
				</p>
				<Image
					src={search07}
					alt="A screenshot from FigJam that shows the result priority of different types of entities; each entity is represented by a post-it, post-its are arranged in a horizontal line. An arrow above the line of post-its is labeled 'result priority'"
					priority={false}
				></Image>
			</div>
			<footer className="pb-32 w-full md:max-w-lg lg:max-w-xl ">
				<p>
					<Link href="/" className="w-full hover:underline">
						← back
					</Link>
				</p>
			</footer>
		</main>
	);
}
