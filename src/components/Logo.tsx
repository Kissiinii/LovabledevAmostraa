import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
  onClick?: () => void;
  animated?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = "full", 
  className = "", 
  onClick,
  animated = true 
}) => {
  if (variant === "icon") {
    return (
      <div
        className={`logo-container cursor-pointer ${className}`}
        onClick={onClick}
      >
        <img 
          src="/amostra-icon.png" 
          alt="Amostra" 
          className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div
      className={`logo-container cursor-pointer ${className}`}
      onClick={onClick}
    >
      <img 
        src="/amostra-logo.png" 
        alt="Amostra - Plataforma de Materiais" 
        className="h-8 sm:h-10 object-contain"
        style={{ maxWidth: "160px" }}
        loading="eager"
      />
    </div>
  );
};

export default Logo;
