import Image from "next/image";
import type { Product } from "@/data/products";
import { categoryLabels } from "@/lib/contact";
import GlassCard from "./ui/GlassCard";

type ProductCardProps = {
  product: Product;
  onSelect: (product: Product) => void;
};

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      className="group w-full cursor-pointer text-left"
    >
      <GlassCard className="overflow-hidden p-0">
        <div className="relative overflow-hidden bg-brand-cream/40 p-4 pb-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="p-4">
          <p className="mb-1 text-xs font-medium tracking-wide text-brand-gold uppercase">
            {categoryLabels[product.category]}
          </p>
          <h3 className="font-serif text-base font-semibold leading-snug text-foreground">
            {product.name}
          </h3>
          <div className="mt-3 flex items-center justify-between">
            <span className="badge">{product.size}</span>
            <span className="text-xs font-medium text-brand-green opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              View details →
            </span>
          </div>
        </div>
      </GlassCard>
    </button>
  );
}
