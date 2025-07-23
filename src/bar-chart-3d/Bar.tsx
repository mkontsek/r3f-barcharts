import { type FC, useRef } from 'react';
import { type Mesh } from 'three';
import { RoundedBox } from '@react-three/drei';

import { adjustMaterialColor } from './service';
import type { BarType, Vector3Array } from './types';
import { useAnimateBarHeight } from './hooks/useAnimateBarHeight';

const BAR_WIDTH = 0.35;
const BAR_DEPTH = 0.08;
const BAR_RADIUS = 0.02;
const BAR_SMOOTHNESS = 4;
const METALNESS = 0.4;
const ROUGHNESS = 0.3;
const SCALE_DIRECTION = 2;

interface Props {
    isHovered: boolean;
    barType: BarType;
    hasAnyHover: boolean;
    onHover: (hovered: boolean, barType: BarType) => void;
}

export const Bar: FC<Props> = ({ barType, isHovered, hasAnyHover, onHover }) => {
    const meshRef = useRef<Mesh>(null);
    const animatedHeight = useAnimateBarHeight(barType.height);
    const materialColor = adjustMaterialColor(barType.color, hasAnyHover, isHovered);

    const direction = barType.height >= 0 ? 1 : -1;
    const animatedY = direction * (animatedHeight / SCALE_DIRECTION);
    const animatedPosition: Vector3Array = [barType.position[0], animatedY, barType.position[2]];

    return (
        <mesh
            ref={meshRef}
            // eslint-disable-next-line react/no-unknown-property
            position={animatedPosition}
            onPointerEnter={(e) => {
                onHover(true, { ...barType, pointerPosition: [e.point.x, e.point.y, e.point.z] });
            }}
            onPointerMove={(e) => {
                if (isHovered) {
                    onHover(true, {
                        ...barType,
                        pointerPosition: [e.point.x, e.point.y, e.point.z],
                    });
                }
            }}
            onPointerLeave={() => {
                onHover(false, barType);
            }}
        >
            <RoundedBox args={[BAR_WIDTH, animatedHeight, BAR_DEPTH]} radius={BAR_RADIUS} smoothness={BAR_SMOOTHNESS}>
                <meshStandardMaterial
                    color={materialColor}
                    // eslint-disable-next-line react/no-unknown-property
                    metalness={METALNESS}
                    // eslint-disable-next-line react/no-unknown-property
                    roughness={ROUGHNESS}
                />
            </RoundedBox>
        </mesh>
    );
};
