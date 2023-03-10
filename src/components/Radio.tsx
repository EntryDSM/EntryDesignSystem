import React, { useState } from 'react';
import styled from '@emotion/styled';
import { black50, black500, orange400, orange500, green300, green500 } from '../style/color';
import { marginCssType, marginToCss, marginType } from '../utils/margin';

type colorType = 'orange' | 'green';

interface RadioProps extends marginCssType {
    title: string;
    label: string[];
    color: colorType;
}

export const Radio: React.FC<RadioProps> = ({ title, label, color = 'orange', margin }) => {
    const [click, setClick] = useState<string>('');
    const onClick = (id: string) => {
        setClick(id);
    };
    return (
        <Container margin={margin}>
            <Title>{title}</Title>
            <LabelWrapper>
                {label &&
                    label.map((item) => (
                        <Label onClick={() => onClick(item)} key={item}>
                            <Border isClick={click === item} color={color} id={item}>
                                {click === item && <Circle color={color} />}
                            </Border>
                            {item}
                        </Label>
                    ))}
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
    display: flex;
    align-items: center;
`;

const Label = styled.div`
    margin-right: 16px;
    font-size: 18px;
    display: flex;
    cursor: pointer;
`;

const Border = styled.div<{ isClick: boolean; color: colorType }>`
    width: 26px;
    height: 26px;
    background-color: ${black50};
    border: 1px solid ${({ isClick, color }) => (isClick ? colorGenerator[color].border : black500)};
    border-radius: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
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
