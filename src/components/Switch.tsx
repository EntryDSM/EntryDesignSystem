import React from 'react';
import styled from '@emotion/styled';

type colorType = 'orange' | 'green';

interface SwitchProps {
    isClick: boolean;
    color: colorType;
    onClick: () => void;
}

export const Switch = ({ isClick, color = 'orange', onClick }: SwitchProps) => {
    return (
        <Wrapper>
            <Bar onClick={onClick} isClick={isClick} color={color}>
                <Circle isClick={isClick} color={color} />
            </Bar>
        </Wrapper>
    );
};

const colorGenrator: Record<colorType, Record<string, string>> = {
    orange: {
        // TODO orange200
        bar: '#FFB48B',
        // TODO orange500
        circle: '#FF7E36',
    },
    green: {
        // TODO green500
        bar: '#92FFC3',
        // TODO green200
        circle: '#3DDB84',
    },
};

const Wrapper = styled.div`
    height: 26px;
`;

const Circle = styled.div<{ isClick: boolean; color: colorType }>`
    width: 26px;
    height: 26px;
    // TODO realWhite
    background: ${({ isClick, color }) => (isClick ? colorGenrator[color].circle : '#ffffff')};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 13px;
    position: absolute;
    left: ${({ isClick }) => (isClick ? 24 : 0)}px;
    transition: all 0.1s linear;
`;

const Bar = styled.div<{ isClick: boolean; color: colorType }>`
    width: 50px;
    height: 20px;
    border: none;
    border-radius: 10px;
    // TODO black/300
    background-color: ${({ isClick, color }) => (isClick ? colorGenrator[color].bar : '#b0b0b0')};
    display: flex;
    align-items: center;
    position: relative;
`;
