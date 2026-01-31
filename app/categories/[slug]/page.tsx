import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { categories, productCategories } from "../../data/categories";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return productCategories.map((category) => ({ slug: category.key }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = productCategories.find((item) => item.key === params.slug);
  if (!category) {
    return {
      title: "Category not found",
    };
  }

  const summary = categories.find((item) => item.key === category.key);
  const title = `${category.label} picks for teens`;
  const description = summary
    ? `${summary.description} See teen-approved ${category.label.toLowerCase()} picks with links and quick reasons.`
    : category.description;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.thetoystandard.com/categories/${category.key}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.thetoystandard.com/categories/${category.key}`,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = productCategories.find((item) => item.key === params.slug);
  if (!category) {
    notFound();
  }

  const summary = categories.find((item) => item.key === category.key);

  return (
    <div className="page">
      <SiteHeader />
      <main>
        <section className="section compact category-page-hero">
          <div className="container section-title">
            <div>
              <div className="eyebrow">{category.eyebrow}</div>
              <h1>{category.title}</h1>
              <p>{summary?.description ?? category.description}</p>
            </div>
            <div className="category-meta">
              <div className="small">Updated seasonally</div>
              <Link className="button secondary" href="/#picks">
                Back to all picks
              </Link>
            </div>
          </div>
          <div className="container disclosure">
            Disclosure: As an affiliate, we may earn a commission from qualifying
            purchases at no extra cost to you.
          </div>
        </section>

        <section className="section">
          <div className="container product-grid">
            {category.items.map((product) => (
              <div className="product-card" key={product.name}>
                <div className="seal">Teen-approved</div>
                <div className="product-image">
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={480}
                      height={360}
                      unoptimized
                      sizes="(max-width: 720px) 90vw, (max-width: 1100px) 45vw, 320px"
                      style={{ objectFit: "contain" }}
                    />
                  ) : (
                    <span>{product.imageLabel}</span>
                  )}
                </div>
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
      </main>
      <SiteFooter />
    </div>
  );
}
