import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <p>
            The Toy Standard is an independent affiliate guide. Purchases made
            through our links may earn a commission that supports ongoing
            research and updates. Contact us at{" "}
            <a href="mailto:info@thetoystandard.com">info@thetoystandard.com</a>.
          </p>
          <div className="footer-links">
            <Link className="footer-trigger" href="/about">
              About
            </Link>
            <Link className="footer-trigger" href="/privacy">
              Privacy
            </Link>
            <Link className="footer-trigger" href="/terms">
              Terms
            </Link>
          </div>
        </div>
        <div className="footer-meta">
          © {new Date().getFullYear()} The Toy Standard. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
