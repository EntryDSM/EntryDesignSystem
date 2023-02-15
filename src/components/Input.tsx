import React, { useState } from 'react';
import styled from '@emotion/styled';
import Visible from '../Asset/Visible';
import NotVisible from '../Asset/NotVisible';
import { black400, black900, focus } from '../style/color';
import { marginCssType, marginToCss, marginType } from '../utils/margin';

type inputType = 'text' | 'password';

interface InputType extends marginCssType {
    type: inputType;
    placeholder: string;
    width: number;
    unit?: string;
    label: string;
}

export const Input: React.FC<InputType> = ({
    label,
    type,
    placeholder = 'Placeholder',
    width = 250,
    unit,
    margin,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <Container margin={margin}>
            <InputLabel>
                {label && <LabelText>{label}</LabelText>}
                <InputWrapper width={width}>
                    <InputBox type={(isOpen && 'text') || type} placeholder={placeholder} />
                    {type === 'password' && (
                        <UnitText onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <Visible /> : <NotVisible />}
                        </UnitText>
                    )}
                    {unit && <UnitText>{unit}</UnitText>}
                </InputWrapper>
            </InputLabel>
        </Container>
    );
};

const Container = styled.div<{ margin?: marginType | marginType[] }>`
    ${({ margin }) => marginToCss({ margin })};
`;

const InputLabel = styled.label`
    height: 65px;
    font-size: 14px;
    line-height: 17px;
    color: ${black900};
`;

const LabelText = styled.div`
    margin-left: 5px;
    margin-bottom: 6px;
    font-size: 14px;
    font-weight: 500;
    color: ${black900};
`;

const InputWrapper = styled.div<{ width: number }>`
    width: ${({ width }) => width}rem;
    position: relative;
    border: none;
`;

const InputBox = styled.input`
    position: absolute;
    width: 100%;
    height: 40px;
    border: 1px solid ${black400};
    border-radius: 5px;
    padding-left: 14px;
    outline: none;
    color: ${black900};
    &:focus {
        border-color: ${focus};
    }
    &::placeholder {
        color: ${black400};
        font-size: 16px;
    }
`;

const UnitText = styled.div`
    height: 20px;
    position: absolute;
    right: 0px;
    margin-top: 12px;
    font-size: 16px;
`;
