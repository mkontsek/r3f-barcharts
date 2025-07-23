import { Html } from '@react-three/drei';
import type { FC } from 'react';

import type { BarType } from './types';
import styles from './styles.module.css';

const HOVER_OFFSET_Y = 0.5;
const DECIMAL_POINTS = 2;

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const Z_INDEX_RANGE = [9999, 9999];

type Props = {
    hoveredBar?: BarType | null;
};

export const Tooltip: FC<Props> = ({ hoveredBar }) => {
    if (!hoveredBar?.pointerPosition) {
        return null;
    }

    return (
        <Html
            position={[
                hoveredBar.pointerPosition[0],
                hoveredBar.pointerPosition[1] + HOVER_OFFSET_Y,
                hoveredBar.pointerPosition[2],
            ]}
            center
            zIndexRange={Z_INDEX_RANGE}
        >
            <div className={styles.tooltip}>{hoveredBar.percentage.toFixed(DECIMAL_POINTS)}%</div>
        </Html>
    );
};
