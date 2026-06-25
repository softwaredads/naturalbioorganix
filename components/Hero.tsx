import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background px-6 pt-24 pb-12 lg:pt-28 lg:pb-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="gold-line mb-6" />
          <p className="section-label mb-4">Premium Organic Care</p>

          <h1 className="section-heading text-4xl font-bold sm:text-5xl lg:text-6xl">
            The Power of <em>Nature</em>
            <br />
            for Stronger, Healthier You
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-brand-muted lg:text-lg">
            Salon-quality hair & body care crafted with pure botanical
            ingredients. No harsh chemicals — just nature&apos;s finest.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#products"
              className="btn-primary rounded-full px-8 py-3.5 text-sm font-medium"
            >
              Explore Products
            </Link>
            <Link
              href="#about"
              className="btn-outline rounded-full px-8 py-3.5 text-sm font-medium"
            >
              Our Story
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 border-t border-brand-cream pt-6">
            {[
              { value: "100%", label: "Natural" },
              { value: "0", label: "Harsh Chemicals" },
              { value: "6+", label: "Premium Products" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl font-bold text-brand-green">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-brand-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-brand-cream" />
          <div className="card relative overflow-hidden rounded-2xl p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl sm:aspect-square lg:aspect-[4/5]">
              <Image
                src="/products/hair-growth-oil.jpeg"
                alt="Ayurvedic Jadibuti Hair Growth Oil"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-brand-green px-5 py-3 text-white shadow-lg">
            <p className="text-xs font-medium tracking-wide uppercase opacity-80">
              Best Seller
            </p>
            <p className="font-serif text-sm font-semibold">
              Hair Growth Oil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
