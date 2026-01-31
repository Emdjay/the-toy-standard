import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <Logo />
        </div>
        <nav className="nav-links">
          <a href="/#standards">How we choose</a>
          <a href="/#categories">Categories</a>
          <a href="/#picks">Top Picks</a>
          <a href="/#faq">FAQ</a>
          <a href="/#newsletter">Newsletter</a>
        </nav>
        <Link className="nav-cta" href="/#picks">
          Browse picks
        </Link>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img
        className="logo-mark"
        src="/the_toystandard_logo.png"
        alt="The Toy Standard logo"
      />
      <div className="logo-type">
        <span>The Toy Standard</span>
        <em>Parent-First Picks</em>
      </div>
    </div>
  );
}
