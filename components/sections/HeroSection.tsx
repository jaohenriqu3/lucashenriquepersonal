import React from "react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight italic tracking-tighter text-primary">
                            Lucas <span className="text-white italic">Henrique</span>
                        </h1>
                        <h2 className="text-2xl font-bold text-white/90">
                            Especialista em Hipertrofia
                        </h2>
                        <p className="text-lg text-white/70 max-w-md">
                            Treinamento estruturado para ganho de massa muscular com foco em resultados reais e duradouros.
                        </p>
                    </div>

                    <button className="bg-primary hover:bg-primary-hover text-white font-black py-4 px-10 rounded-radius-custom transition-all uppercase tracking-widest text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]">
                        Agendar Consulta
                    </button>

                    <div className="space-y-3 pt-4">
                        {[
                            "+2 Anos de Experiência",
                            "Graduado em Educação Física",
                            "Especializado em Hipertrofia"
                        ].map((text, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wide">
                                <span className="text-primary text-xl">✓</span> {text}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative aspect-[4/5] bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 mb-4">
                    <Image
                        src="/profile.jpg"
                        alt="Lucas Henrique - Personal Trainer"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>
            </div>

            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        </section>
    );
}

