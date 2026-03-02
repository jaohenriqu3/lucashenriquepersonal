import React from "react";

export default function ActionSection() {
    return (
        <section className="py-24 bg-black text-center relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-12">
                <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white leading-none">
                    Agende uma <span className="text-primary italic">Avaliação Física</span>
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button className="bg-primary hover:bg-primary-hover text-white font-black py-6 px-14 rounded-radius-custom transition-all uppercase tracking-widest text-xl shadow-2xl shadow-primary/30 hover:scale-[1.05] active:scale-95 group">
                        Solicitar Consulta
                        <span className="inline-block ml-3 group-hover:translate-x-2 transition-transform">→</span>
                    </button>
                </div>

                <p className="text-white/40 text-sm font-bold uppercase tracking-widest italic">
                    Vagas limitadas para este mês
                </p>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        </section>
    );
}
