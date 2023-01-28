import React, { useState } from 'react';
import styled from '@emotion/styled';

type colorType = 'orange' | 'green';

interface RadioProps {
    title: string;
    label: string[];
    color: colorType;
}

export const Radio = ({ title, label, color = 'orange' }: RadioProps) => {
    const [click, setClick] = useState<string>();
    const onClick = (id: string) => {
        setClick(id);
    };
    return (
        <>
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
        </>
    );
};

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
`;

const Border = styled.div<{ isClick: boolean; color: colorType }>`
    width: 26px;
    height: 26px;
    // black50
    background-color: #fbfbfb;
    // black500
    border: 1px solid
        ${({ isClick, color }) => (isClick ? colorGenerator[color].border : '#737373')};
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
        border: '#FF9154',
        circle: '#FF7E36',
    },
    green: {
        border: '#3DDB84',
        circle: '#68EDA4',
    },
};
