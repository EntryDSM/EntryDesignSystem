import styled from '@emotion/styled';
import React from 'react';
import { black900 } from '../style/color';
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
    options: OptionProps[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
    name,
    width,
    unit,
    options,
    onChange,
    margin,
}) => {
    return (
        <Container margin={margin}>
            <DropdownLabel>
                <DropdownWrapper width={width}>
                    <Select name={name} onChange={onChange}>
                        {options.map((item) => (
                            <Option key={item.value} value={item.value}>
                                {item.label}
                            </Option>
                        ))}
                    </Select>
                    <IconBlock>
                        <Icon icon="DownArrow" color="black900" />
                    </IconBlock>
                </DropdownWrapper>
                {unit && (
                    <Text color="black900" size="body2">
                        {unit}
                    </Text>
                )}
            </DropdownLabel>
        </Container>
    );
};

const Container = styled.div<{ margin?: marginType | marginType[]; label?: string }>`
    ${({ margin }) => marginToCss({ margin })};
    height: 42px;
`;

const DropdownLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const DropdownWrapper = styled.div<{ width?: number }>`
    position: relative;
    width: ${({ width }) => width}px;
`;

const Select = styled.select`
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    width: 100%;
    height: 42px;
    border: 1px solid ${black900};
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
