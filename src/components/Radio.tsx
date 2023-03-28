import React from 'react';
import styled from '@emotion/styled';
import { black50, black500, orange400, orange500, green300, green500 } from '../style/color';
import { marginCssType, marginToCss, marginType } from '../utils/margin';

type colorType = 'orange' | 'green';

interface RadioProps extends marginCssType {
    className?: string;
    title?: string;
    RadioText?: string;
    color?: colorType;
    isClicked: boolean;
    onClick: () => void;
}

export const Radio: React.FC<RadioProps> = ({
    title,
    RadioText,
    color = 'orange',
    margin,
    isClicked,
    onClick,
    className,
}) => {
    return (
        <Container margin={margin}>
            {title && <Title>{title}</Title>}
            <LabelWrapper onClick={onClick} className={className}>
                <Border isClick={isClicked} color={color}>
                    {isClicked && <Circle color={color} />}
                </Border>
                {RadioText}
            </LabelWrapper>
        </Container>
    );
};

const Container = styled.div<{ margin?: marginType | marginType[] }>`
    ${({ margin }) => marginToCss({ margin })};
`;

const Title = styled.div`
    padding: 6px 4px;
    font-size: 14px;
`;

const LabelWrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 400;
`;

const Border = styled.div<{ isClick: boolean; color: colorType }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    background-color: ${black50};
    border: 1px solid ${({ isClick, color }) => (isClick ? colorGenerator[color].border : black500)};
    border-radius: 13px;
`;

const Circle = styled.div<{ color: colorType }>`
    width: 16px;
    height: 16px;
    background-color: ${({ color }) => colorGenerator[color].circle};
    border: none;
    border-radius: 8px;
`;

const colorGenerator: Record<colorType, Record<string, string>> = {
    orange: {
        border: orange500,
        circle: orange400,
    },
    green: {
        border: green500,
        circle: green300,
    },
};
