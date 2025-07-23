export type Vector3Array = [number, number, number];

export type ProcessedDataItem = {
    year: number | string;
    value: number;
    color: string;
};

export type BarType = {
    position: Vector3Array;
    height: number;
    color: string;
    year: number;
    percentage: number;
    isHovered: boolean;
    pointerPosition?: Vector3Array;
};

export type YAxisTick = { value: number; yPos: number };

export type NumberWithPrecision = {
    value: number;
    precision: number;
};

export type Performance = {
    year: number;
    performancePercent?: NumberWithPrecision;
};
