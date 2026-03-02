import React from "react";
import Image from "next/image";

export default function CertificationsSection() {
    const certifications = [
        "00+ anos de experiência no mercado fitness",
        "Certificações internacionais especializadas",
        "Participação em Eventos e Especializações"
    ];

    return (
        <section className="py-24 bg-white text-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="relative aspect-video md:aspect-[4/3] bg-zinc-100 rounded-[40px] overflow-hidden shadow-2xl border border-zinc-100">
                    <Image
                        src="/graduation.jpg"
                        alt="Diplomado em Educação Física"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="space-y-10">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-black uppercase italic tracking-tighter flex items-center gap-3 leading-tight">
                            <span className="text-primary">✓</span> Graduação & Certificações
                        </h2>
                        <div className="w-full h-px bg-zinc-200" />
                    </div>

                    <ul className="space-y-6">
                        {certifications.map((cert, i) => (
                            <li key={i} className="flex items-center gap-4 text-black/70 font-bold uppercase tracking-wide text-sm">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                {cert}
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-8 pt-6 opacity-30 grayscale hover:grayscale-0 transition-all cursor-default overflow-x-auto no-scrollbar">
                        <div className="text-3xl font-black italic whitespace-nowrap">CERT LOGO</div>
                        <div className="text-3xl font-black italic whitespace-nowrap">BADGE 1</div>
                        <div className="text-3xl font-black italic whitespace-nowrap">AWARD 2024</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
