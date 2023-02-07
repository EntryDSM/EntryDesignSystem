import React from 'react';
import styled from '@emotion/styled';
import Check from '../Asset/Check';
import { black50, black500, green500, orange500 } from '../style/color';
import { marginCssType, marginToCss, marginType } from '../utils/margin';

type colorType = 'orange' | 'green';

interface CheckboxProps extends marginCssType {
    isCheck: boolean;
    color: colorType;
    onClick: (isCheck: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    isCheck,
    color = 'orange',
    onClick,
    margin,
}) => {
    return (
        <Box margin={margin} onClick={() => onClick(!isCheck)} check={isCheck} color={color}>
            {isCheck && <Check />}
        </Box>
    );
};

const Box = styled.div<{ check: boolean; color: colorType; margin?: marginType | marginType[] }>`
    width: 26px;
    height: 26px;
    background-color: ${({ check, color }) => (check ? colorGenerate[color] : black50)};
    border: 1px solid ${({ check, color }) => (check ? colorGenerate[color] : black500)};
    ${({ margin }) => marginToCss({ margin })};
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const colorGenerate: Record<colorType, string> = {
    orange: orange500,
    green: green500,
};
