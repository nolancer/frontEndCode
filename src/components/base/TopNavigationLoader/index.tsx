"use client";
import { Next13NProgress } from 'nextjs13-progress';

const TopNavigationLoader = () => {
    return (
        <Next13NProgress
            color="#4ade80"
            height={3}
            options={{ easing: 'ease', speed: 500 }}
        />
    )
}
export default TopNavigationLoader;