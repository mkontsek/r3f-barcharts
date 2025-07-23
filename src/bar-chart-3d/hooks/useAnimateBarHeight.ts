import { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const ANIMATION_EASING = 0.08;
const ANIMATION_THRESHOLD = 0.01;

export const useAnimateBarHeight = (height: number) => {
    const [animatedHeight, setAnimatedHeight] = useState(0);
    const targetHeight = Math.abs(height);

    useFrame(() => {
        setAnimatedHeight((prev) => {
            if (Math.abs(prev - targetHeight) < ANIMATION_THRESHOLD) {
                return targetHeight;
            }

            return prev + (targetHeight - prev) * ANIMATION_EASING;
        });
    });

    useEffect(() => {
        setAnimatedHeight(0);
    }, [height]);

    return animatedHeight;
};
