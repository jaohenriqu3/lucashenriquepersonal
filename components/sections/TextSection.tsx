import React from "react";

export default function TextSection() {
    return (
        <section className="py-24 bg-white text-black text-center relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 italic tracking-tighter leading-none">
                    Treinamento com estratégia.
                </h2>
                <p className="text-xl md:text-3xl font-bold text-black/60 italic tracking-tight">
                    Sem atalhos. Sem improviso.
                </p>
            </div>

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </section>
    );
}
