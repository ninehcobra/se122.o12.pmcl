'use client'
import { useEffect } from 'react'

const Course = () => {
    useEffect(() => {
        console.log('useEffect is called');
        const timeout = setTimeout(() => {
            console.log('loading');
        }, 50000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div>
            course
        </div>
    )
}

export default Course