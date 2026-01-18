
import React from 'react';

const PixelAvatar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <svg 
        viewBox="0 0 20 20" 
        className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        shapeRendering="crispEdges"
      >
        {/* Hair / Hat (Explorer Cap) */}
        <rect x="5" y="3" width="10" height="4" fill="#3b82f6" />
        <rect x="4" y="4" width="1" height="3" fill="#2563eb" />
        <rect x="15" y="4" width="1" height="3" fill="#2563eb" />
        
        {/* Face */}
        <rect x="6" y="7" width="8" height="7" fill="#fde68a" />
        
        {/* Eyes */}
        <rect x="8" y="9" width="1" height="1" fill="#1f2937" />
        <rect x="11" y="9" width="1" height="1" fill="#1f2937" />
        
        {/* Shirt / Backpack Straps */}
        <rect x="5" y="14" width="10" height="4" fill="#1e293b" />
        <rect x="6" y="14" width="2" height="4" fill="#64748b" />
        <rect x="12" y="14" width="2" height="4" fill="#64748b" />
        
        {/* Mouth (Humble Smile) */}
        <rect x="9" y="12" width="2" height="1" fill="#f87171" opacity="0.5" />
      </svg>
      {/* Glow Pulse */}
      <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full animate-pulse -z-10" />
    </div>
  );
};

export default PixelAvatar;
