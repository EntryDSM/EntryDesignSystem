import React, { useState } from 'react';
import styled from '@emotion/styled';
import Visible from '../../public/Asset/visible';
import NotVisible from '../../public/Asset/notVisible';

type inputType = 'text' | 'password';

interface InputType {
    type: inputType;
    placeholder: string;
    width: number;
    unit: string;
    label: string;
}

export const Input = ({
    label,
    type,
    placeholder = 'Placeholder',
    width = 250,
    unit,
}: InputType) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
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
    );
};

const InputLabel = styled.label`
    height: 65px;
    font-size: 14px;
    line-height: 17px;
    //TODO black/900
    color: #141414;
`;

const LabelText = styled.div`
    margin-left: 5px;
    margin-bottom: 6px;
`;

const InputWrapper = styled.div<{ width: number }>`
    width: ${({ width }) => width}px;
    position: relative;
    border: none;
`;

const InputBox = styled.input`
    position: absolute;
    width: 100%;
    height: 40px;
    //TODO black/400
    border: 1px solid #969696;
    border-radius: 5px;
    padding-left: 14px;
    outline: none;
    //TODO black900
    color: #141414;
    &:focus {
        //TODO Focus
        border-color: #006eff;
    }
    &::placeholder {
        //TODO black/400
        color: #969696;
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
