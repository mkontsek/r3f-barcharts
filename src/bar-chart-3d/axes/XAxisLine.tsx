import type { FC } from 'react';

import type { Vector3Array } from '../types';
import { GRID_LINE_COLOR } from './service';

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const X_AXIS_LINE_SIZE: Vector3Array = [3.3, 0.01, 0.01];
const X_AXIS_LINE_OFFSET = 0.05;

type Props = {
    lowestBarPoint: number;
};

export const XAxisLine: FC<Props> = ({ lowestBarPoint }) => {
    return (
        // eslint-disable-next-line react/no-unknown-property
        <mesh position={[0, lowestBarPoint - X_AXIS_LINE_OFFSET, 0]}>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <boxGeometry args={X_AXIS_LINE_SIZE} />
            <meshStandardMaterial color={GRID_LINE_COLOR} />
        </mesh>
    );
};
