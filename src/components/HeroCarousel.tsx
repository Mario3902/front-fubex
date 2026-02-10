import { useState, useEffect } from 'react';

interface HeroCarouselProps {
    images: string[];
    interval?: number;
}

const HeroCarousel = ({ images, interval = 5000 }: HeroCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-20' : 'opacity-0'
                        }`}
                    style={{ backgroundImage: `url('${img}')` }}
                />
            ))}
            {/* Overlay to ensure text consistent contrast */}
            <div className="absolute inset-0 bg-[#0f2744]/40" />
        </div>
    );
};

export default HeroCarousel;
