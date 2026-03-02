import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    fullWidth?: boolean;
}

export default function Button({
    children,
    variant = 'primary',
    fullWidth = false,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = "px-8 py-4 font-black uppercase tracking-widest text-sm transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none rounded-radius-custom";

    const variants = {
        primary: "bg-primary hover:bg-primary-hover text-white shadow-xl shadow-primary/20",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "text-white/60 hover:text-white hover:bg-white/5"
    };

    const width = fullWidth ? "w-full" : "w-auto";

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${width} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
