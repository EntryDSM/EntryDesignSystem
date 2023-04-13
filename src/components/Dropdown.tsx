import styled from '@emotion/styled';
import React from 'react';
import { black300, black900 } from '../style/color';
import { marginCssType, marginToCss, marginType } from '../utils/margin';
import { Icon } from './Icon';
import { Text } from './Text';

interface OptionProps {
    value: string;
    label: string;
}

interface DropdownProps extends marginCssType {
    name: string;
    width: number;
    unit?: string;
    disabled?: boolean;
    options: OptionProps[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
    name,
    width,
    unit,
    disabled = false,
    options,
    onChange,
    margin,
}) => {
    return (
        <Container margin={margin} width={width}>
            <DropdownWrapper>
                <DropdownLabel>
                    <Select name={name} width={width} onChange={onChange} disabled={disabled}>
                        {options.map((item) => (
                            <Option key={item.value} value={item.value}>
                                {item.label}
                            </Option>
                        ))}
                    </Select>
                    <IconBlock>
                        <Icon icon="DownArrow" color={disabled ? 'black300' : 'black900'} />
                    </IconBlock>
                </DropdownLabel>
            </DropdownWrapper>
            {unit && (
                <Text color={disabled ? 'black300' : 'black900'} size="body2">
                    {unit}
                </Text>
            )}
        </Container>
    );
};

const Container = styled.div<{ margin?: marginType | marginType[]; width: number }>`
    ${({ margin }) => marginToCss({ margin })};
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    width: ${({ width }) => width}px;
    height: 42px;
`;

const DropdownWrapper = styled.div``;

const DropdownLabel = styled.label``;

const Select = styled.select<{ width: number }>`
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    width: ${({ width }) => width}px;
    height: 42px;
    border: 1px solid ${({ disabled }) => (disabled ? black300 : black900)};
    border-radius: 5px;
    padding: 0px 15px;
`;

const IconBlock = styled.div`
    position: absolute;
    top: 8px;
    right: 10px;
`;

const Option = styled.option`
    -webkit-appearance: none;
    width: 100%;
    height: 41px;
`;
