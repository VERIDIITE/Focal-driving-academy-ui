import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export const Badge = ({ children, variant = "primary" }: BadgeProps) => {
  const variants = {
    primary: "bg-red text-white",
    secondary: "bg-black text-white",
    outline: "border border-black/10 text-black/60",
  };

  return (
    <span className={`inline-block px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.3em] rounded-full ${variants[variant]}`}>
      {children}
    </span>
  );
};
