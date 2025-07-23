import type { FC } from 'react';
import { useRef, useState } from 'react';
import type { Group } from 'three';

import { getProcessedAccountPerformance } from './service';
import { useAnimateChartTilt } from './hooks/useAnimateChartTilt';
import { Axes } from './axes/Axes';
import { Bar } from './Bar';
import { Tooltip } from './Tooltip';
import type { BarType, Performance, ProcessedDataItem, Vector3Array } from './types';

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const GROUP_INITIAL_POSITION: Vector3Array = [0.3, 0, 0];
const BAR_SPACING = 0.8;
const CHART_SCALE_HEIGHT = 1.8;
const SCALE_HEIGHT = 2;

type Props = {
    data: Performance[];
};

export const Chart: FC<Props> = ({ data }) => {
    const groupRef = useRef<Group | null>(null);
    const [hoveredBar, setHoveredBar] = useState<BarType | null>(null);

    const processedData: ProcessedDataItem[] = getProcessedAccountPerformance(data);

    const maxValue = Math.max(...processedData.map((d) => Math.abs(d.value)));
    const scale = CHART_SCALE_HEIGHT / maxValue; // Scale to fit in reasonable height

    const barHover = (hovered: boolean, barType: BarType) => {
        if (hovered) {
            setHoveredBar(barType);
        } else {
            setHoveredBar(null);
        }
    };

    useAnimateChartTilt(groupRef, hoveredBar);

    return (
        // eslint-disable-next-line react/no-unknown-property
        <group ref={groupRef} position={GROUP_INITIAL_POSITION}>
            <Axes processedData={processedData} maxValue={maxValue} scale={scale} />

            {processedData.map((item, index) => {
                const barHeight = item.value * scale;
                const xPosition = (index - (processedData.length - 1) / SCALE_HEIGHT) * BAR_SPACING;
                const yPosition = barHeight / SCALE_HEIGHT;

                return (
                    <Bar
                        key={item.year}
                        barType={{
                            year: Number(item.year),
                            percentage: item.value,
                            position: [xPosition, yPosition, 0],
                            height: barHeight,
                            color: item.color,
                            isHovered: false,
                        }}
                        isHovered={hoveredBar?.year === item.year}
                        hasAnyHover={hoveredBar !== null}
                        onHover={barHover}
                    />
                );
            })}

            <Tooltip hoveredBar={hoveredBar} />
        </group>
    );
};
