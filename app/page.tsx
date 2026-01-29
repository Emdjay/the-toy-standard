import SignupForm from "./components/SignupForm";

const categories = [
  {
    title: "Building Sets",
    description: "Durable builds that reward patience and creativity.",
    focus: "Structure + problem solving",
  },
  {
    title: "Blasters",
    description: "Active play picks with a focus on safety and range.",
    focus: "Movement + coordination",
  },
  {
    title: "STEM",
    description: "Hands-on kits that spark curiosity and real learning.",
    focus: "Curiosity + confidence",
  },
  {
    title: "Board & Puzzle",
    description: "Screen-free favorites for family play time.",
    focus: "Connection + strategy",
  },
  {
    title: "Outdoor",
    description: "Gear that turns backyards into adventure zones.",
    focus: "Energy + exploration",
  },
  {
    title: "Creative Kits",
    description: "Crafts and art that feel open-ended, not scripted.",
    focus: "Imagination + calm",
  },
];

const products = [
  {
    name: "NERF Disruptor Elite Blaster",
    brand: "NERF",
    ageRange: "Ages 8+",
    verdict: "A reliable starter blaster with easy handling.",
    why: "Simple drum reloads and consistent performance.",
    price: "Value pick",
    link: "https://www.amazon.com/dp/B01IK52REI/?tag=thetoystandar-20",
    imageLabel: "Disruptor",
  },
  {
    name: "Nerf N-Strike Elite Jolt Blaster",
    brand: "NERF",
    ageRange: "Ages 8+",
    verdict: "Pocket-sized backup that keeps play moving.",
    why: "Small, lightweight, and quick to reload.",
    price: "Value pick",
    link: "https://www.amazon.com/dp/B01HEQHXE8/?tag=thetoystandar-20",
    imageLabel: "Jolt",
  },
  {
    name: "Nerf Strongarm N-Strike Elite Blaster",
    brand: "NERF",
    ageRange: "Ages 8+",
    verdict: "Classic sidearm feel with a solid drum.",
    why: "Balanced size and easy slam-fire action.",
    price: "Mid-range",
    link: "https://www.amazon.com/dp/B07X2WJFT6/?tag=thetoystandar-20",
    imageLabel: "Strongarm",
  },
  {
    name: "Nerf N Series Ward Blaster",
    brand: "NERF",
    ageRange: "Ages 8+",
    verdict: "A fresh pick for the new N Series lineup.",
    why: "Compact shape with quick grab-and-go feel.",
    price: "Mid-range",
    link: "https://www.amazon.com/dp/B0CQ3VWG42/?tag=thetoystandar-20",
    imageLabel: "Ward",
  },
  {
    name: "Nerf Elite 2.0 Eaglepoint RD-8 Blaster",
    brand: "NERF",
    ageRange: "Ages 8+",
    verdict: "A longer-range feel with modular parts.",
    why: "Scope and barrel add custom play style.",
    price: "Mid-range",
    link: "https://www.amazon.com/dp/B09CBQM64N/?tag=thetoystandar-20",
    imageLabel: "Eaglepoint",
  },
  {
    name: "NERF Elite Lock Blaster",
    brand: "NERF",
    ageRange: "Ages 8+",
    verdict: "Compact, fast-action play for quick rounds.",
    why: "Lightweight build with easy reloads.",
    price: "Value pick",
    link: "https://www.amazon.com/dp/B0CP8NL23F/?tag=thetoystandar-20",
    imageLabel: "Elite Lock",
  },
  {
    name: "Nerf Rival Takedown XX-800 Blaster",
    brand: "NERF",
    ageRange: "Ages 14+",
    verdict: "High-energy pump action for older teens.",
    why: "Rival rounds add speed and impact.",
    price: "Mid-range",
    link: "https://www.amazon.com/dp/B07Z11C8YV/?tag=thetoystandar-20",
    imageLabel: "Takedown",
  },
  {
    name: "Nerf Rival Roundhouse XX-1500 Blaster",
    brand: "NERF",
    ageRange: "Ages 14+",
    verdict: "Big capacity for longer sessions.",
    why: "Rotating chamber keeps the pace up.",
    price: "Mid-range",
    link: "https://www.amazon.com/dp/B0812GHR5Z/?tag=thetoystandar-20",
    imageLabel: "Roundhouse",
  },
  {
    name: "Nerf Rival Charger MXX-1200 Blaster",
    brand: "NERF",
    ageRange: "Ages 14+",
    verdict: "Motorized option for rapid-fire play.",
    why: "Consistent firing with easy reload access.",
    price: "Investment",
    link: "https://www.amazon.com/dp/B07VXBGFJV/?tag=thetoystandar-20",
    imageLabel: "Charger",
  },
  {
    name: "Nerf Rival Curve Shot Flex XXI-100",
    brand: "NERF",
    ageRange: "Ages 14+",
    verdict: "Trick-shot fun with curve-fire control.",
    why: "Unique curves add challenge and skill.",
    price: "Mid-range",
    link: "https://www.amazon.com/dp/B08HSQVV3S/?tag=thetoystandar-20",
    imageLabel: "Curve Shot",
  },
  {
    name: "Nerf Ultra Select Motorized Blaster",
    brand: "NERF",
    ageRange: "Ages 8+",
    verdict: "Premium feel with higher-range darts.",
    why: "Switchable firing options for variety.",
    price: "Investment",
    link: "https://www.amazon.com/dp/B08P2S8NQT/?tag=thetoystandar-20",
    imageLabel: "Ultra Select",
  },
  {
    name: "Nerf Ultra Four Dart Blaster",
    brand: "NERF",
    ageRange: "Ages 8+",
    verdict: "Fast-load option with compact size.",
    why: "Simple, quick action for casual play.",
    price: "Mid-range",
    link: "https://www.amazon.com/dp/B07XLCSWLH/?tag=thetoystandar-20",
    imageLabel: "Ultra Four",
  },
];

