import React from 'react';
import styled from '@emotion/styled';
import { black300, green200, green500, orange200, orange500, realWhite } from 'style/color';

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
        bar: orange200,
        circle: orange500,
    },
    green: {
        bar: green200,
        circle: green500,
    },
};

const Wrapper = styled.div`
    height: 26px;
`;

const Circle = styled.div<{ isClick: boolean; color: colorType }>`
    width: 26px;
    height: 26px;
    background: ${({ isClick, color }) => (isClick ? colorGenrator[color].circle : realWhite)};
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
    background-color: ${({ isClick, color }) => (isClick ? colorGenrator[color].bar : black300)};
    display: flex;
    align-items: center;
    position: relative;
`;
