import { ReactNode } from 'react';
import styled from '@emotion/styled';

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

export const Button = ({
    kind = 'contained',
    color = 'black',
    disabled = false,
    children,
    onClick,
}: ButtonProps) => {
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
        // TODO realWhite
        color: #ffffff;
    }
    :active {
        background-color: ${({ color, disabled }) =>
            colorGenerator[color][disabled ? 'disabled' : 'pressed']};
        border-color: ${({ color, disabled }) =>
            colorGenerator[color][disabled ? 'disabled' : 'pressed']};
        // TODO realWhite
        color: #ffffff;
    }
`;

const colorGenerator: Record<colorType, Record<ButtonEventType, string>> = {
    black: {
        // TODO black900
        enabled: '#141414',
        // TODO black700
        hover: '#494949',
        // TODO black600
        pressed: '#5F5F5F',
        // TODO black300
        disabled: '#B0B0B0',
    },
    orange: {
        // TODO orange500
        enabled: '#FF7E36',
        // TODO orange400
        hover: '#FF9154',
        // TODO orange300
        pressed: '#FFA26E',
        // TODO orange200
        disabled: '#FFB48B',
    },
    green: {
        // TODO green500
        enabled: '#3DDB84',
        // TODO green400
        hover: '#4FF098',
        // TODO green300
        pressed: '#68EDA4',
        // TODO green200
        disabled: '#92FFC3',
    },
    delete: {
        // TODO Error
        enabled: '#E84045',
        // TODO Error
        hover: '#E84045',
        // TODO Error
        pressed: '#E84045',
        // TODO black300
        disabled: '#B0B0B0',
    },
};
