import React from "react";

export default function Footer() {
    return (
        <footer className="py-16 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                    <div className="space-y-4">
                        <div className="text-3xl font-black italic tracking-tighter text-white">LOGO</div>
                        <p className="text-white/40 text-sm font-bold uppercase italic max-w-xs">
                            Transformando corpos e vidas através do treinamento de elite.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 font-black uppercase tracking-widest text-xs">
                        <div className="space-y-4">
                            <p className="text-primary italic">Social</p>
                            <ul className="space-y-2 text-white/60">
                                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <p className="text-primary italic">Contato</p>
                            <ul className="space-y-2 text-white/60">
                                <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Email</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
                        © {new Date().getFullYear()} Personal Trainer. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-white/20">
                        <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Termos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
