import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { marginCssType, marginToCss } from '../utils/margin';
import { theme } from '../style';

export interface SkeletonType extends marginCssType {
    width?: number;
    height?: number;
    isLoaded?: boolean;
    rounded?: number;
    children?: ReactNode;
}

export const Skeleton: React.FC<SkeletonType> = ({
    width,
    height,
    isLoaded,
    children,
    rounded,
    margin,
}) => {
    if (isLoaded)
        return <Container width={width} height={height} rounded={rounded} margin={margin} />;
    return <Hollow margin={margin}>{children}</Hollow>;
};

const Container = styled.div<SkeletonType>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    border-radius: ${(props) => props.rounded}px;
    animation: skeleton 2s 0s infinite ease-in-out alternate;
    ${({ margin }) => marginToCss({ margin })};
    background-color: ${theme.color.black200};
    @keyframes skeleton {
        0% {
            background: ${theme.color.black200};
        }
        40% {
            background: ${theme.color.black50};
        }
        100% {
            background: ${theme.color.black200};
        }
    }
`;

const Hollow = styled.div<SkeletonType>`
    ${({ margin }) => marginToCss({ margin })};
`;
