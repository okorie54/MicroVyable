import React from 'react';

interface MicroVyableLogoProps {
  className?: string;
  showTagline?: boolean;
  showPillars?: boolean;
  size?: 'sm' | 'md' | 'lg';
  lightMode?: boolean;
}

export const MicroVyableLogo: React.FC<MicroVyableLogoProps> = ({
  className = '',
  showTagline = false,
  showPillars = false,
  size = 'md',
  lightMode = false,
}) => {
  // Height scale mapping
  const heightMap = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12',
  };

  const textColor = lightMode ? '#000000' : '#FFFFFF';
  const mutedTextColor = lightMode ? '#555555' : '#A3A3A3';

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      {/* SVG Wordmark replicating the exact MicroVyable logo with the arrow 'V' */}
      <svg
        viewBox="0 0 340 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightMap[size]} w-auto tracking-tight select-none`}
        aria-label="MicroVyable Logo"
      >
        {/* Micro */}
        <text
          x="0"
          y="48"
          fill={textColor}
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
          fontWeight="800"
          fontSize="46"
          letterSpacing="-1.5px"
        >
          Micro
        </text>

        {/* Stylized 'V' with Upward Arrow */}
        <g transform="translate(122, 2)">
          {/* Left downward stroke of V */}
          <path
            d="M 2 12 L 15 46 L 24 46 L 7 12 Z"
            fill={textColor}
          />
          {/* Right upward stroke of V extending into Arrow shaft */}
          <path
            d="M 14 46 L 31 10 L 39 12 L 21 46 Z"
            fill={textColor}
          />
          {/* Upward Arrowhead */}
          <path
            d="M 35 15 L 25 15 L 36 0 L 47 15 L 37 15 Z"
            fill={textColor}
          />
        </g>

        {/* yable */}
        <text
          x="166"
          y="48"
          fill={textColor}
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
          fontWeight="800"
          fontSize="46"
          letterSpacing="-1.5px"
        >
          yable
        </text>
      </svg>

      {/* Optional Tagline */}
      {showTagline && (
        <div
          className={`font-sans font-medium text-center w-full mt-1 ${
            size === 'lg' ? 'text-sm sm:text-base' : 'text-xs'
          }`}
          style={{ color: textColor }}
        >
          Helping startups become commercially vyable
        </div>
      )}

      {/* Optional Pillars */}
      {showPillars && (
        <div
          className="font-sans font-medium text-xs tracking-wider flex items-center justify-center gap-2 w-full mt-2"
          style={{ color: mutedTextColor }}
        >
          <span>Find Customers</span>
          <span>•</span>
          <span>Grow Faster</span>
          <span>•</span>
          <span>Build Partnerships</span>
        </div>
      )}
    </div>
  );
};
