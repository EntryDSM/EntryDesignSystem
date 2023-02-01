import React, { useState } from 'react';
import styled from '@emotion/styled';
import { black400, black900, focus } from '../style/color';

interface InputProps {
    placeholder: string;
    width: number;
    label: string;
    limit: number;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
}

export const Textarea: React.FC<InputProps> = ({
    label = 'title',
    placeholder = 'Placeholder',
    width = 500,
    limit = 300,
    onChange,
    value,
}) => {
    const [totalText, setTotalText] = useState<number>(0);
    const totalOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTotalText(e.target.value.length);
        onChange(e);
    };
    return (
        <Label>
            <InfoLabel width={width}>
                {label}
                <TextCount>
                    {totalText}/{limit}
                </TextCount>
            </InfoLabel>
            <TextBox
                width={width}
                placeholder={placeholder}
                onChange={totalOnChange}
                value={value}
                maxLength={limit}
            />
        </Label>
    );
};

const Label = styled.label`
    height: 65px;
    font-size: 14px;
    line-height: 17px;
    color: ${black900};
    font-size: 14px;
`;

const InfoLabel = styled.div<{ width: number }>`
    width: ${({ width }) => width}px;
    margin-left: 5px;
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
`;

const TextCount = styled.span`
    color: ${black400};
`;

const TextBox = styled.textarea<{ width: number }>`
    width: ${({ width }) => width}px;
    position: absolute;
    height: 300px;
    border: 1px solid ${black400};
    border-radius: 5px;
    padding: 12px 15px;
    outline: none;
    color: ${black900};
    font-size: 16px;
    line-height: 19px;
    resize: none;
    &:focus {
        border-color: ${focus};
    }
    &::placeholder {
        color: ${black400};
        font-size: 16px;
    }
`;
