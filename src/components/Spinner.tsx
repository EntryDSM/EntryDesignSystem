import React from 'react';
import styled from '@emotion/styled';
import { green100, green500, orange100, orange500 } from '../style/color';
import { marginCssType, marginToCss } from '../utils/margin';

export interface SpinnerProps extends marginCssType {
    color: 'orange' | 'green';
    size?: number;
}

const Block = styled.div<SpinnerProps>`
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    border: 5px solid ${(props) => (props.color === 'orange' ? orange100 : green100)};
    border-top-color: ${(props) => (props.color === 'orange' ? orange500 : green500)};
    ${({ margin }) => marginToCss({ margin })};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: spin 0.8s linear infinite;
`;
export const Spinner: React.FC<SpinnerProps> = ({ color = 'orange', margin, size = 40 }) => {
    return <Block margin={margin} size={size} color={color} />;
};
