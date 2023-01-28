import React from 'react';
import styled from '@emotion/styled';

interface SpinnerProps {
    size: number;
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
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    // TODO orange100 green500
    border: 5px solid ${(props) => (props.color === 'orange' ? '#ffcdb1' : '#ccffe2')};
    //ToDO orange500 green500
    border-top-color: ${(props) => (props.color === 'orange' ? '#ff7e36' : '#3ddb84')};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: spin 0.8s linear infinite;
`;
export const Spinner = ({ size = 40, color = 'orange' }: SpinnerProps) => {
    return <Block size={size} color={color} />;
};
