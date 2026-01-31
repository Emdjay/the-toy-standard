import Link from "next/link";

import SignupForm from "./components/SignupForm";
import CategoryTabs from "./components/CategoryTabs";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import StickyShadow from "./components/StickyShadow";
import { categories, productCategories } from "./data/categories";

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
      <StickyShadow />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SiteHeader />

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

        <section className="section compact" id="standards">
          <div className="container section-title">
            <h2>How we choose</h2>
            <p>
              The Toy Standard curates a short list of toys that balance real
              fun, safety, and longevity. Every pick must clear a safety and
              durability checklist, with real-world play value over trends.
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

        <section className="section compact" id="categories">
          <div className="container section-title">
            <h2>Categories teens actually stick with</h2>
            <p>
              These categories flex based on partner availability. Each group
              highlights toys that support a specific type of play.
            </p>
          </div>
          <div className="container card-grid">
            {categories.map((category) => (
              <Link className="card" href={`/categories/${category.key}`} key={category.title}>
                <div className="label">Focus</div>
                <h3>{category.title}</h3>
                <p className="small">{category.description}</p>
                <p className="small">{category.focus}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="section" id="picks">
          <div className="container section-title">
            <div>
              <h2>Category picks for teens</h2>
              <p>
                Switch categories to see nine curated picks in each lane. Links
                are affiliate links (Amazon or brand partners).
              </p>
            </div>
            <div className="small">Updated seasonally</div>
          </div>
          <div className="container disclosure">
            Disclosure: As an affiliate, we may earn a commission from qualifying
            purchases at no extra cost to you.
          </div>
          <div className="container">
            <CategoryTabs categories={productCategories} />
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

      <SiteFooter />
    </div>
  );
}
