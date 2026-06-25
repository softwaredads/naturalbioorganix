"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { Product } from "@/data/products";
import { getOrderUrl } from "@/lib/contact";

type ProductModalProps = {
  product: Product;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div
        className="modal-panel relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-muted shadow-sm transition-colors hover:bg-brand-cream hover:text-foreground"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="relative aspect-[4/3] bg-brand-cream/60 sm:aspect-[16/10]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 672px"
            priority
          />
        </div>

        <div className="p-6 sm:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="badge">{product.size}</span>
            {product.badges.map((badge) => (
              <span key={badge} className="badge">
                {badge}
              </span>
            ))}
          </div>

          <h2
            id="product-modal-title"
            className="font-serif text-2xl font-bold text-foreground sm:text-3xl"
          >
            {product.name}
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">
            {product.description}
          </p>

          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold tracking-widest text-brand-gold uppercase">
              Key Benefits
            </p>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {product.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2.5 rounded-lg bg-brand-cream/50 px-3 py-2.5 text-sm text-foreground"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={getOrderUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex flex-1 items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium"
            >
              Order Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="btn-outline rounded-full px-6 py-3.5 text-sm font-medium sm:flex-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
