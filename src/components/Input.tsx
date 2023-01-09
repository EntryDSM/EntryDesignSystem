import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Visible } from '../../public/Asset/visible.svg';
import { ReactComponent as NotVisible } from '../../public/Asset/notVisible.svg';

type typeType = 'text' | 'password';

interface InputType {
    type: typeType;
    placeholder: string;
    width: number;
    addString: string;
    label: string;
}

const Label = styled.label`
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

const Detailfunc = styled.div`
    height: 20px;
    position: absolute;
    right: 0px;
    margin-top: 12px;
    font-size: 16px;
`;

export const Input = ({
    label,
    type,
    placeholder = 'Placeholder',
    width = 250,
    addString,
}: InputType) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isClick, setIsClick] = useState<boolean>(false);
    return (
        <Label>
            {label && <LabelText>{label}</LabelText>}
            <InputWrapper width={width}>
                <InputBox
                    type={(isOpen && 'text') || type}
                    placeholder={isClick ? '' : placeholder}
                    onClick={() => setIsClick(true)}
                    onBlur={() => setIsClick(false)}
                />
                {type === 'password' && (
                    <Detailfunc onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <Visible /> : <NotVisible />}
                    </Detailfunc>
                )}
                {addString && <Detailfunc>{addString}</Detailfunc>}
            </InputWrapper>
        </Label>
    );
};
