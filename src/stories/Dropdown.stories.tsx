import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from '../components/Dropdown';
import { Input } from '../components/Input';

export default {
    title: 'Component/Dropdown',
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    width: 200,
    options: ['helloasdf'],
    name: 'this is whole name',
    unit: '년',
    onChange: (e) => console.log(e),
};

export const ManyOptions = Template.bind({});

ManyOptions.args = {
    width: 200,
    options: [
        '옵션1',
        '옵션2',
        '옵션3',
        '옵션4',
        '옵션5',
        '옵션6',
        '옵션7',
        '옵션8',
        '옵션9',
        '옵션10',
        '옵션11',
        '옵션12',
    ],
    name: 'this is whole name',
    onChange: (e) => console.log(e),
};

export const CheckInput = () => {
    const [value, setValue] = useState('');
    return (
        <>
            <div style={{ marginLeft: '50px' }}>
                <Dropdown
                    className="birthday"
                    width={85}
                    onChange={(e) => console.log(e)}
                    options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']}
                    unit="월"
                />
            </div>
            <div>
                <Input
                    type="text"
                    placeholder="보호자명"
                    width={230}
                    name="parent_name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </>
    );
};

export const CheckDropdown = () => {
    return (
        <>
            <div style={{ marginLeft: '50px' }}>
                <Dropdown
                    className="birthday"
                    width={85}
                    onChange={(e) => console.log(e)}
                    options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']}
                    unit="월"
                />
            </div>
            <div style={{ marginLeft: '50px' }}>
                <Dropdown
                    className="birthday"
                    width={85}
                    onChange={(e) => console.log(e)}
                    options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']}
                    unit="월"
                />
            </div>
        </>
    );
};
