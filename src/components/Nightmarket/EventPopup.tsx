import React, { useState } from "react";
import { CountdownTimer } from "./CountdownTimer";
import nightMarketIcon from "../../assets/nightmarket.png";

interface EventPopupProps {
    targetDate: Date;
    eventLink: string;
}

export const EventPopup: React.FC<EventPopupProps> = ({
                                                          targetDate,
                                                          eventLink,
                                                      }) => {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        <div
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                zIndex: 2147483647,
                width: "240px",
                height: "240px",
                cursor: "pointer",
            }}
        >
            {/* Close button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                }}
                style={{
                    position: "absolute",
                    top: "-4px",
                    right: "-4px",
                    background: "white",
                    border: "none",
                    color: "black",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    zIndex: 10,
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
                    padding: 0,
                }}
            >
                ×
            </button>

            {/* Main clickable area */}
            <a
                href={eventLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none",
                }}
            >
                {/* Night market image */}
                <img
                    src={nightMarketIcon}
                    alt="Night Market Icon"
                    style={{
                        width: "110%",
                        height: "110%",
                        objectFit: "contain",
                    }}
                />

                {/* Countdown overlay */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-45%, -50%)",
                        color: "white",
                        fontWeight: 700,
                        textAlign: "center",
                        fontSize: "17px",
                        pointerEvents: "none",
                        backgroundColor: "rgba(0, 0, 0, 1)",
                        padding: "4px 8px",
                        borderRadius: "8px",
                    }}
                >
                    <CountdownTimer targetDate={targetDate} />
                </div>
            </a>
        </div>
    );
};
