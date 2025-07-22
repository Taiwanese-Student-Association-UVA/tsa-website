import React, { useState } from 'react';
import SkyScene from './SkyScene';
import StreetView from './StreetScene';

const Events = () => {
    const [view, setView] = useState<'sky' | 'street'>('sky');

    return (
        <>
            {view === 'sky' && (
                <SkyScene onGoToStreetScene={() => setView('street')} />
            )}
            {view === 'street' && (
                <StreetView onGoToSkyScene={() => setView('sky')} />
            )}
        </>
    );
};

export default Events;
