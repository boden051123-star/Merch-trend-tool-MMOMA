
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, RotateCcw, Check, Globe2 } from 'lucide-react';
import { MARKETS, Market } from '../constants';

interface MarketSelectorProps {
  selectedMarket: Market;
  onSelect: (market: Market) => void;
}

const MarketSelector: React.FC<MarketSelectorProps> = ({ selectedMarket, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full px-3 py-1.5 text-[11px] font-bold transition-all duration-300 rounded-lg border h-[30px] relative z-10 ${
          isOpen 
            ? 'bg-white border-blue-500 shadow-md shadow-blue-500/10' 
            : 'bg-white border-gray-200 hover:border-blue-400 text-gray-600'
        }`}
      >
        <div className="flex items-center gap-2 truncate">
          <Globe2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
          <span className="truncate uppercase">{selectedMarket.id} ({selectedMarket.name})</span>
        </div>
        <ChevronDown className={`w-3 h-3 text-blue-400 transition-transform duration-300 shrink-0 ml-1.5 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200 z-[9999] min-w-[180px]"
        >
          <div className="px-4 py-2 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
            <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Select Marketplace</span>
            <RotateCcw className="w-2.5 h-2.5 text-gray-300 hover:text-blue-500 cursor-pointer transition-colors" />
          </div>
          <div className="py-1 max-h-[220px] overflow-y-auto overscroll-contain">
            {MARKETS.map((market) => (
              <button
                key={market.id}
                type="button"
                onClick={() => {
                  onSelect(market);
                  setIsOpen(false);
                }}
                className={`flex items-center justify-between w-full px-4 py-2.5 text-left transition-all group ${
                  selectedMarket.id === market.id ? 'bg-blue-50/50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex flex-col">
                  <span className={`text-[11px] font-black tracking-tight uppercase leading-none ${
                    selectedMarket.id === market.id ? 'text-blue-600' : 'text-gray-700'
                  }`}>
                    {market.id}
                  </span>
                  <span className="text-[9px] text-gray-400 font-medium mt-0.5">{market.name}</span>
                </div>
                {selectedMarket.id === market.id && <Check className="w-3 h-3 text-blue-600" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketSelector;
