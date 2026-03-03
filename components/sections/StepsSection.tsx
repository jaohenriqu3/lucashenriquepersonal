import React from "react";

export default function StepsSection() {
    const steps = [
        { num: "1", title: "Avaliação Física e Anamnese", desc: "Análise profunda do seu histórico, rotina e objetivos." },
        { num: "2", title: "Planejamento de Treino Individual", desc: "Montagem da estratégia perfeita para sua evolução muscular." },
        { num: "3", title: "Acompanhamento Contínuo", desc: "Suporte e ajustes constantes para garantir resultados." },
    ];

    return (
        <section id="metodo" className="py-24 bg-zinc-50 text-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none mb-4">
                            Como funciona?
                        </h2>
                        <div className="w-20 h-1 bg-primary" />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-white p-10 rounded-3xl border border-zinc-200 relative overflow-hidden group hover:border-primary transition-all shadow-sm hover:shadow-xl hover:shadow-primary/5">
                            <div className="text-8xl text-primary/75 font-bold absolute -top-4 right-2 italic group-hover:text-primary/5 transition-colors md:hidden">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-black uppercase italic mb-4 relative z-10 leading-tight">
                                <span className="text-primary">{step.num}.</span> {step.title}
                            </h3>
                            <p className="text-black/60 relative z-10 font-medium">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
