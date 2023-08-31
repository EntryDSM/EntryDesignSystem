import React, { CSSProperties, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Icon, IconType } from './Icon';
import * as F from '../style/font';
import {
    black300,
    black600,
    black700,
    black900,
    colorKeyOfType,
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
import { marginCssType, marginToCss } from '../utils/margin';

type DefaultKindType = 'contained' | 'rounded' | 'outlined' | 'delete';
type kindType = DefaultKindType;
type colorType = 'black' | 'orange' | 'green' | 'delete';
type ButtonEventType = 'enabled' | 'hover' | 'pressed' | 'disabled';

interface ButtonProps extends marginCssType {
    /** delete 쓸때 무조건 kind랑 color를 둘다 delete로 설정하세요. */
    kind?: kindType;
    /** delete 쓸때 무조건 color랑 kind를 둘다 delete로 설정하세요. */
    color?: colorType;
    children?: ReactNode;
    disabled?: boolean;
    icon?: IconType;
    cursor?: CSSProperties['cursor'];
    onClick: () => void;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    className,
    kind = 'contained',
    color = 'black',
    disabled = false,
    children,
    onClick,
    margin,
    icon,
    cursor,
}) => {
    return (
        <Wrapper
            className={className}
            onClick={() => !disabled && onClick()}
            icon={icon}
            kind={kind}
            color={color}
            cursor={cursor ?? 'pointer'}
            margin={margin ?? [0, 0]}
            disabled={disabled}>
            {icon && (
                <Icon
                    icon={icon}
                    color={
                        colorGenerator[color][disabled ? 'disabled' : 'enabled'] as colorKeyOfType
                    }
                    size={18}
                    margin={['right', children ? 3 : 0]}
                />
            )}
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.button<
    Required<Omit<ButtonProps, 'onClick' | 'children' | 'className' | 'icon'>> & { icon?: IconType }
>`
    cursor: ${({ cursor, disabled }) => (disabled ? 'no-drop' : cursor)};
    width: auto;
    height: 42px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px 12px;
    border: none;
    gap: 3px;
    min-width: ${({ icon }) => (icon ? 42 : 80)}px;
    border-radius: ${({ kind }) => (kind === 'rounded' ? 21 : 5)}px;
    ${F.font.body3};
    ${({ margin }) => marginToCss({ margin })};
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

    ${({ disabled, color }) =>
        !disabled &&
        `
    &:hover {
        background-color: ${colorGenerator[color].hover};
        border-color: ${colorGenerator[color].hover};
        color: ${realWhite};
    }

    &:active {å
        background-color: ${colorGenerator[color].pressed};
        border-color: ${colorGenerator[color].pressed};
        color: ${realWhite};
    }
    `}
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
