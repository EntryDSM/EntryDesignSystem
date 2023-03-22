import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { marginCssType, marginToCss, marginType } from '../utils/margin';
import * as C from '../style/color';
import { icons } from '../style/icon';
import { colorKeyOfType } from '../style/color';

export interface IconProps extends marginCssType {
    className?: string;
    icon: IconType;
    size?: number;
    color?: colorKeyOfType;
    onClick?: () => void;
    cursor?: 'pointer' | 'auto' | 'default' | 'not-allowed';
}

export const Icon: FunctionComponent<IconProps> = ({
    className,
    icon,
    size = 24,
    color,
    onClick,
    cursor,
    margin,
    ...props
}: IconProps) => {
    return (
        <Svg
            className={className}
            viewBox="0 0 24 24"
            onClick={onClick}
            width={size}
            height={size}
            color={C[color ?? 'realWhite']}
            margin={margin ?? [0, 0]}
            cursor={cursor}
            {...props}>
            {icons[icon]}
        </Svg>
    );
};

export type IconType = keyof typeof icons;

const Svg = styled.svg<{ margin?: marginType | marginType[] }>`
    display: inline-block;
    shape-rendering: inherit;
    transform: translate3d(0, 0, 0);
    vertical-align: middle;
    ${({ margin }) => marginToCss({ margin })};
    path {
        fill: currentColor;
    }
`;
