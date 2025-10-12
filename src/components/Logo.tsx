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
  const MotionDiv = animated ? motion.div : "div";
  
  const animationProps = animated ? {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  } : {};

  if (variant === "icon") {
    return (
      <MotionDiv
        {...animationProps}
        className={`logo-container cursor-pointer ${className}`}
        onClick={onClick}
      >
        <img 
          src="/amostra-icon.png" 
          alt="Amostra" 
          className="h-8 w-8 sm:h-10 sm:w-10 object-contain transition-all duration-200"
          loading="eager"
        />
      </MotionDiv>
    );
  }

  return (
    <MotionDiv
      {...animationProps}
      className={`logo-container cursor-pointer ${className}`}
      onClick={onClick}
    >
      <img 
        src="/amostra-logo.png" 
        alt="Amostra - Plataforma de Materiais" 
        className="h-8 sm:h-10 object-contain transition-all duration-200"
        style={{ maxWidth: "160px" }}
        loading="eager"
      />
    </MotionDiv>
  );
};

export default Logo;
