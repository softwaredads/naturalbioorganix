import Link from "next/link";

export default function CTABanner() {
  return (
    <section id="contact" className="px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl bg-brand-green px-8 py-10 text-center sm:px-12 sm:py-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, #C9A962 0%, transparent 50%)",
            }}
            aria-hidden
          />

          <div className="relative z-10">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
              Get Started
            </p>
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
              Experience Pure, Natural Care
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Ready to transform your hair and skin? Browse our collection or
              reach out to place an order.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#products"
                className="btn-light rounded-full px-8 py-3.5 text-sm font-medium"
              >
                Browse Products
              </Link>
              <Link
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                Contact on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
