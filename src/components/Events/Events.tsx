import React, { useState } from 'react';
import styles from './Events.module.css';
import SkyBackground from './SkyBackground';

const headBanner = require("../../assets/headplace.jpg");
const eventBanner = require("../../assets/place.jpg");
const eventBanner2 = require("../../assets/place2.webp");


// Placeholder jsons for events -> gonna make functionality to pull from google sheets prob
interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    description: string;
    imageUrl?: string;
}

const currentEvents: Event[] = [
    {
        id: 1,
        title: 'Title 1',
        date: 'December 7, 2025',
        time: '5:30PM – 11:00PM',
        description: 'Description for Event 1',
        imageUrl: eventBanner,
    },
    {
        id: 2,
        title: 'Title 2',
        date: 'December 8, 2025',
        time: '6:00PM – 10:00PM',
        description: 'Description for Event 2',
        imageUrl: eventBanner2,
    },
    {
        id: 3,
        title: 'Title 3',
        date: 'December 9, 2025',
        time: '4:00PM – 9:00PM',
        description: 'Description for Event 3',
        imageUrl: eventBanner,
    },
    {
        id: 4,
        title: 'Title 4',
        date: 'December 9, 2025',
        time: '4:00PM – 9:00PM',
        description: 'Description for Event 3',
        imageUrl: eventBanner,
    },
];

const pastEvents: Event[] = [
    {
        id: 4,
        title: 'Past Event Example',
        date: 'October 12, 2024',
        time: '6:00PM – 9:00PM',
        description: 'This was an example of a past event.',
        imageUrl: eventBanner2,
    },
];

const EventCard: React.FC<{ event: Event; past?: boolean }> = ({ event, past = false }) => (
    <div className={`${styles.eventCard} ${past ? styles.pastEvent : ''}`}>
        <img src={event.imageUrl} alt={event.title} className={styles.eventImage} />
        <div className={styles.eventDetails}>
            <h2>{event.title}</h2>
            <p className={styles.eventDateTime}>{event.time}</p>
            <p className={styles.eventDate}>{event.date}</p>
            <p>{event.description}</p>
            <button className={styles.viewButton}>View Event →</button>
        </div>
    </div>
);

const EventsPage: React.FC = () => {
    const [showPastEvents, setShowPastEvents] = useState(false);

    return (
        <>
            <SkyBackground />
            <div className={styles.eventsContainer}>
                <div className={styles.bannerWrapper}>
                    <img src={headBanner} alt="Events" className={styles.headBanner} />
                    <h1 className={styles.bannerText}>Events</h1>
                </div>

                <div className={styles.eventsGrid}>
                    {currentEvents.map((event) => (
                        <EventCard key={event.id + '-current'} event={event} />
                    ))}
                </div>

                <button
                    className={styles.toggleButton}
                    onClick={() => setShowPastEvents(!showPastEvents)}
                >
                    {showPastEvents ? 'Hide Past Events' : 'Show Past Events'}
                </button>

                {showPastEvents && (
                    <div className={styles.eventsGrid}>
                        {pastEvents.map((event) => (
                            <EventCard key={event.id + '-past'} event={event} past />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default EventsPage;
