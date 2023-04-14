import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from '../components/Dropdown';

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
