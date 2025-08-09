import React, { useState } from 'react';
import styles from './Events.module.css';
const eventBanner = require("../../assets/place.jpg");
const eventBanner2 = require("../../assets/place2.webp");

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
        title: 'Title',
        date: 'December 7, 2025',
        time: '5:30PM – 11:00PM',
        description:
            'Description',
        imageUrl: eventBanner,
    },
    {
        id: 1,
        title: 'Title',
        date: 'December 7, 2025',
        time: '5:30PM – 11:00PM',
        description:
            'Description',
        imageUrl: eventBanner2,
    },
];

const pastEvents: Event[] = [
    {
        id: 2,
        title: 'Past Event Example',
        date: 'October 12, 2024',
        time: '6:00PM – 9:00PM',
        description: 'This was an example of a past event.',
        imageUrl: eventBanner2,
    },
];

const EventCard: React.FC<{ event: Event; past?: boolean }> = ({ event, past = false }) => (
    <div className={`${styles.eventCard} ${past ? styles.pastEvent : ''}`}>
        <img
            src={event.imageUrl || 'https://via.placeholder.com/300x200?text=Event+Image'}
            alt={event.title}
            className={styles.eventImage}
        />
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
        <div className={styles.eventsContainer}>
            <h1>Upcoming Events</h1>
            {currentEvents.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}

            <button
                className={styles.toggleButton}
                onClick={() => setShowPastEvents(!showPastEvents)}
            >
                {showPastEvents ? 'Hide Past Events' : 'Show Past Events'}
            </button>

            {showPastEvents && (
                <div className={styles.pastEvents}>
                    {pastEvents.map((event) => (
                        <EventCard key={event.id} event={event} past />
                    ))}
                </div>
            )}
        </div>
    );
};

export default EventsPage;
