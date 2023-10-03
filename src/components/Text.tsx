import styled from '@emotion/styled';
import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { colorKeyOfType } from 'style/color';
import { fontKeyOfType } from 'style/font';
import { marginCssType, marginToCss } from '../utils/margin';
import { theme } from '../style/index';

export interface TextProps extends marginCssType, HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    color: colorKeyOfType;
    display?: CSSProperties['display'];
    size: fontKeyOfType;
    onClick?: () => void;
    cursor?: CSSProperties['cursor'];
    align?: CSSProperties['alignItems'];
    width?: number;
    textOverflow?: CSSProperties['textOverflow'];
    whiteSpace?: CSSProperties['whiteSpace'];
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
    textOverflow,
    whiteSpace = 'pre-line',
    ...props
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
            width={width}
            textOverflow={textOverflow}
            whiteSpace={whiteSpace}
            {...props}>
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
    justify-content: ${({ align }) => align};
    white-space: ${({ whiteSpace }) => whiteSpace};
    text-overflow: ${({ textOverflow }) => textOverflow};
`;
