import React from "react";

type Props = {
  width: number;
  height: number;
};

type Item = {
  img: string;
  title: string;
  desc: string;
};

const StaticImageGrid: React.FC<Props> = ({ width, height }) => {
  const items: Item[] = [
    {
      img: require("../../assets/place.jpg"),
      title: "Title",
      desc:
        "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lectus lacus. Nam ac nulla nisl. Suspendisse eget justo elementum, euismod tortor ut, tempordui er magna viverra. Sed quis augue mauris. Maecenas quis placerat sapien.",
    },
    {
      img: require("../../assets/place2.webp"),
      title: "Title",
      desc:
        "Description m ac nulla nisl. Suspendisse eget justo elementum, euismod tortor ut, tempor neque. Nam suscipit elit quis dui pulvinar, ac semper magna viverra. Sed quis augue mauris. Maecenas quis placerat sapien.",
    },
    {
      img: require("../../assets/headplace.jpg"),
      title: "Title",
      desc:
        "Description Lorem ipsuamet se. Nam ac nulla nisl. Suspendisse eget justo elementum, euismod tortor ut, tempor neque. Nam suscipit elit quis dui pulvinar, ac semper magna viverra. Sed quis augue mauris. Maecenas quis placerat sapien.",
    },
  ];

  const gap = 20;
  const side = 220;
  const textMaxWidth = width - side - gap;

  return (
    <div
      style={{
        width,
        height,
        overflowY: "auto",
        paddingRight: 2,
      }}
    >
      <div style={{ display: "grid", rowGap: 28 }}>
        {items.map((it, i) => {
          const image = (
            <div
              key={`img-${i}`}
              style={{
                width: side,
                height: side,
                background: "#cfd6ff",
                borderRadius: 18,
                overflow: "hidden",
              }}
            >
              <img
                src={it.img}
                alt={it.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          );

          const text = (
            <div key={`txt-${i}`} style={{ maxWidth: textMaxWidth }}>
              <div
                style={{
                  fontWeight: 700,
                  marginBottom: 10,
                  fontSize: 20,
                  lineHeight: 1.1,
                }}
              >
                {it.title}
              </div>
              <p
                style={{
                  margin: 0,
                  color: "#222",
                  lineHeight: 1.5,
                  fontSize: 15.5,
                }}
              >
                {it.desc}
              </p>
            </div>
          );

          const leftFirst = i % 2 === 0;

          return (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: `${side}px 1fr`,
                columnGap: gap,
                alignItems: "center",
              }}
            >
              {leftFirst ? (
                <>
                  {image}
                  {text}
                </>
              ) : (
                <>
                  {text}
                  {image}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StaticImageGrid;
