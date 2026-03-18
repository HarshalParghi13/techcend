import React from 'react';
import { Terminal } from 'lucide-react';
import { BRANDS } from '../../data/constants';

const InfiniteMarquee = () => {
  return (
    <div className="w-full py-10 bg-slate-950 border-y border-white/5 overflow-hidden flex relative z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10 pointer-events-none"></div>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
          <div key={i} className="mx-8 flex items-center gap-2 opacity-30 hover:opacity-100 transition-opacity duration-300 cursor-default">
            <Terminal className="w-5 h-5" />
            <span className="text-xl font-bold tracking-widest">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
