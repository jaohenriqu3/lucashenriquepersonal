import React from "react";

export default function Header() {
    return (
        <header className="w-full py-4 px-6 fixed top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto flex justify-center items-center">
                <nav className="hidden md:flex gap-8 ">
                    <a href="#home" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Home</a>
                    <a href="#sobre" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Sobre</a>
                    <a href="#metodo" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Método</a>
                    <a href="#depoimentos" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Depoimentos</a>
                </nav>
                <button className="text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors"> </button>
            </div>
        </header>
    );
}
