import type { FC } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import type { Performance, Vector3Array } from './types';
import { Chart } from './Chart';
import styles from './styles.module.css';

const CANVAS_CAMERA_POSITION: number[] = [0, 0, 5];
const CANVAS_CAMERA_FOV: number = 50;
const AMBIENT_LIGHT_INTENSITY = 0.8;
const DIRECTIONAL_LIGHT_POSITION: Vector3Array = [10, 10, 5];
const DIRECTIONAL_LIGHT_INTENSITY = 1.2;
const ORBIT_MIN_POLAR_ANGLE = Math.PI / 2;
const ORBIT_MAX_POLAR_ANGLE = Math.PI / 2;
const ORBIT_MIN_AZIMUTH_ANGLE = -Math.PI / 4;
const ORBIT_MAX_AZIMUTH_ANGLE = Math.PI / 4;

type Props = {
    data?: Performance[];
};

export const BarChart3D: FC<Props> = ({ data }) => {
    if (!data || data.length === 0) {
        return null;
    }

    return (
        <div className={`bg-gray-50 rounded-lg overflow-hidden ${styles.container}`}>
            <Canvas
                camera={{
                    position: CANVAS_CAMERA_POSITION as Vector3Array,
                    fov: CANVAS_CAMERA_FOV,
                }}
            >
                {/* eslint-disable-next-line react/no-unknown-property */}
                <ambientLight intensity={AMBIENT_LIGHT_INTENSITY} />
                <directionalLight
                    // eslint-disable-next-line react/no-unknown-property
                    position={DIRECTIONAL_LIGHT_POSITION}
                    // eslint-disable-next-line react/no-unknown-property
                    intensity={DIRECTIONAL_LIGHT_INTENSITY}
                />
                <Chart data={data} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={ORBIT_MIN_POLAR_ANGLE}
                    maxPolarAngle={ORBIT_MAX_POLAR_ANGLE}
                    minAzimuthAngle={ORBIT_MIN_AZIMUTH_ANGLE}
                    maxAzimuthAngle={ORBIT_MAX_AZIMUTH_ANGLE}
                />
            </Canvas>
        </div>
    );
};
