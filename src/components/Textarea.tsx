import React, { TextareaHTMLAttributes, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { black400, black900, focus } from '../style/color';
import { marginCssType, marginToCss, marginType } from '../utils/margin';

interface InputProps extends marginCssType, TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    placeholder: string;
    width: number | '100%';
    label?: string;
    limit: number;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<InputProps> = ({
    className,
    label = 'title',
    placeholder = 'Placeholder',
    width = 60,
    limit = 300,
    onChange,
    margin,
    value,
    ...props
}) => {
    const [totalText, setTotalText] = useState<number>(0);
    const totalOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTotalText(value?.length);
        onChange(e);
    };

    useEffect(() => {
        setTotalText(value?.length);
    }, [value]);

    return (
        <Container margin={margin} width={width} className={className}>
            <Label>
                <InfoLabel width={width}>
                    {label}
                    <TextCount>
                        {totalText}/{limit}
                    </TextCount>
                </InfoLabel>
                <TextBox
                    {...props}
                    width={width}
                    placeholder={placeholder}
                    onChange={totalOnChange}
                    value={value}
                    maxLength={limit}
                />
            </Label>
        </Container>
    );
};

const Container = styled.div<{ margin?: marginType | marginType[]; width: number | '100%' }>`
    width: ${({ width }) => (width === '100%' ? '100%' : `${width}rem`)};
    ${({ margin }) => marginToCss({ margin })};
    height: 323px;
`;

const Label = styled.label`
    position: relative;
    height: 65px;
    font-size: 14px;
    line-height: 17px;
    color: ${black900};
    font-size: 14px;
`;

const InfoLabel = styled.div<{ width: number | '100%' }>`
    width: ${({ width }) => (width === '100%' ? '100%' : `${width}rem`)};
    margin-left: 5px;
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
    color: ${black900};
    padding-right: 5px;
`;

const TextCount = styled.span`
    color: ${black400};
`;

const TextBox = styled.textarea<{ width: number | '100%' }>`
    position: absolute;
    width: ${({ width }) => (width === '100%' ? '100%' : `${width}rem`)};
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
