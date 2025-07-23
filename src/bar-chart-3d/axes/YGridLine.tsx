import type { FC } from 'react';
import { BufferGeometry, Line, LineDashedMaterial, Vector3 } from 'three';

import type { YAxisTick } from '../types';
import { GRID_LINE_COLOR, Y_AXIS_LINE_POSITION } from './service';

const GRID_LINE_DASH_SIZE = 0.08;
const GRID_LINE_GAP_SIZE = 0.04;

type Props = {
    tick: YAxisTick;
};

export const YGridLine: FC<Props> = ({ tick }) => {
    const dashedLine = () => {
        const points = [
            new Vector3(Y_AXIS_LINE_POSITION[0], tick.yPos, 0),
            new Vector3(-Y_AXIS_LINE_POSITION[0], tick.yPos, 0),
        ];

        const geometry = new BufferGeometry().setFromPoints(points);
        const material = new LineDashedMaterial({
            color: GRID_LINE_COLOR,
            dashSize: GRID_LINE_DASH_SIZE,
            gapSize: GRID_LINE_GAP_SIZE,
        });

        const line = new Line(geometry, material);
        line.computeLineDistances();

        return line;
    };

    // eslint-disable-next-line react/no-unknown-property
    return <primitive object={dashedLine()} />;
};
