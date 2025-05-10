
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-tritonexus-purple to-tritonexus-pink flex items-center justify-center mr-2">
        <span className="text-white font-bold text-lg">T</span>
      </div>
      <span className="font-bold text-xl">
        Trito<span className="text-tritonexus-purple">Nexus</span>
      </span>
    </div>
  );
};

export default Logo;
