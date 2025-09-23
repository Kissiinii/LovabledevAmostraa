import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Sample {
  name: string;
  code: string;
  texture?: string;
}

interface SampleKitPopupProps {
  samples: Sample[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveSample: (code: string) => void;
  onRequestKit: () => void;
}

export const SampleKitPopup = ({ 
  samples, 
  isOpen, 
  onClose, 
  onRemoveSample, 
  onRequestKit 
}: SampleKitPopupProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full right-0 mt-2 w-80 z-50"
      >
        <Card className="border shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Kit de Amostras</CardTitle>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            {samples.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                Nenhuma amostra selecionada
              </p>
            ) : (
              <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
                {samples.map((sample) => (
                  <div 
                    key={sample.code}
                    className="flex items-center gap-3 p-2 rounded-lg bg-accent/20 border"
                  >
                    {sample.texture && (
                      <div 
                        className="w-12 h-12 rounded-lg bg-cover bg-center border border-border flex-shrink-0"
                        style={{ backgroundImage: `url(${sample.texture})` }}
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{sample.name}</p>
                      <p className="text-xs text-muted-foreground">{sample.code}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => onRemoveSample(sample.code)}
                      className="flex-shrink-0"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
            
            {samples.length > 0 && (
              <Button 
                className="w-full gap-2" 
                onClick={onRequestKit}
              >
                <Download className="h-4 w-4" />
                Solicitar Kit ({samples.length})
              </Button>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};