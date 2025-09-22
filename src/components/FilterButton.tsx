import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const FilterButton = ({ label, isActive, onClick }: FilterButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-4 py-2 text-sm rounded-full border transition-all",
        isActive 
          ? "border-primary bg-primary text-primary-foreground shadow-sm" 
          : "border-border hover:border-muted-foreground hover:bg-accent"
      )}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
};