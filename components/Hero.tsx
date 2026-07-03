import Image from "next/image";
import { BRAND_SLOGAN } from "@/lib/brand";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full shadow-[0_16px_40px_-12px_rgba(0,0,0,0.18)]"
    >
      <div className="relative aspect-[4/3] w-full min-h-[360px] sm:aspect-[16/9] sm:min-h-[420px] lg:aspect-[21/9] lg:min-h-[480px]">
        <Image
          src="/banner.png"
          alt={`The Natural — ${BRAND_SLOGAN}`}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-black/10"
          aria-hidden
        />
      </div>

      <div className="bg-background px-6 py-10 sm:py-12">
        <div className="hero-text-panel mx-auto max-w-3xl px-6 py-8 text-center sm:px-10 sm:py-10">
          <div className="gold-line mx-auto mb-5" />
          <p className="section-label mb-4">Premium Organic Care</p>

          <h1 className="section-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
            The Power of <em>Nature</em>
            <br />
            for Stronger, Healthier You
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
            Salon-quality hair & body care crafted with pure botanical
            ingredients. No harsh chemicals — just nature&apos;s finest.
          </p>
        </div>
      </div>
    </section>
  );
}
