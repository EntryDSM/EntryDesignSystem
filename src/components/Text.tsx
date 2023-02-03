import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { colorKeyOfType } from 'style/color';
import { fontKeyOfType } from 'style/font';
import { theme } from '../style/index';

interface TextProps {
    className?: string;
    children?: ReactNode;
    color: colorKeyOfType;
    display?: 'inline' | 'inline-block' | 'block';
    size: fontKeyOfType;
    onClick?: () => void;
    cursor?: 'pointer' | 'auto' | 'default';
    align?: 'center' | 'start' | 'end';
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
}: TextProps) => {
    return (
        <Wrapper
            display={display}
            color={color}
            className={className}
            align={align}
            cursor={cursor}
            onClick={onClick}
            size={size}>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.div<TextProps>`
    display: ${({ display }) => display};
    color: ${({ color }) => theme.color[color]};
    ${({ size }) => theme.font[size]};
    text-align: ${({ align }) => align};
    cursor: ${({ cursor }) => cursor};
`;
