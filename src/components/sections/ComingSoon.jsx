import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden text-slate-200">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('/coming_soon_bg.png')` }}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />

            {/* Hero Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 mb-6 text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-400/10 rounded-full border border-cyan-400/20">
                        Wait for it
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter">
                        Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Amazing</span> is Coming.
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We're busy building the future. Our new experience is almost ready.
                        Join our mailing list to be the first to know when we launch.
                    </p>
                </motion.div>

                {/* Action / Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-6 py-4 rounded-xl bg-slate-900/50 border border-slate-700 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all text-white w-full md:w-80"
                    />
                    <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold transition-all shadow-lg shadow-cyan-500/20 active:scale-95">
                        Notify Me
                    </button>
                </motion.div>

                {/* Social Links or Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-20 flex justify-center gap-8 text-slate-500 text-sm tracking-widest uppercase"
                >
                    <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-cyan-400 transition-colors">Twitter</a>
                    <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-cyan-400 transition-colors">Instagram</a>
                    <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-cyan-400 transition-colors">LinkedIn</a>
                </motion.div>
            </div>

            {/* Animated Elements */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
        </div>
    );
};

export default ComingSoon;