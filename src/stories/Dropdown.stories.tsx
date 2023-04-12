import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Dropdown from '../components/Dropdown';

export default {
    title: 'Component/Dropdown',
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    width: 200,
    options: [
        { value: 'helloasdf', label: 'hello' },
        { value: 'annyungasdf', label: 'annyung' },
        { value: 'gutentakasdf', label: 'gutentak' },
    ],
    name: 'this is whole name',
    unit: '년',
};
