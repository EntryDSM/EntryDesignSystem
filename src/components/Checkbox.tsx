import React from 'react';
import styled from '@emotion/styled';
import { black50, black500, green500, orange500 } from '../style/color';
import { marginCssType, marginToCss, marginType } from '../utils/margin';

type colorType = 'orange' | 'green';

interface CheckboxProps extends marginCssType {
    className?: string;
    color?: colorType;
    isChecked?: boolean;
    label: string;
    name: string;
    value: string;
    onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    margin,
    className,
    color = 'orange',
    isChecked,
    label,
    name,
    value,
    onClick,
}) => {
    return (
        <Label margin={margin} className={className}>
            <Box
                type="checkbox"
                checked={isChecked}
                color={color}
                name={name}
                value={value}
                onClick={(e) => onClick(e)}
            />
            {label}
        </Label>
    );
};

const Label = styled.label<{ margin?: marginType | marginType[] }>`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 400;
    ${({ margin }) => marginToCss({ margin })};
`;

const Box = styled.input<{ color: colorType }>`
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    width: 26px;
    height: 26px;
    background-color: ${black50};
    border: 1px solid ${black500};
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:checked {
        background-color: ${({ color }) => colorGenerate[color]};
        border: ${({ color }) => colorGenerate[color]};
    }
    &:before {
        content: '✓';
        color: white;
        font-size: 26px;
        text-align: center;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        margin-top: 3px;
    }
    &:checked::before {
        transform: scale(1);
    }
`;

const colorGenerate: Record<colorType, string> = {
    orange: orange500,
    green: green500,
};
