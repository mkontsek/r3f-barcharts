import type { FC } from 'react';

import { GRID_LINE_COLOR, Y_AXIS_LINE_POSITION, Y_AXIS_LINE_SIZE } from './service';

export const YAxisLine: FC = () => {
    return (
        // eslint-disable-next-line react/no-unknown-property
        <mesh position={Y_AXIS_LINE_POSITION}>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <boxGeometry args={Y_AXIS_LINE_SIZE} />
            <meshStandardMaterial color={GRID_LINE_COLOR} />
        </mesh>
    );
};
