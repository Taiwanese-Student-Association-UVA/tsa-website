import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
    targetDate: Date;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(
        Math.max(targetDate.getTime() - Date.now(), 0)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(Math.max(targetDate.getTime() - Date.now(), 0));
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const formatTime = (ms: number) => {
        const days = Math.floor(ms / (1000 * 60 * 60 * 24));
        const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
        return `${days}d ${hours}h`;
    };

    return <span>{formatTime(timeLeft)}</span>;
};
