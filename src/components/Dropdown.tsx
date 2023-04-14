import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';
import { black100, black200, black300, black400, black900 } from '../style/color';
import { marginCssType, marginToCss, marginType } from '../utils/margin';
import { Icon } from './Icon';

interface DropdownProps extends marginCssType {
    className?: string;
    width: number;
    unit?: string;
    disabled?: boolean;
    options: string[];
    onChange: (data: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
    className,
    width,
    unit,
    disabled = false,
    options,
    /** onChange는 option에서 선택된 text값을 반화만 하기 때문에 setState만 넣으셔도 됩니다. */
    onChange,
    margin,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [data, setData] = useState<string>('없음');
    const outsideRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (outsideRef.current && !outsideRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [outsideRef]);
    useEffect(() => {
        options.unshift('없음');
    }, []);
    return (
        <Container margin={margin} ref={outsideRef}>
            <DropdownContainer>
                <Selector
                    className={className}
                    width={width}
                    disabled={disabled}
                    onClick={() => !disabled && setIsOpen(!isOpen)}>
                    {data}
                    <CheckSvg isOpen={isOpen}>
                        <Icon icon="DownArrow" color={disabled ? 'black300' : 'black900'} />
                    </CheckSvg>
                </Selector>
                {unit}
            </DropdownContainer>
            {isOpen && options && (
                <Options width={width}>
                    {options
                        .filter((item) => data !== item)
                        .map((label) => (
                            <Option
                                key={label}
                                width={width}
                                onClick={() => {
                                    setIsOpen(false);
                                    setData(label);
                                    onChange(label);
                                }}>
                                {label}
                            </Option>
                        ))}
                </Options>
            )}
        </Container>
    );
};

const Container = styled.div<{ margin?: marginType | marginType[] }>`
    ${({ margin }) => marginToCss({ margin })};
    height: 42px;
`;

const DropdownContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 400;
    color: ${black900};
`;

const Selector = styled.div<{ width: number; disabled?: boolean }>`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    width: ${({ width }) => width}px;
    height: 38px;
    background-color: white;
    border: 1px solid ${black900};
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    color: ${black900};
    padding-left: 12px;
    &:hover {
        background-color: ${black100};
    }
    &:active {
        background-color: ${black200};
    }
    ${({ disabled }) =>
        disabled &&
        css`
            cursor: not-allowed;
            color: ${black300};
            border-color: ${black300};
            &:hover,
            &:active {
                background-color: white;
            }
        `}
`;

const CheckSvg = styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: 5px;
    right: 10px;
    rotate: ${({ isOpen }) => (isOpen ? 180 : 0)}deg;
    transition: 0.2s;
`;

const Options = styled.div<{ width: number }>`
    display: flex;
    flex-direction: column;
    width: ${({ width }) => width}px;
    max-height: 160px;
    background-color: white;
    border: 1px solid ${black400};
    border-radius: 5px;
    margin-top: 5px;
    overflow: scroll;
    z-index: 10;
`;

const Option = styled.div<{ width: number }>`
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 35px;
    background-color: white;
    font-size: 16px;
    font-weight: 400;
    color: ${black900};
    padding: 5px;
    &::after {
        content: '';
        position: absolute;
        top: 35px;
        width: ${({ width }) => width - 14}px;
        height: 1px;
        background-color: ${black200};
        z-index: 11;
    }
    &:hover {
        background-color: ${black200};
        &::after {
            content: none;
        }
    }
    &:active {
        background-color: ${black300};
    }
    &:first-of-type {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        &::after {
            content: none;
        }
    }
`;
