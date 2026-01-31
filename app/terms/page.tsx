import type { Metadata } from "next";
import Link from "next/link";

import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for The Toy Standard.",
  alternates: {
    canonical: "https://www.thetoystandard.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="page">
      <SiteHeader />
      <main>
        <section className="section compact">
          <div className="container section-title">
            <div>
              <h1>Terms of Use</h1>
              <p>
                Content is for informational purposes only. Product details and
                pricing may change without notice.
              </p>
            </div>
            <div className="category-meta">
              <div className="small">Affiliate disclosure</div>
              <Link className="button secondary" href="/#picks">
                View picks
              </Link>
            </div>
          </div>
          <div className="container content-stack">
            <p>
              The Toy Standard provides editorial recommendations based on
              research and review criteria. We may earn commissions from
              qualifying purchases through affiliate links.
            </p>
            <p>
              We strive for accuracy, but availability and pricing are subject
              to change. Please verify details with the retailer before
              purchasing.
            </p>
            <p>
              For questions, contact{" "}
              <a href="mailto:info@thetoystandard.com">info@thetoystandard.com</a>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
