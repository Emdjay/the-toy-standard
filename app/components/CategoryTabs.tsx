"use client";

import { useMemo, useState } from "react";

type ProductItem = {
  name: string;
  brand: string;
  ageRange: string;
  verdict: string;
  why: string;
  price: string;
  link: string;
  imageLabel: string;
  imageUrl?: string;
};

type Category = {
  key: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  items: ProductItem[];
};

type CategoryTabsProps = {
  categories: Category[];
};

export default function CategoryTabs({ categories }: CategoryTabsProps) {
  const initialKey = categories[0]?.key ?? "";
  const [activeKey, setActiveKey] = useState(initialKey);
  const activeCategory = useMemo(
    () => categories.find((category) => category.key === activeKey) ?? categories[0],
    [activeKey, categories],
  );

  return (
    <div className="category-tabs">
      <div className="tab-list" role="tablist" aria-label="Product categories">
        {categories.map((category) => {
          const isActive = category.key === activeKey;
          return (
            <button
              key={category.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`tab-panel-${category.key}`}
              id={`tab-${category.key}`}
              className="tab-button"
              data-active={isActive}
              onClick={() => setActiveKey(category.key)}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {activeCategory ? (
        <div
          className="tab-panel"
          role="tabpanel"
          id={`tab-panel-${activeCategory.key}`}
          aria-labelledby={`tab-${activeCategory.key}`}
        >
          <div className="tab-header">
            <div className="eyebrow">{activeCategory.eyebrow}</div>
            <h3>{activeCategory.title}</h3>
            <p>{activeCategory.description}</p>
          </div>
          <div className="product-grid">
            {activeCategory.items.map((product) => (
              <div className="product-card" key={product.name}>
                <div className="seal">Teen-approved</div>
                <div className="product-image">
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} loading="lazy" />
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
        </div>
      ) : null}
    </div>
  );
}
