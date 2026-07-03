"use client";

import { useCallback, useRef, useState } from "react";
import GlassCard from "./ui/GlassCard";

const features = [
  {
    title: "100% Natural Ingredients",
    description:
      "Pure botanical extracts, herbs, and oils — nothing artificial, ever.",
  },
  {
    title: "Chemical Free",
    description:
      "Free from parabens, sulphates, ammonia, and phosphates.",
  },
  {
    title: "Cruelty Free",
    description:
      "Never tested on animals. Ethically made with compassion.",
  },
  {
    title: "Professional Care",
    description:
      "Salon-quality results with the gentleness of nature.",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  return (
    <GlassCard className="h-full p-6">
      <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-green/10 font-serif text-sm font-bold text-brand-green">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed text-brand-muted">
        {feature.description}
      </p>
    </GlassCard>
  );
}

export default function WhyNatural() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideWidth = slider.offsetWidth * 0.85 + 16;
    const index = Math.round(slider.scrollLeft / slideWidth);
    setActiveIndex(Math.min(Math.max(index, 0), features.length - 1));
  }, []);

  const goToSlide = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slide = slider.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setActiveIndex(index);
  };

  return (
    <section id="about" className="bg-background px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-xl">
          <p className="section-label mb-3">Why Choose Us</p>
          <h2 className="section-heading text-3xl font-bold sm:text-4xl md:text-5xl">
            The Natural <em>Difference</em>
          </h2>
          <p className="mt-4 text-brand-muted">
            We believe premium care shouldn&apos;t come at the cost of your
            health or the planet.
          </p>
        </div>

        {/* Mobile slider */}
        <div className="sm:hidden">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="feature-slider -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2"
          >
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="w-[85vw] max-w-sm shrink-0 snap-center"
              >
                <FeatureCard feature={feature} index={i} />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {features.map((feature, i) => (
              <button
                key={feature.title}
                type="button"
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "w-6 bg-brand-green"
                    : "w-2 bg-brand-cream"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
