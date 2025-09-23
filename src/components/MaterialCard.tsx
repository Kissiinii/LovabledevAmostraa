import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface MaterialCardProps {
  name: string;
  code: string;
  texture: string;
  onSampleRequest?: (material: { name: string; code: string; texture?: string }) => void;
}

export const MaterialCard = ({ name, code, texture, onSampleRequest }: MaterialCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleSampleRequest = () => {
    onSampleRequest?.({ name, code, texture });
    toast({
      title: "Amostra solicitada",
      description: `${name} (${code}) foi adicionada ao seu kit de amostras.`,
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        className="rounded-2xl border-border overflow-hidden shadow-sm bg-card hover:shadow-md transition-all cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleSampleRequest}
      >
        <div 
          className="h-32 bg-cover bg-center rounded-t-2xl" 
          style={{ backgroundImage: `url(${texture})` }} 
        />
        <CardContent className="p-3">
          <div className="font-medium text-sm truncate">{name}</div>
          <div className="text-muted-foreground text-xs">{code}</div>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              height: isHovered ? 'auto' : 0 
            }}
            transition={{ duration: 0.2 }}
          >
            <Button 
              size="sm" 
              className="w-full mt-2 rounded-xl"
              onClick={(e) => {
                e.stopPropagation();
                handleSampleRequest();
              }}
            >
              Solicitar amostra
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};