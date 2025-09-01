import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import styles from './Events.module.css';
import SkyBackground from './SkyBackground';
import defaultEventImage from '../../assets/logo.png';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    description: string;
    imageUrl?: string;
    instagramLink?: string;
}

const GOOGLE_SHEET_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQe3K5xq858FpFjKYjA1-FTYpjvw6LsUzrPw93aQUp023vIPDtIxbKrquLIR0BnOrSYZ1XJzEXdl_3s/pub?output=csv";

const SkeletonCard: React.FC = () => (
    <div className={`${styles.eventCard} ${styles.skeletonCard}`}>
        <div className={styles.skeletonImage}></div>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonText}></div>
    </div>
);

const EventCard: React.FC<{ event: Event; past?: boolean; delay?: number }> = ({ event, past = false, delay = 0 }) => {
    console.log('Event Link:', event.instagramLink);

    return (
        <div
            className={`${styles.eventCard} ${past ? styles.pastEvent : ''} ${styles.fadeIn}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <img
                src={event.imageUrl || defaultEventImage}
                alt={event.title}
                className={styles.eventImage}
            />
            <div className={styles.eventDetails}>
                <h2>{event.title}</h2>
                <h3 className={styles.eventDateTime}>{event.time}</h3>
                <h3 className={styles.eventDate}>{event.date}</h3>
                <h3 className={styles.eventDescription}>{event.description}</h3>
                {event.instagramLink ? (
                    <a
                        href={event.instagramLink.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.viewButton}
                    >
                        View Event →
                    </a>
                ) : (
                    <button className={styles.viewButton} disabled>
                        No Link Available
                    </button>
                )}
            </div>
        </div>
    );
};


const EventsPage: React.FC = () => {
    const [currentEvents, setCurrentEvents] = useState<Event[]>([]);
    const [pastEvents, setPastEvents] = useState<Event[]>([]);
    const [showPastEvents, setShowPastEvents] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Papa.parse(GOOGLE_SHEET_URL, {
            download: true,
            header: true,
            complete: (results: { data: Event[] }) => {
                const events = results.data as Event[];
                const today = dayjs();

                const current = events.filter(e =>
                    dayjs(e.date, 'MM/DD/YYYY').isSameOrAfter(today, 'day')
                );

                const past = events.filter(e =>
                    dayjs(e.date, 'MM/DD/YYYY').isBefore(today, 'day')
                );

                setCurrentEvents(current);
                setPastEvents(past);
                setLoading(false);
            },
            error: (err) => {
                console.error("Error fetching CSV:", err);
                setLoading(false);
            }
        });
    }, []);

    return (
        <>
            <SkyBackground/>
            <div className={styles.eventsContainer}>
                <div className={styles.eventsHeader}>
                    <h1 className={styles.eventsTitle}>Events</h1>
                    <div className={styles.divider}></div>
                </div>

                <div className={styles.eventsGrid}>
                    {loading
                        ? Array.from({length: 6}).map((_, i) => <SkeletonCard key={i}/>)
                        : currentEvents.length > 0
                            ? currentEvents.map((event, index) => (
                                <EventCard key={event.id + '-current'} event={event} delay={index * 150}/>
                            ))
                            : <p>No current events found.</p>
                    }
                </div>

                <button
                    className={styles.toggleButton}
                    onClick={() => setShowPastEvents(!showPastEvents)}
                >
                    {showPastEvents ? 'Hide Past Events' : 'Show Past Events'}
                </button>

                {showPastEvents && (
                    <div className={styles.eventsGrid}>
                        {loading
                            ? Array.from({length: 6}).map((_, i) => <SkeletonCard key={i}/>)
                            : pastEvents.length > 0
                                ? pastEvents.map((event, index) => (
                                    <EventCard key={event.id + '-past'} event={event} past delay={index * 150}/>
                                ))
                                : <p>No past events found.</p>
                        }
                    </div>
                )}
            </div>
        </>
    );
};

export default EventsPage;
