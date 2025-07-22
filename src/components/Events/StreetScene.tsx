import React from 'react';
// import styles from './StreetScene.module.css';
import styles from './Events.module.css';


type StreetSceneProps = {
    onGoToSkyScene: () => void;
};

export default function StreetScene({ onGoToSkyScene }: StreetSceneProps) {
    return (
        <div className={styles.streetScene}>
            <button
                onClick={onGoToSkyScene}
                className={styles.currentEventsButton}
                aria-label="Go to Current Events"
            >
                Current Events
                <span className={styles.caretUp} />
            </button>
            {/* Add street-level visuals here later */}
        </div>
    );
}
