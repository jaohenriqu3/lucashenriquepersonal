import React from "react";

export default function DepoimentsSection() {
    return (
        <section id="depoimentos" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
                        Depoimentos dos <span className="text-primary italic">Alunos</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mt-4" />
                </div>

                <div className="max-w-4xl mx-auto relative px-4">
                    <div className="bg-zinc-900/40 p-12 md:p-16 rounded-[40px] border border-white/5 relative overflow-hidden backdrop-blur-sm shadow-2xl">
                        <span className="text-primary text-8xl absolute -top-4 left-6 opacity-20 font-serif">“</span>

                        <blockquote className="text-xl md:text-2xl font-medium italic text-white/90 mb-12 relative z-10 leading-relaxed">
                            "Treinamento estruturado e acompanhamento constante fazem toda a diferença na minha evolução muscular."
                        </blockquote>

                        <div className="flex items-center gap-6 relative z-10">
                            <div className="w-16 h-16 bg-zinc-800 rounded-full overflow-hidden" />
                            <div>
                                <p className="font-black uppercase tracking-widest text-white leading-none mb-1">Nome do Aluno</p>
                                <p className="text-white/40 text-sm font-bold uppercase italic">Profissão / Atleta</p>
                            </div>
                        </div>

                        <span className="text-primary text-8xl absolute -bottom-16 right-6 opacity-20 font-serif rotate-180">“</span>
                    </div>

                    <div className="flex justify-center gap-3 mt-10">
                        {[1, 2, 3, 4].map(i => (
                            <button key={i} className={`w-2.5 h-2.5 rounded-full transition-all ${i === 1 ? 'bg-primary w-8' : 'bg-white/20'}`} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
}
