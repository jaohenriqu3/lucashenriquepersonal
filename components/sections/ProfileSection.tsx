import React from "react";
import Image from "next/image";

export default function ProfileSection() {
    return (
        <section id="sobre" className="py-24 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="relative aspect-square md:aspect-[4/5] bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl shadow-primary/5">
                    <Image
                        src="/run.jpg"
                        alt="Diplomado em Educação Física"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                <div className="space-y-10">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white">
                            Metodologia de <span className="text-primary italic">Trabalho</span>
                        </h2>
                        <div className="w-20 h-1 bg-primary" />
                    </div>

                    <ul className="space-y-6">
                        {[
                            "Avaliação Individual",
                            "Periodização Estruturada",
                            "Ajustes Semanais",
                            "Foco em Hipertrofia"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-xl font-black uppercase italic tracking-wide text-white/90 group">
                                <span className="text-primary text-2xl group-hover:scale-110 transition-transform">✓</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
