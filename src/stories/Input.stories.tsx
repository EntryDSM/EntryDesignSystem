import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from '../components/Input';

export default {
    title: 'component/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const PrimaryInput = Template.bind({});

PrimaryInput.args = {
    type: 'text',
};
