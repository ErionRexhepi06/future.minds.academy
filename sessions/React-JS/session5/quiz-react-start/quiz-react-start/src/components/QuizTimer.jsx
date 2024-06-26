import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    // Execute onTimeout after timeout duration
    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [onTimeout, timeout]);

    // Update remainingTime every 100ms
    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => {
                const newRemainingTime = prevRemainingTime - 100;
                if (newRemainingTime <= 0) {
                    clearInterval(interval);
                    return 0;  // Ensure it doesn't go negative
                }
                return newRemainingTime;
            });
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <progress id="question-time" max={timeout} value={remainingTime} />
    );
}
