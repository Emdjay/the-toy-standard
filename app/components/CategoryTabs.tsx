"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import type { Category } from "../data/categories";

type CategoryTabsProps = {
  categories: Category[];
};

export default function CategoryTabs({ categories }: CategoryTabsProps) {
  const initialKey = categories[0]?.key ?? "";
  const [activeKey, setActiveKey] = useState(initialKey);
  const [isStuck, setIsStuck] = useState(false);
  const tabBarRef = useRef<HTMLDivElement | null>(null);
  const activeCategory = useMemo(
    () => categories.find((category) => category.key === activeKey) ?? categories[0],
    [activeKey, categories],
  );

  useEffect(() => {
    let ticking = false;

    const getStickyOffset = () => {
      const value = getComputedStyle(document.documentElement)
        .getPropertyValue("--sticky-offset")
        .trim();
      const parsed = Number.parseFloat(value);
      return Number.isNaN(parsed) ? 90 : parsed;
    };

    const update = () => {
      ticking = false;
      if (!tabBarRef.current) {
        return;
      }
      const offset = getStickyOffset();
      const rect = tabBarRef.current.getBoundingClientRect();
      setIsStuck(rect.top <= offset + 1);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="category-tabs">
      <div
        ref={tabBarRef}
        className={`tab-bar${isStuck ? " is-stuck" : ""}`}
        aria-label="Product categories"
      >
        <div className="tab-list" role="tablist">
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
            <div className="tab-header-title">
              <h3>{activeCategory.title}</h3>
            </div>
            <p>{activeCategory.description}</p>
          </div>
          <div className="product-grid">
            {activeCategory.items.map((product) => (
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
        </div>
      ) : null}
    </div>
  );
}
