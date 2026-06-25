import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div className={`${hover ? "card" : "bg-white rounded-2xl shadow-sm"} ${className}`}>
      {children}
    </div>
  );
}
