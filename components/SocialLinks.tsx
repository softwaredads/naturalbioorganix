import { socialLinks } from "@/lib/contact";

type SocialLinksProps = {
  variant?: "light" | "dark";
};

function SocialIcon({ id }: { id: (typeof socialLinks)[number]["id"] }) {
  if (id === "instagram") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (id === "facebook") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M14 8.5V6.8c0-.7.5-1.3 1.2-1.3H17V3h-2.4C12.8 3 11 4.8 11 7v1.5H9v2.8h2V21h3v-9.7h2.5l.5-2.8H14z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  );
}

export default function SocialLinks({ variant = "dark" }: SocialLinksProps) {
  const isLight = variant === "light";

  return (
    <div className="flex items-center justify-center gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
            isLight
              ? "border border-white/30 text-white hover:bg-white/15"
              : "border border-brand-cream bg-white text-brand-muted hover:border-brand-green hover:text-brand-green"
          }`}
        >
          <SocialIcon id={link.id} />
        </a>
      ))}
    </div>
  );
}
