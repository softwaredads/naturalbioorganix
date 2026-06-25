"use client";

import { useState } from "react";
import { categories, products, type Product } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <section id="products" className="bg-brand-cream/60 px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="section-label mb-3">Our Collection</p>
            <h2 className="section-heading text-3xl font-bold sm:text-4xl md:text-5xl">
              Natural Products, <em>Real Results</em>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-brand-muted">
              Tap any product to explore full details and place an order.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-pill rounded-full px-5 py-2 text-sm font-medium ${activeCategory === cat.id ? "active" : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
