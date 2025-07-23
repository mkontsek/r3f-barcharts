import { Html } from '@react-three/drei';
import type { FC } from 'react';

import styles from '../styles.module.css';
import type { ProcessedDataItem } from '../types';
import { YGridLine } from './YGridLine';
import { YAxisLine } from './YAxisLine';
import { XAxisLine } from './XAxisLine';
import { getYAxisTicks } from './service';

interface Props {
    processedData: ProcessedDataItem[];
    maxValue: number;
    scale: number;
}

const Y_TICK_LABEL_X = -2;
const X_LABEL_Y_OFFSET = 0.3;
const X_LABEL_SPACING = 0.8;
const SCALE_DOWN_X_VALUE = 2;

export const Axes: FC<Props> = ({ processedData, maxValue, scale }) => {
    const yAxisTicks = getYAxisTicks(maxValue, scale);

    const lowestBarPoint = -maxValue * scale;

    return (
        <group>
            <YAxisLine />
            <XAxisLine lowestBarPoint={lowestBarPoint} />

            {yAxisTicks.map((tick) => (
                <YGridLine key={`grid-${tick.value}`} tick={tick} />
            ))}

            {/* Y-axis labels */}
            {yAxisTicks.map((tick) => (
                <Html key={`y-tick-${tick.value}`} position={[Y_TICK_LABEL_X, tick.yPos, 0]} center>
                    <div className={`text-gray-400 ${styles.axisLabel}`}>
                        {`${tick.value.toFixed(0)}%`}
                    </div>
                </Html>
            ))}

            {/* X-axis year labels positioned below the X-axis line */}
            {processedData.map((item: ProcessedDataItem, index: number) => {
                const xPosition =
                    (index - (processedData.length - 1) / SCALE_DOWN_X_VALUE) * X_LABEL_SPACING;
                return (
                    <Html
                        key={`x-label-${item.year}`}
                        position={[xPosition, lowestBarPoint - X_LABEL_Y_OFFSET, 0]}
                        center
                    >
                        <div className={`text-gray-400 ${styles.axisLabel}`}>
                            {item.year}
                            {processedData.length - 1 === index && <sup>*</sup>}
                            {processedData.length - 1 !== index && null}
                        </div>
                    </Html>
                );
            })}
        </group>
    );
};
