import React from 'react';
// import styles from './SkyScene.module.css';
import styles from './Events.module.css';

interface SkySceneProps {
    onGoToStreetScene: () => void;
}

export default function SkyScene({ onGoToStreetScene }: SkySceneProps) {
    return (
        <div className={styles.skyScene}>
            <div className={styles.moon} />
            <div className={styles.mountains} />
            <div className={styles.stars}>
                {Array.from({ length: 200 }).map((_, i) => (
                    <div
                        key={i}
                        className={styles.star}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 2 + 1}s`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            <div className={styles.lanterns}>
                {Array.from({ length: 50 }).map((_, i) => {
                    const size = Math.random() * 15 + 10; // size in px
                    return (
                        <div
                            key={i}
                            className={styles.lantern}
                            style={{
                                top: `${Math.random() * 90 + 5}%`,
                                left: `${Math.random() * 95 + 2}%`,
                                width: `${size}px`,
                                height: `${size * 1.3}px`,
                                animationDuration: `${Math.random() * 3 + 2}s`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        >
                            <div className={styles.lanternBody} />
                        </div>
                    );
                })}
            </div>

            <button
                onClick={onGoToStreetScene}
                className={styles.pastEventsButton}
                aria-label="Past Events"
            >
                Past Events
                <span className={styles.caretDown} />
            </button>
        </div>
    );
}
