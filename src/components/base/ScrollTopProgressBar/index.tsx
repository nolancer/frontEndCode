"use client";
import { useEffect, useState } from "react";

const ScrollTopProgressBar = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        console.log("scrollTop ", scrollTop);
    }, [scrollTop]);

    return (
        <div className="bg-transparent h-1 ssm:h-2 fixed top-[109.2px] sm:top-28 left-0 z-50 w-full">
            <div
                className={`h-1 ssm:h-2 bg-blue-700 transition-all duration-300 ease-in-out`}
                style={{ width: `${scrollTop}%` }}
            ></div>
        </div>
    )
}
export default ScrollTopProgressBar;