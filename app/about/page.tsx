import type { Metadata } from "next";
import Link from "next/link";

import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "About The Toy Standard — parent-first, teen-approved toy recommendations.",
  alternates: {
    canonical: "https://www.thetoystandard.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="page">
      <SiteHeader />
      <main>
        <section className="section compact">
          <div className="container section-title">
            <div>
              <h1>About The Toy Standard</h1>
              <p>
                The Toy Standard is a parent-first, teen-friendly guide to toys
                that hold attention, build skills, and last longer than the hype.
              </p>
            </div>
            <div className="category-meta">
              <div className="small">Independent affiliate guide</div>
              <Link className="button secondary" href="/#picks">
                Browse picks
              </Link>
            </div>
          </div>
          <div className="container content-stack">
            <p>
              We curate tight lists of toys that balance real play value, safety,
              and durability. Every pick earns its spot by proving it can stay in
              rotation, not just look good on unboxing day.
            </p>
            <p>
              Our focus is ages 9–18, where attention is harder to win and
              quality matters. We prioritize clear age guidance, practical
              considerations, and transparent affiliate disclosure.
            </p>
            <p>
              Questions? Reach us at{" "}
              <a href="mailto:info@thetoystandard.com">info@thetoystandard.com</a>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
