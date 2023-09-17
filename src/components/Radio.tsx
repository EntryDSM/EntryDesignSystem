import React, { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { black50, black500, orange400, orange500, green300, green500 } from '../style/color';
import { marginCssType, marginToCss, marginType } from '../utils/margin';

type colorType = 'orange' | 'green';

interface RadioProps extends marginCssType, InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    title?: string;
    color?: colorType;
    isChecked: boolean;
    label: string;
}

export const Radio: React.FC<RadioProps> = ({
    margin,
    className,
    title,
    color = 'orange',
    isChecked,
    label,
    ...props
}) => {
    return (
        <Container margin={margin} className={className}>
            {title && <Title>{title}</Title>}
            <Label>
                <Input type="radio" color={color} defaultChecked={isChecked} {...props} />
                {label}
            </Label>
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

const Label = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 400;
`;

const Input = styled.input<{ color: colorType }>`
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    display: grid;
    place-content: center;
    width: 26px;
    height: 26px;
    background-color: ${black50};
    border: 1px solid ${black500};
    border-radius: 13px;
    &:checked {
        border: 1px solid ${({ color }) => colorGenerator[color].border};
    }
    &::before {
        content: '';
        width: 16px;
        height: 16px;
        border-radius: 8px;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em ${({ color }) => colorGenerator[color].circle};
    }

    &:checked::before {
        transform: scale(1);
    }
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
