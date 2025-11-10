import { useEffect, useState } from "react";

interface RotatorProps {
  images: string[];
  links: string[];
  interval?: number;
  alt: string[];
}

export default function ImageRotator({
  images,
  links,
  interval = 5000,
  alt,
}: RotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div style={{ position: "relative", width: "50vw", height: "100%" }}>
      {images.map((img, i) => (
        <a key={i} href={links[i]} target="_blank">
          <img
            key={i}
            src={img}
            alt={alt[i]}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              opacity: index === i ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          />
        </a>
      ))}
    </div>
  );
}
