import { useEffect, useState } from "react";

const images = [
  "/src/assets/images/festa1.png",
  "/src/assets/images/festa2.png",
  "/src/assets/images/festa3.png",
  "/src/assets/images/festa4.png",
  "/src/assets/images/festa5.png",
  "/src/assets/images/festa6.png",
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden rounded-3xl shadow-2xl">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Festa ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* overlay suave */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
