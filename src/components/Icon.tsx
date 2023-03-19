import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import * as C from '../style/color';
import { icons } from '../style/icon';
import { colorKeyOfType } from '../style/color';

const Svg = styled.svg`
    display: inline-block;
    shape-rendering: inherit;
    transform: translate3d(0, 0, 0);
    vertical-align: middle;
    path {
        fill: currentColor;
    }
`;

export const Icon: FunctionComponent<IconProps> = ({
    icon,
    size = 24,
    color,
    onClick,
    cursor,
    ...props
}: IconProps) => {
    return (
        <Svg
            viewBox="0 0 24 24"
            onClick={onClick}
            width={size}
            height={size}
            color={C[color ?? 'realWhite']}
            cursor={cursor}
            {...props}>
            {icons[icon]}
        </Svg>
    );
};

export type IconType = keyof typeof icons;

export interface IconProps {
    icon: IconType;
    size?: number;
    color?: colorKeyOfType;
    onClick?: () => void;
    cursor?: 'pointer' | 'auto' | 'default' | 'not-allowed';
}
