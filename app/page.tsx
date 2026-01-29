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
    name: "LEGO Creator 3-in-1 Modular Build",
    brand: "LEGO",
    ageRange: "Ages 8+",
    verdict: "A long-play set that keeps attention without screens.",
    why: "Great build complexity with multiple rebuild options.",
    price: "Mid-range",
    link: "https://example.com/lego-creator",
    imageLabel: "Creator Set",
  },
  {
    name: "LEGO Classic Creative Bricks Box",
    brand: "LEGO",
    ageRange: "Ages 4+",
    verdict: "The best starter kit for open-ended building.",
    why: "Wide color range, reusable storage, endless ideas.",
    price: "Value pick",
    link: "https://example.com/lego-classic",
    imageLabel: "Classic Bricks",
  },
  {
    name: "Nerf Elite Blaster Kit",
    brand: "Nerf",
    ageRange: "Ages 8+",
    verdict: "Balanced range with safe foam design.",
    why: "Easy reloads and reliable performance outdoors.",
    price: "Mid-range",
    link: "https://example.com/nerf-elite",
    imageLabel: "Elite Blaster",
  },
  {
    name: "STEM Robotics Starter Kit",
    brand: "STEM",
    ageRange: "Ages 10+",
    verdict: "Builds confidence through real problem solving.",
    why: "Clear instructions with advanced extensions.",
    price: "Investment",
    link: "https://example.com/stem-robotics",
    imageLabel: "Robotics Kit",
  },
  {
    name: "Family Strategy Board Game",
    brand: "Family Play",
    ageRange: "Ages 7+",
    verdict: "A weekly game night classic with replay value.",
    why: "Short rounds, easy rules, real choices.",
    price: "Value pick",
    link: "https://example.com/board-game",
    imageLabel: "Board Game",
  },
  {
    name: "Outdoor Explorer Launch Kit",
    brand: "Outdoor",
    ageRange: "Ages 6+",
    verdict: "Safe outdoor motion that keeps kids moving.",
    why: "Durable build and simple setup.",
    price: "Mid-range",
    link: "https://example.com/outdoor-launch",
    imageLabel: "Explorer Kit",
  },
  {
    name: "Creative Art Studio Case",
    brand: "Creative",
    ageRange: "Ages 5+",
    verdict: "A calm, focused activity for quiet afternoons.",
    why: "Reusable supplies with easy storage.",
    price: "Value pick",
    link: "https://example.com/art-studio",
    imageLabel: "Art Studio",
  },
  {
    name: "Puzzle Challenge Pack",
    brand: "Puzzle",
    ageRange: "Ages 9+",
    verdict: "Rewarding difficulty without frustration.",
    why: "Multiple puzzles to build persistence.",
    price: "Value pick",
    link: "https://example.com/puzzle-pack",
    imageLabel: "Puzzle Pack",
  },
  {
    name: "STEM Circuit Lab",
    brand: "STEM",
    ageRange: "Ages 8+",
    verdict: "Hands-on learning that feels like play.",
    why: "Clear learning path with safe components.",
    price: "Mid-range",
    link: "https://example.com/stem-circuit",
    imageLabel: "Circuit Lab",
  },
  {
    name: "Nerf Quick-Load Side Blaster",
    brand: "Nerf",
    ageRange: "Ages 8+",
    verdict: "Great for small hands and first-time players.",
    why: "Lightweight with easy reload.",
    price: "Value pick",
    link: "https://example.com/nerf-side",
    imageLabel: "Side Blaster",
  },
  {
    name: "Outdoor Adventure Toss Set",
    brand: "Outdoor",
    ageRange: "Ages 5+",
    verdict: "A backyard classic that works for all ages.",
    why: "Soft materials with easy scoring.",
    price: "Value pick",
    link: "https://example.com/outdoor-toss",
    imageLabel: "Toss Set",
  },
  {
    name: "Building Set Storage Bin",
    brand: "LEGO",
    ageRange: "Ages 4+",
    verdict: "Keeps builds organized without losing pieces.",
    why: "Durable lid with multiple compartments.",
    price: "Value pick",
    link: "https://example.com/storage-bin",
    imageLabel: "Storage Bin",
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
