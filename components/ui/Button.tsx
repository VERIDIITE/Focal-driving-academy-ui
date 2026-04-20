import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "circular";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-sans font-bold uppercase tracking-widest transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-red text-white hover:bg-black rounded-full px-8 py-3.5 shadow-md hover:shadow-xl",
    secondary: "bg-black text-white hover:bg-red rounded-full px-8 py-3.5 shadow-md hover:shadow-xl",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white rounded-full px-8 py-3.5",
    ghost: "text-black hover:bg-red/10 rounded-full px-8 py-3.5",
    circular: "bg-red text-white hover:scale-105 rounded-full w-24 h-24 flex-col text-[10px] shadow-2xl transition-transform duration-700", 
  };

  const sizes = {
    sm: "text-[10px] py-2",
    md: "text-[11px] py-3.5",
    lg: "text-xs py-5",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${variant !== 'circular' ? sizes[size] : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
