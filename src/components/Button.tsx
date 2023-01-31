import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import {
    black300,
    black600,
    black700,
    black900,
    error,
    green200,
    green300,
    green400,
    green500,
    orange200,
    orange300,
    orange400,
    orange500,
    realWhite,
} from '../style/color';

type kindType = 'contained' | 'rounded' | 'outlined' | 'delete';
type colorType = 'black' | 'orange' | 'green' | 'delete';
type ButtonEventType = 'enabled' | 'hover' | 'pressed' | 'disabled';

interface ButtonProps {
    /** delete 쓸때 무조건 kind랑 color를 둘다 delete로 설정하세요. */
    kind?: kindType;
    /** delete 쓸때 무조건 color랑 kind를 둘다 delete로 설정하세요. */
    color?: colorType;
    children?: ReactNode;
    disabled?: boolean;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    kind = 'contained',
    color = 'black',
    disabled = false,
    children,
    onClick,
}) => {
    return (
        <Wrapper onClick={() => !disabled && onClick} kind={kind} color={color} disabled={disabled}>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.button<Required<Omit<ButtonProps, 'onClick' | 'children'>>>`
    cursor: ${({ disabled }) => disabled && 'no-drop'};
    height: 42px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px 12px;
    border: none;
    border-radius: ${({ kind }) => (kind === 'rounded' ? 21 : 5)}px;
    max-width: 1030px;
    min-width: 80px;
    color: ${({ kind, color, disabled }) =>
        kind === 'outlined' || kind === 'delete'
            ? colorGenerator[color][disabled ? 'disabled' : 'enabled']
            : '#FFFFFF'};
    background-color: ${({ kind, color, disabled }) =>
        kind === 'outlined' || kind === 'delete'
            ? '#FFFFFF'
            : colorGenerator[color][disabled ? 'disabled' : 'enabled']};
    border: 1px solid
        ${({ color, disabled }) => colorGenerator[color][disabled ? 'disabled' : 'enabled']};
    :hover {
        background-color: ${({ color, disabled }) =>
            colorGenerator[color][disabled ? 'disabled' : 'hover']};
        border-color: ${({ color, disabled }) =>
            colorGenerator[color][disabled ? 'disabled' : 'hover']};
        color: ${realWhite};
    }
    :active {
        background-color: ${({ color, disabled }) =>
            colorGenerator[color][disabled ? 'disabled' : 'pressed']};
        border-color: ${({ color, disabled }) =>
            colorGenerator[color][disabled ? 'disabled' : 'pressed']};
        color: ${realWhite};
    }
`;

const colorGenerator: Record<colorType, Record<ButtonEventType, string>> = {
    black: {
        enabled: black900,
        hover: black700,
        pressed: black600,
        disabled: black300,
    },
    orange: {
        enabled: orange500,
        hover: orange400,
        pressed: orange300,
        disabled: orange200,
    },
    green: {
        enabled: green500,
        hover: green400,
        pressed: green300,
        disabled: green200,
    },
    delete: {
        enabled: error,
        hover: error,
        pressed: error,
        disabled: black300,
    },
};