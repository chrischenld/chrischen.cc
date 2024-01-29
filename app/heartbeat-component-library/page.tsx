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
      <p className="w-auto h-fit md:pt-0 md:fixed md:min-w-16 inset-y-8 md:left-8 lg:left-8 font-pantasia uppercase text-neutral-400">
        <Link href="/">chris chen</Link>
      </p>
      <div className="md:fixed hidden lg:block min-w-16 inset-y-32 lg:right-12 text-xs text-neutral-500">
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              href="#three-considerations"
              className={
                activeLink === "three-considerations" ? "text-neutral-300" : ""
              }
            >
              three considerations
            </Link>
          </li>
          <li>
            <Link
              href="#early-looks"
              className={activeLink === "early-looks" ? "text-neutral-300" : ""}
            >
              early looks
            </Link>
          </li>
          <li>
            <Link
              href="#creating-a-guided-experience"
              className={
                activeLink === "creating-a-guided-experience"
                  ? "text-neutral-300"
                  : ""
              }
            >
              creating a guided experience
            </Link>
          </li>
          <li>
            <Link
              href="#input-details"
              className={
                activeLink === "input-details" ? "text-neutral-300" : ""
              }
            >
              input details
            </Link>
          </li>
          <li>
            <Link
              href="#ranking-search-results"
              className={
                activeLink === "ranking-search-results"
                  ? "text-neutral-300"
                  : ""
              }
            >
              ranking search results
            </Link>
          </li>
          <li>
            <Link
              href="#whats-next"
              className={activeLink === "whats-next" ? "text-neutral-300" : ""}
            >
              what&apos;s next?
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-6 pt-4 md:pt-32 pb-16 md:max-w-lg lg:max-w-xl text-neutral-400 text-sm lowercase">
        <h1 className="text-neutral-100">rosetta tokens</h1>
        <p>i work on squarespace's design platform team.</p>
        <p>
          At Heartbeat, search had been our most requested feature - especially
          after communities began growing faster than we had expected. Admins
          were digging through more and more content and new members didn’t know
          where to start looking.
        </p>
        <h2 id="three-considerations">three considerations</h2>
        <p>
          First, we knew it had to appeal to both power and first-time users.
          This meant accommodating for cognitive differences in users (memory of
          shortcuts, familiarity, and user mental models) and preferred
          interaction method (heavier use of keyboard inputs by power users vs
          use of clickable UI elements).
        </p>
        <p>
          Next, we leaned heavily into search filtering. Search modifiers in
          some of our favorite products were felt incredible to use but
          sometimes had a steep learning curve. Our goal was to make the process
          of crafting a query powerful and efficient - but also easy to
          navigate.
        </p>
        <p>
          To complete the search experience, we needed to make results easily
          scan-able. As an all-in-one tool, we knew queries would surface a
          variety of entities including threads, DMs, events, docs, and people
          within communities - and users would need to quickly sort these with a
          limited view.
        </p>
        <h2 id="early-looks">early looks</h2>
        <p>
          We started by looking at modern search patterns, particularly ⌘K and
          ⌘/ menus. Early on, we experimented with having both: a ⌘K menu that
          specifically navigated between higher level entities in Heartbeat
          (navigating between channels, events, or docs) and then a separate ⌘/
          menu for finding things (threads, keywords, people).
        </p>
        <Image
          src={search01}
          alt="Two different UIs, one with a larger text input that is labeled 'Command K, Navigation between channels' and the other with a smaller text input labeled 'Command Slash, Navigation within channels'"
          priority={false}
        ></Image>
        <p>
          But having two separate menus became complicated for users who had to
          learn the limits of each menu. For non-shortcut key users, we risked
          even more confusion by potentially having two apparent “search” bars
          present on screen at the same time. Because of these drawbacks, we
          opted for a single universal search.
        </p>
        <Image
          src={search02}
          alt="The Heartbeat UI showing a condensed text input with suggestion prompts that read 'I'm looking for...' and options like 'Messages,' 'People,' and 'Channels'"
          priority={false}
        ></Image>
        <h2 id="creating-a-guided-experience">Creating a guided experience</h2>
        <p>
          To address the additional noise, we spent time refining search
          filters. While many apps list search filters in a separate advanced
          search mode, we wanted go a step further for our users.
        </p>
        <p>
          Our search provides guidance throughout the query crafting process.
          Entering each search filter reveals contextually relevant search
          filters.
        </p>
        <Image
          src={search03}
          alt="Search function shown in use; the initial search asks user what they're searching for, and as the user enters options like 'Messages' it asks for further filters like 'in: channel.' As the user selects this, it populates a list of channels to search within."
          priority={false}
        ></Image>
        <p>
          On the other hand, we wanted to make sure that this wasn’t a
          completely on-rails experience. Users were never forced to complete
          search filters. They could ignore suggestions at any stage in the
          process or abandon incomplete queries and still complete queries. None
          of our search filters were dependent on another, and could be entered
          in any order within the query. Users could also add multiple search
          filters of the same type - resulting in OR logic.
        </p>
        <p>
          Search filters could be added even after an initial query was made -
          especially useful if we returned an abundance of results. This would
          lead them back to the same guided search experience.
        </p>
        <Image
          src={search04}
          alt="Search function shown in use, but this time the user has an initial query already entered, then enters the search filters"
          priority={false}
        ></Image>
        <h2 id="input-details">Input details</h2>
        <p>
          Satisfying both power users and average users of Heartbeat meant
          refining the search experience for 3 different input modalities:
          mouse-first, keyboard-first, and mixed. We used search tags as a
          unifying component.
        </p>
        <p>
          For mouse users, we allowed users to click through the search modifier
          creation without ever needing to touch the keyboard. Search tags could
          be removed at any time.
        </p>
        <Image
          src={search05}
          alt="Screen capture shows a pointer icon selects interacts and selects filters without any search terms being entered in through the keyboard, demonstrating use of the search feature with only a mouse"
          priority={false}
        ></Image>
        <p>
          For keyboard users, we used colons to complete search filter terms and
          insert an inline search tag. We also allowed the use of arrow keys to
          cycle through search modifier suggestions, Tab for auto-completion,
          and the inclusion of shortcut key indicators.
        </p>
        <Image
          src={search06}
          alt="Screen capture shows a user using search using keystrokes, with their keystrokes appearing with each key press"
          priority={false}
        ></Image>
        <h2 id="ranking-search-results">Ranking search results</h2>
        <p>
          From the start, search weighting was an obvious technical challenge
          with all of the different entities within Heartbeat. Would we
          prioritize an event over a thread, given both returned the same
          keyword match? A DM from seven days ago, or a comment created seven
          minutes ago?
        </p>
        <p>
          Working with Mayhul, Heartbeat co-founder and engineer, made it easy.
          While designers enjoy the challenge of soloing problems like these,
          there's often missing technical context that complicates design-eng
          collaboration. Playing with the API early on and regularly chatting
          between iterations with Mayhul surfaced a majority of the design
          considerations we ultimately ran with.
        </p>
        <Image
          src={search07}
          alt="A screenshot from FigJam that shows the result priority of different types of entities; each entity is represented by a post-it, post-its are arranged in a horizontal line. An arrow above the line of post-its is labeled 'result priority'"
          priority={false}
        ></Image>
        <p>
          Our sorting was based largely on entities (e.g. weighting an event
          against a DM) but this wasn't enough on its own; time-sensitive items
          like upcoming events, threads, and DMs to be more visible. Older
          communities, for example, built up tons of past events that could
          dominate search results.
        </p>
        <p>
          Sorting on a combination of entity-based and time-sensitive factors
          meant upcoming events, threads in the last 7 days, or DMs within the
          last 2 weeks were relatively high. Other entities like documents
          created in the last 30 days (largely static content) were ranked much
          lower.
        </p>
        <p>
          The result was a search weighting system that returned more relevant,
          higher value results. Further improvements here are still to come -
          weighting based on relevancy to specific members and the popularity of
          content within a community.
        </p>
        <h2 id="whats-next">What's next?</h2>
        <p>
          Buildup of content is a problem that we recognize is bigger than just
          search. We’re interested in continuing to ship features that help
          discoverability of high value content within communities. But as for
          now, we’re really excited to see users finally search for content
          within their community - even as communities continue to grow.
        </p>
      </div>
      <footer className="pb-32">
        <p>
          <Link href="/">back to home</Link>
        </p>
      </footer>
    </main>
  );
}