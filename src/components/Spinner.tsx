import React from 'react';
import styled from '@emotion/styled';
import { green100, green500, orange100, orange500 } from '../style/color';

interface SpinnerProps {
    color: 'orange' | 'green';
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
    width: 40px;
    height: 40px;
    border: 5px solid ${(props) => (props.color === 'orange' ? orange100 : green100)};
    border-top-color: ${(props) => (props.color === 'orange' ? orange500 : green500)};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: spin 0.8s linear infinite;
`;
export const Spinner: React.FC<SpinnerProps> = ({ color = 'orange' }) => {
    return <Block color={color} />;
};
