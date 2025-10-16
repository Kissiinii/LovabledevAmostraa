import { motion } from "framer-motion";

const brands = [
  { name: "Portinari", logo: "/brands/portinari.png" },
  { name: "Durafloor", logo: "/brands/durafloor.png" },
  { name: "Duratex", logo: "/brands/duratex.png" },
  { name: "Fischer", logo: "/brands/fischer.png" },
  { name: "Eliane", logo: "/brands/eliane.png" },
  { name: "Portobello", logo: "/brands/portobello.png" },
  { name: "Ceusa", logo: "/brands/ceusa.png" },
];

export const BrandCarousel = () => {
  // Duplicar as marcas para criar um loop infinito suave
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="w-full overflow-hidden bg-muted/30 py-8 border-y border-border">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-sm text-muted-foreground mb-6">
          Marcas parceiras
        </p>
        <div className="relative">
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -100 * brands.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
