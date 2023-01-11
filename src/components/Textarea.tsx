import styled from '@emotion/styled';
import { useState } from 'react';

interface InputProps {
    placeholder: string;
    width: number;
    label: string;
    limit: number;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
}

export const Textarea = ({
    label = 'title',
    placeholder = 'Placeholder',
    width = 500,
    limit = 300,
    onChange,
    value,
}: InputProps) => {
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
                onChange={(e) => totalOnChange(e)}
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
    //TODO black/900
    color: #141414;
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
    //TODO black/400
    color: #969696;
`;

const TextBox = styled.textarea<{ width: number }>`
    width: ${({ width }) => width}px;
    position: absolute;
    height: 300px;
    //TODO black/400
    border: 1px solid #969696;
    border-radius: 5px;
    padding: 12px 15px;
    outline: none;
    //TODO black900
    color: #141414;
    font-size: 16px;
    line-height: 19px;
    resize: none;
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
