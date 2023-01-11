import styled from '@emotion/styled';
import { ReactComponent as Check } from '../../public/Asset/check.svg';

type colorType = 'orange' | 'green';

interface CheckboxProps {
    isCheck: boolean;
    color: colorType;
}

export const Checkbox = ({ isCheck, color = 'orange' }: CheckboxProps) => {
    return (
        <Box check={isCheck} color={color}>
            {/* TODO realWhite */}
            {isCheck && <Check />}
        </Box>
    );
};

const Box = styled.div<{ check: boolean; color: colorType }>`
    width: 26px;
    height: 26px;
    // TODO black/50
    background-color: ${({ check, color }) => (check ? colorGenerate[color] : '#FBFBFB')};
    // TODO black/500
    border: 1px solid ${({ check, color }) => (check ? colorGenerate[color] : '#737373')};
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const colorGenerate: Record<colorType, string> = {
    // TODO orange/500
    orange: '#FF7E36',
    // TODO green/500
    green: '#3DDB84',
};
