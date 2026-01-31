import type { Metadata } from "next";
import Link from "next/link";

import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for The Toy Standard.",
  alternates: {
    canonical: "https://www.thetoystandard.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="page">
      <SiteHeader />
      <main>
        <section className="section compact">
          <div className="container section-title">
            <div>
              <h1>Privacy Policy</h1>
              <p>
                We collect only the data needed to run the site and improve
                recommendations. We do not sell personal data.
              </p>
            </div>
            <div className="category-meta">
              <div className="small">Last updated: Seasonally</div>
              <Link className="button secondary" href="/#newsletter">
                Join the list
              </Link>
            </div>
          </div>
          <div className="container content-stack">
            <p>
              If you subscribe to the newsletter, we store your email to deliver
              updates and product recommendations. You can unsubscribe anytime.
            </p>
            <p>
              We use standard analytics to understand site usage and improve
              content. These tools may set cookies or similar technologies.
            </p>
            <p>
              For questions or data requests, contact{" "}
              <a href="mailto:info@thetoystandard.com">info@thetoystandard.com</a>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
