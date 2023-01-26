import styled from '@emotion/styled';
import Check from '../Asset/Check';

type colorType = 'orange' | 'green';

interface CheckboxProps {
    isCheck: boolean;
    color: colorType;
    onClick: (isCheck: boolean) => void;
}

export const Checkbox = ({ isCheck, color = 'orange', onClick }: CheckboxProps) => {
    return (
        <Box onClick={() => onClick(!isCheck)} check={isCheck} color={color}>
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
