import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { RefObject } from 'react';

import type { BarType } from '../types';

const CHART_TILT_HOVER_Y: number = 0.1;
const CHART_TILT_IDLE_Y: number = 0;
const CHART_TILT_LERP_FACTOR: number = 0.1;

export const useAnimateChartTilt = (groupRef: RefObject<THREE.Group | null> | null, hoveredBar: BarType | null) => {
    useFrame(() => {
        if (!groupRef?.current) {
            return;
        }

        let targetRotation = CHART_TILT_IDLE_Y;

        if (hoveredBar) {
            targetRotation = hoveredBar.percentage < 0 ? -CHART_TILT_HOVER_Y : CHART_TILT_HOVER_Y;
        }

        groupRef.current.rotation.y = THREE.MathUtils.lerp(
            groupRef.current.rotation.y,
            targetRotation,
            CHART_TILT_LERP_FACTOR,
        );
    });
};
