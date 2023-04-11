import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { colorKeyOfType } from 'style/color';
import { fontKeyOfType } from 'style/font';
import { marginCssType, marginToCss } from '../utils/margin';
import { theme } from '../style/index';

interface TextProps extends marginCssType {
    className?: string;
    children?: ReactNode;
    color: colorKeyOfType;
    display?: 'inline' | 'inline-block' | 'block' | 'flex';
    size: fontKeyOfType;
    onClick?: () => void;
    cursor?: 'pointer' | 'auto' | 'default';
    align?: 'center' | 'start' | 'end';
    width?: number;
}

export const Text = ({
    display = 'block',
    children,
    color = 'black900',
    size = 'body1',
    className,
    onClick,
    cursor,
    align,
    margin,
    width,
}: TextProps) => {
    return (
        <Wrapper
            display={display}
            color={color}
            className={className}
            align={align}
            cursor={cursor}
            onClick={onClick}
            margin={margin}
            size={size}
            width={width}>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.div<TextProps>`
    display: ${({ display }) => display};
    align-items: center;
    color: ${({ color }) => theme.color[color]};
    ${({ size }) => theme.font[size]};
    text-align: ${({ align }) => align};
    cursor: ${({ cursor }) => cursor};
    ${({ margin }) => marginToCss({ margin })};
    width: ${({ width }) => width}px;
    ${({ width }) => width && `display: flex; justify-content: center;`}
    white-space: pre-line;
`;
