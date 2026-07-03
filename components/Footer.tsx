import Image from "next/image";
import { ADDRESS } from "@/lib/contact";
import { BRAND_SLOGAN } from "@/lib/brand";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-brand-cream bg-background px-6 py-6">
      <Image
        src="/natural-logo.png"
        alt="The Natural"
        width={140}
        height={56}
        className="mx-auto h-14 w-auto object-contain"
      />
      <p className="mt-3 text-center font-serif text-sm italic tracking-wide text-brand-green">
        {BRAND_SLOGAN}
      </p>
      <div className="mt-5">
        <SocialLinks />
      </div>
      <p className="mx-auto mt-4 max-w-lg text-center text-xs leading-relaxed text-brand-muted">
        {ADDRESS}
      </p>
      <p className="mt-2 text-center text-xs text-brand-muted/70">
        &copy; {new Date().getFullYear()} The Natural. All rights reserved.
      </p>
    </footer>
  );
}
