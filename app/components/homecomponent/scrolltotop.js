'use client'
import { useState, useEffect } from 'react';
import "./scrolltotop.scss"

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`scroll-to-top ${isVisible ? 'show' : ''}`}
            onClick={scrollToTop}
        >
            <i color='white' className="fa-solid fa-chevron-up"></i>
        </button>
    );
};

export default ScrollToTopButton;
