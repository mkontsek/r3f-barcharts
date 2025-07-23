import type { Vector3Array, YAxisTick } from '../types';

const Y_AXIS_TICK_COUNT = 6;
const SCALE_Y_VALUE = 2;

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
export const Y_AXIS_LINE_POSITION: Vector3Array = [-1.5, 0, 0];
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
export const Y_AXIS_LINE_SIZE: Vector3Array = [0.01, 3.8, 0.01];
export const GRID_LINE_COLOR = 0xd1d5db;

export const getYAxisTicks = (maxValue: number, scale: number) => {
    const result: YAxisTick[] = [];

    Array.from({ length: Y_AXIS_TICK_COUNT + 1 }).forEach((_, i) => {
        const value = (maxValue * SCALE_Y_VALUE * i) / Y_AXIS_TICK_COUNT - maxValue;
        const yPos = value * scale;
        result.push({ value, yPos });
    });

    return result;
};
