import React, { useState, useEffect } from 'react';
import { Element, Link as LinkScroll } from 'react-scroll';
import Button from "../components/Button.jsx";  // Assuming you have a Button component

const Hero = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Intersection Observer to detect visibility of the hero section
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }  // Trigger when 10% of the section is visible
        );

        const heroSection = document.getElementById('hero-section');
        if (heroSection) {
            observer.observe(heroSection);
        }

        return () => {
            if (heroSection) {
                observer.unobserve(heroSection);
            }
        };
    }, []);

    return (
        <section
            id="hero-section"  // This is where the hero section starts
            className={`relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 transition-opacity duration-1000 ${!isVisible ? 'opacity-0' : ''}`}
        >
            <Element name="hero">
                {/* Full-screen background video */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <video
                        className="object-cover w-full h-full"  // Makes the video cover the full screen
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/public/images/coding.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Content overlaying the video */}
                <div className="container relative z-10">
                    <div className="relative z-2 max-w-512 max-lg:max-w-388">
                        <div className="caption small-2 uppercase text-p3">
                            Code with A.I.
                        </div>
                        <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                            Amazingly simple
                        </h1>
                        <p className="max-w-440 mb-14 body-1 max-md:mb-10">
                            Transform your development process and let NeuralForge take your code to the next level.
                        </p>
                        {/* Scroll Button */}
                        <LinkScroll to="features" offset={-100} spy smooth>
                            <Button icon="/images/zap.svg">Try it now</Button>
                        </LinkScroll>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Hero;
