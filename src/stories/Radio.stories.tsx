import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Radio } from '../components/Radio';

export default {
    title: 'Component/Radio',
    component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    RadioText: 'asdfasdf',
};
