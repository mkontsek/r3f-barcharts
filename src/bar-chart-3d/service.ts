import { Color } from 'three';

import type { Performance } from './types';

const POSITIVE_BAR_COLOR = '#22c55e';
const NEGATIVE_BAR_COLOR = '#dc2626';
const BASE_10 = 10;

export const getProcessedAccountPerformance = (data: Performance[]) => {
    return data
        .filter((item) => item.performancePercent)
        .map((item) => {
            const { value } = item.performancePercent!;
            const { precision } = item.performancePercent!;
            const displayValue = precision > 0 ? value / BASE_10 ** precision : value;
            return {
                year: item.year,
                value: displayValue,
                color: displayValue >= 0 ? POSITIVE_BAR_COLOR : NEGATIVE_BAR_COLOR,
            };
        });
};

const COLOR_WHITE = 0xffffff;
const COLOR_BLACK = 0x000000;

const adjustColor = (hexColor: string, amount: number) => {
    const newColor = new Color(hexColor);
    if (amount > 0) {
        newColor.lerp(new Color(COLOR_WHITE), amount);
    } else {
        newColor.lerp(new Color(COLOR_BLACK), Math.abs(amount));
    }

    return newColor;
};

const HOVER_LIGHTEN_AMOUNT = 0.4;
const HOVER_DARKEN_AMOUNT = -0.1;

export const adjustMaterialColor = (color: string, hasAnyHover: boolean, isHovered: boolean) => {
    let result = color;

    if (hasAnyHover && !isHovered) {
        result = adjustColor(color, HOVER_LIGHTEN_AMOUNT).getHexString();
        result = `#${result}`;
    } else if (isHovered) {
        result = adjustColor(color, HOVER_DARKEN_AMOUNT).getHexString();
        result = `#${result}`;
    }

    return result;
};
