"use client"
import React, { useState, Suspense, lazy } from 'react';

// Lazy-loaded component
const LazyLoadedUI = lazy(() => new Promise<{ default: React.FC }>((resolve) => {
    setTimeout(() => {
        resolve(import('../../components/home/home'));
    }, 4000);
},
));

export default function Page() {
    // State to track if UI should be loaded
    const [showUI, setShowUI] = useState(false);
    const toggleUI = () => {
            setShowUI(!showUI);
    }
    setTimeout(() => {})

    return (
        <div>
            {/* Button to toggle UI visibility */}
            {/* <button onClick={toggleUI}>
                {showUI ? 'Loading . . .': 'Get Started'}
            </button> */}

            {/* Suspense to handle lazy loading */}
            <Suspense fallback>
                {/* Render UI if showUI is true */}
                {<LazyLoadedUI />}
            </Suspense>
        </div>
    );
}
