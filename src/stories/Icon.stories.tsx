import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Icon } from '../components/Icon';

export default {
    title: 'Component/Icon',
    component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    color: 'orange500',
};