const faqs = [
  {
    question: "How do you choose what makes the list?",
    answer:
      "We prioritize safety, durability, and repeat play value. Every pick should earn a spot in the rotation, not just the unboxing moment.",
  },
  {
    question: "Do you accept affiliate commissions?",
    answer:
      "Yes. If you buy through our links, we may earn a small commission at no extra cost to you. It helps fund testing and updates.",
  },
  {
    question: "Are these picks age-appropriate?",
    answer:
      "We list recommended age ranges and highlight safety considerations so parents can make informed choices.",
  },
  {
    question: "How often is the list updated?",
    answer:
      "We update seasonally and whenever new products meet our standards.",
  },
];

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Toy Standard",
    url: "https://www.thetoystandard.com",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <Logo />
          </div>
          <nav className="nav-links">
            <a href="#standards">How we choose</a>
            <a href="#categories">Categories</a>
            <a href="#picks">Top Picks</a>
            <a href="#faq">FAQ</a>
            <a href="#newsletter">Newsletter</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Teen-approved. Parent-trusted.</div>
              <h1>Smart toy picks that keep teens engaged and parents confident.</h1>
              <p>
                We focus on real play value, durability, and skill-building.
                No hype, just the picks that hold attention and hold up over time.
              </p>
              <div className="cta-row">
                <a className="button primary" href="#picks">
                  Browse the picks
                </a>
                <a className="button secondary" href="#newsletter">
                  Join the list
                </a>
              </div>
            </div>
            <div className="hero-card">
              <h3>What earns the standard</h3>
              <ul>
                <li>Safety-first materials and realistic age guidance</li>
                <li>Play value that lasts beyond the first week</li>
                <li>Clear reasons why each pick earned its spot</li>
                <li>Fast, parent-friendly summaries</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container section-title">
            <h2>Our promise to parents</h2>
            <p>
              The Toy Standard curates a short list of toys that balance real
              fun, safety, and longevity. Every recommendation is chosen to
              cut through the noise and keep teens engaged.
            </p>
          </div>
        </section>

        <section className="section" id="standards">
          <div className="container section-title">
            <h2>How we choose</h2>
            <p>
              Every pick must clear a safety and longevity checklist. We focus
              on materials, age fit, and real-world play value instead of trend
              cycles.
            </p>
          </div>
          <div className="container card-grid">
            <div className="card">
              <div className="label">Safety-first</div>
              <h3>Materials and build quality</h3>
              <p className="small">
                We prioritize non-toxic materials, secure parts, and sturdy
                construction that stands up to repeated use.
              </p>
            </div>
            <div className="card">
              <div className="label">Age fit</div>
              <h3>Clear, realistic age guidance</h3>
              <p className="small">
                We match complexity to real development stages, not optimistic
                marketing labels.
              </p>
            </div>
            <div className="card">
              <div className="label">Play value</div>
              <h3>Repeatable, open-ended play</h3>
              <p className="small">
                Toys must keep attention beyond the first week and offer more
                than a single scripted outcome.
              </p>
            </div>
            <div className="card">
              <div className="label">Practicality</div>
              <h3>Storage, noise, and cleanup</h3>
              <p className="small">
                We favor designs that parents can actually live with—easy
                storage and reasonable volume.
              </p>
            </div>
            <div className="card">
              <div className="label">Durability</div>
              <h3>Built to survive real play</h3>
              <p className="small">
                Strong joints, resilient finishes, and kid-proof components are
                required for every pick.
              </p>
            </div>
            <div className="card">
              <div className="label">Value</div>
              <h3>Worth the shelf space</h3>
              <p className="small">
                We balance price with longevity so families get lasting value,
                not disposable novelty.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="categories">
          <div className="container section-title">
            <h2>Categories teens actually stick with</h2>
            <p>
              These categories flex based on partner availability. Each group
              highlights toys that support a specific type of play.
            </p>
          </div>
          <div className="container card-grid">
            {categories.map((category) => (
              <div className="card" key={category.title}>
                <div className="label">Focus</div>
                <h3>{category.title}</h3>
                <p className="small">{category.description}</p>
                <p className="small">{category.focus}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="picks">
          <div className="container section-title">
            <div>
              <h2>Top teen-friendly picks</h2>
              <p>
                A tight list of toys that deliver real play value. Swap links
                as partners come online.
              </p>
            </div>
            <div className="small">Updated seasonally</div>
          </div>
          <div className="container disclosure">
            Disclosure: As an affiliate, we may earn a commission from qualifying
            purchases at no extra cost to you.
          </div>
          <div className="container product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.name}>
              <div className="seal">Teen-approved</div>
                <div className="product-image">{product.imageLabel}</div>
                <h3>{product.name}</h3>
                <div className="product-meta">
                  {product.brand} · {product.ageRange} · {product.price}
                </div>
                <p className="small">{product.verdict}</p>
                <p className="small">{product.why}</p>
                <a
                  className="button secondary"
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View latest price
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container section-title">
            <h2>FAQ</h2>
            <p>
              Transparency matters. Here is how we think about recommendations
              and affiliate links.
            </p>
          </div>
          <div className="container faq-grid">
            {faqs.map((faq) => (
              <div className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p className="small">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="newsletter">
          <div className="container newsletter">
            <div>
            <h2>Get the teen-approved shortlist</h2>
              <p className="small">
              New picks, safety notes, and gift guides. We only send when we
              have something genuinely useful.
              </p>
            </div>
            <SignupForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            The Toy Standard is an independent affiliate guide. Purchases made
            through our links may earn a commission that supports ongoing
            research and updates.
          </p>
        </div>
      </footer>
    </div>
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
