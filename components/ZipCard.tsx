
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface ZipCardProps {
  label: string;
  zip: string;
  isActive?: boolean;
}

const ZipCard: React.FC<ZipCardProps> = ({ label, zip, isActive }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(zip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`group flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-300 ${
        isActive 
          ? 'bg-blue-600 border-blue-600 text-white shadow-[0_8px_16px_-4px_rgba(37,99,235,0.3)] scale-[1.05] z-10' 
          : 'bg-white border-gray-100 text-gray-700 hover:border-blue-400 hover:shadow-lg hover:translate-y-[-2px]'
      }`}
    >
      <div className="flex items-center justify-between w-full mb-1">
        <span className={`text-[8px] font-black uppercase tracking-widest ${isActive ? 'text-blue-100' : 'text-gray-400'}`}>
          {label}
        </span>
        {copied ? (
          <Check className={`w-3 h-3 ${isActive ? 'text-white' : 'text-green-500'}`} />
        ) : (
          <Copy className={`w-3 h-3 transition-opacity duration-200 ${isActive ? 'text-blue-100' : 'text-gray-300 opacity-0 group-hover:opacity-100'}`} />
        )}
      </div>
      <span className="text-sm font-black tracking-tight">{zip}</span>
      
      {/* Visual Feedback for Copy */}
      <div className={`mt-1 h-0.5 rounded-full transition-all duration-300 ${
        copied ? 'w-full bg-current opacity-40' : 'w-0'
      }`} />
    </button>
  );
};

export default ZipCard;
