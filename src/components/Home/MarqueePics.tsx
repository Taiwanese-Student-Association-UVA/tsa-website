
import styles from "./Home.module.css";
import Marquee from "react-fast-marquee";
import usePhotos from "../photos/usePhotos";

const MarqueePics = () => {
  const { grouped: marqueePics } = usePhotos(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTdn96jdQ2YtCL9IUCi0q7ByZwIAdx5h10I7AgZHVX3YLhk51X-BrxFmQ8gg2t7MVvavM7l3AwrMaNa/pub?gid=0&single=true&output=csv"
  );

  return (
    <>
      {marqueePics.map((row, index) => (
        <Marquee
          key={index}
          speed={40}
          gradient={false}
          direction={index % 2 === 1 ? "right" : "left"}
          pauseOnHover={false}
        >
          {row.map((photo, i) => (
            <a
              key={i}
              href={photo.link}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={photo.src}
                alt={photo.alt || "TSA event photo"}
                className={styles.pictures}
                loading={i < 3 ? "eager" : "lazy"}
                decoding="async"
              />
            </a>
          ))}
        </Marquee>
      ))}
    </>
  );
};

export default MarqueePics;
