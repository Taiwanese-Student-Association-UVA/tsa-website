import React, { useState } from "react";
import { CountdownTimer } from "./CountdownTimer";
import nightMarketIcon from "../../assets/nightmarket.png";
import "./EventPopup.css";

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
        <div className="eventPopup">
            <button
                className="closeButton"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                }}
            >
                ×
            </button>

            <a
                href={eventLink}
                target="_blank"
                rel="noopener noreferrer"
                className="popupLink"
            >
                <img
                    src={nightMarketIcon}
                    alt="Night Market Icon"
                    className="nightMarketImage"
                />

                <div className="countdownOverlay">
                    <CountdownTimer targetDate={targetDate} />
                </div>
            </a>
        </div>
    );
};