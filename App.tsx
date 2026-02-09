
import React, { useState } from 'react';
import { Globe, TrendingUp, Box, ExternalLink, Send, ShieldCheck, Zap, Activity, Copy, Check, BarChart3, Search } from 'lucide-react';
import { MARKETS, Market, TOP_100_URL, TELEGRAM_CONTACT } from './constants';
import MarketSelector from './components/MarketSelector';

const App: React.FC = () => {
  const [selectedMarket, setSelectedMarket] = useState<Market>(MARKETS[0]);
  const [copied, setCopied] = useState(false);

  const handleOpenMarket = () => {
    window.open(selectedMarket.url, '_blank');
  };

  const handleOpenTop100 = () => {
    window.open(TOP_100_URL, '_blank');
  };

  const handleCopyZip = () => {
    navigator.clipboard.writeText(selectedMarket.zip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const telegramUrl = `https://t.me/${TELEGRAM_CONTACT.replace('@', '')}`;

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-12 flex flex-col items-center justify-center bg-[#f4f7f9] selection:bg-blue-100">
      <div className="max-w-4xl w-full bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden">
        
        {/* Ultra Slim 2026 Status Bar */}
        <div className="bg-gray-950 px-6 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <span className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em]">Live Session</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 border-l border-gray-800 pl-5">
              <Activity className="w-3 h-3 text-blue-500" />
              <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest italic">Stable Connection</span>
            </div>
          </div>
          <span className="text-[9px] font-mono text-blue-500/80 font-bold uppercase tracking-widest italic">Terminal v2026.04</span>
        </div>

        {/* Content Area */}
        <div className="px-8 py-10 md:px-12">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-10">
            <div className="flex items-center gap-5">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 bg-blue-500 rounded-2xl blur opacity-10 transition-all duration-500"></div>
                <div className="relative w-16 h-16 rounded-2xl bg-gray-950 flex items-center justify-center shadow-lg overflow-hidden border border-gray-800">
                  <img 
                    src="https://img.freepik.com/premium-photo/cyber-security-specialist-bulldog-hacker-hoodie-with-matrix-background_91497-12400.jpg" 
                    alt="Elite" 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2.5">
                  <h1 className="text-3xl font-black text-gray-950 tracking-tighter uppercase italic leading-none">
                    MERCH<span className="text-blue-600">TREND</span>
                  </h1>
                  <Zap className="w-4 h-4 text-blue-600 fill-blue-600" />
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <ShieldCheck className="w-3 h-3 text-gray-400" />
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em]">By MMO MA</span>
                </div>
              </div>
            </div>

            {/* Compact Tool Settings - Integrated Zip Info right here */}
            <div className="flex items-stretch gap-3 bg-gray-50 p-2.5 rounded-2xl border border-gray-100 relative z-50 self-stretch lg:self-auto">
              <div className="px-4 py-1.5 flex flex-col justify-center border-r border-gray-200 min-w-[100px]">
                <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Modality</span>
                <span className="text-[11px] font-bold text-gray-700 uppercase">T-Shirt</span>
              </div>
              <div className="flex flex-col gap-1 min-w-[180px] pr-2">
                <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest ml-1">Marketplace Node</span>
                <MarketSelector selectedMarket={selectedMarket} onSelect={(m) => setSelectedMarket(m)} />
                
                {/* Zip Config - Now placed directly under Target Marketplace */}
                <div 
                  className="flex items-center gap-1.5 px-2 py-1 bg-white rounded-lg border border-gray-200 cursor-pointer hover:border-blue-400 transition-colors group/zip w-full mt-1"
                  onClick={handleCopyZip}
                >
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter shrink-0">ZIP:</span>
                  <span className="text-[10px] font-black text-blue-600 tracking-tight flex-1">{selectedMarket.zip}</span>
                  {copied ? (
                    <Check className="w-2.5 h-2.5 text-green-500" />
                  ) : (
                    <Copy className="w-2.5 h-2.5 text-gray-300 group-hover/zip:text-blue-500 transition-colors" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Grid - 2026 Sleek Edition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-0">
            
            {/* Market Launcher Card */}
            <div className="group relative bg-gray-950 rounded-[2rem] p-7 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/10 border border-gray-900 flex flex-col justify-between overflow-hidden min-h-[220px]">
              <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                 <Search className="w-32 h-32 text-white" />
              </div>
              
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex flex-col">
                  <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <Search className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-white text-lg font-black italic tracking-tight uppercase leading-none mb-1">MARKET SEARCH</h2>
                  <span className="text-[9px] font-bold text-blue-400/60 uppercase tracking-widest">{selectedMarket.id} NODE READY</span>
                </div>
                
                <div className="flex flex-col items-end">
                  <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Status</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest italic">ACTIVE</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleOpenMarket}
                className="relative z-10 w-full mt-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-[12px] tracking-widest flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] shadow-lg shadow-blue-600/20 uppercase"
              >
                Access {selectedMarket.id} Marketplace
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Top 100 Card - Updated to specify USA ONLY */}
            <div className="group relative bg-[#fafafb] rounded-[2rem] p-7 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 border border-gray-100 flex flex-col justify-between overflow-hidden min-h-[220px]">
              <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                 <BarChart3 className="w-32 h-32 text-gray-900" />
              </div>
              
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex flex-col">
                  <div className="w-9 h-9 bg-gray-900 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-gray-900/10 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-gray-900 text-lg font-black italic tracking-tight uppercase leading-none mb-1">USA BEST SELLERS</h2>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Amazon.com Top 100 Database</span>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[8px] font-black text-blue-600 uppercase tracking-widest">USA ONLY</span>
                </div>
              </div>

              <button 
                onClick={handleOpenTop100}
                className="relative z-10 w-full mt-8 py-3.5 rounded-xl bg-gray-950 hover:bg-black text-white font-black text-[12px] tracking-widest flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] shadow-lg shadow-gray-900/10 uppercase"
              >
                Explore Top 100 USA
                <Box className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bar - Slim & Professional */}
        <div className="px-10 py-5 bg-gray-50/50 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a 
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-2 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-blue-400 transition-all active:scale-[0.98]"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:rotate-6 transition-transform">
                <Send className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-black text-gray-900 tracking-tight uppercase italic">{TELEGRAM_CONTACT}</span>
            </a>
            
            <div className="hidden md:flex flex-col">
              <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest leading-none">Status</span>
              <span className="text-[9px] font-bold text-green-600">Secure Protocol v5</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <p className="text-[9px] font-black text-gray-300 uppercase tracking-[0.5em] italic">Elite Merch v2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
