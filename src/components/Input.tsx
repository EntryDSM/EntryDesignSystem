import React, { useState } from 'react';
import styled from '@emotion/styled';
import Visible from '../style/icon/Visible';
import NotVisible from '../style/icon/NotVisible';
import { black400, black900, focus } from '../style/color';
import { marginCssType, marginToCss, marginType } from '../utils/margin';
import { theme } from '../style';
import { Icon, IconType } from './Icon';

type inputType = 'text' | 'password';

interface InputType extends marginCssType {
    className?: string;
    type: inputType;
    placeholder: string;
    width: number | '100%';
    unit?: string;
    icon?: IconType;
    label?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
}

export const Input: React.FC<InputType> = ({
    className,
    label,
    type,
    placeholder = 'Placeholder',
    width = 250,
    unit,
    icon,
    margin,
    onChange,
    value,
    name,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <Container margin={margin} label={label} className={className}>
            <InputLabel>
                {label && <LabelText>{label}</LabelText>}
                <InputWrapper width={width}>
                    <InputBox
                        unit={unit}
                        icon={icon}
                        name={name}
                        onChange={onChange}
                        value={value}
                        type={(isOpen && 'text') || type}
                        placeholder={placeholder}
                    />
                    {type === 'password' && (
                        <UnitText onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <Visible /> : <NotVisible />}
                        </UnitText>
                    )}
                    {unit && <UnitText>{unit}</UnitText>}
                    {icon && (
                        <UnitText>
                            <Icon icon={icon} color="black400" size={20} />
                        </UnitText>
                    )}
                </InputWrapper>
            </InputLabel>
        </Container>
    );
};

const Container = styled.div<{ margin?: marginType | marginType[]; label?: string }>`
    ${({ margin }) => marginToCss({ margin })};
    height: ${({ label }) => (label ? 64 : 40)}px;
`;

const InputLabel = styled.label`
    font-size: 14px;
    line-height: 17px;
    color: ${black900};
`;

const LabelText = styled.div`
    margin-left: 5px;
    margin-bottom: 6px;
    ${theme.font.body5};
`;

const InputWrapper = styled.div<{ width: number | '100%' }>`
    position: relative;
    width: ${({ width }) => (width === '100%' ? '100%' : `${width}px`)};
    border: none;
`;

const InputBox = styled.input<{ unit?: string; icon?: IconType }>`
    position: absolute;
    width: 100%;
    height: 42px;
    border: 1px solid ${black400};
    border-radius: 5px;
    padding: 14px;
    outline: none;
    padding-right: ${({ unit, icon }) => (unit || icon) && '34px'};
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
    position: absolute;
    right: 12px;
    margin-top: 12px;
    ${theme.font.body3};
`;
