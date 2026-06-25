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

export default function WhyNatural() {
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <GlassCard key={feature.title} className="p-6">
              <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-green/10 font-serif text-sm font-bold text-brand-green">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-muted">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
