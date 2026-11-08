
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import usePhotos from "../photos/usePhotos";
import styles from "./Home.module.css";

const RotatingPics = () => {
  const { grouped: aboutPics } = usePhotos(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTdn96jdQ2YtCL9IUCi0q7ByZwIAdx5h10I7AgZHVX3YLhk51X-BrxFmQ8gg2t7MVvavM7l3AwrMaNa/pub?gid=76408374&single=true&output=csv"
  );

  const photos = aboutPics.flat();
  const [rotIndex, setRotIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;

    const interval = setInterval(() => {
      setRotIndex((prev) => (prev + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [photos.length]);

  if (photos.length === 0) return null;

  const currentIndex = rotIndex % photos.length;
  const currentPhoto = photos[currentIndex];

  return (
    <div className={styles.rotatingPhotoContainer}>
      <AnimatePresence mode="wait">
        <motion.a
          key={currentIndex}
          href={currentPhoto.link}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.rotatingPhotoLink}
        >
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt || "TSA event photo"}
            className={styles.rotatingPhoto}
            decoding="async"
          />
        </motion.a>
      </AnimatePresence>
    </div>
  );
};

export default RotatingPics;
